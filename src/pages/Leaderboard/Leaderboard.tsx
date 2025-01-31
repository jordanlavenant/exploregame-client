import LeaderboardCell from "@/components/Leaderboard/LeaderboardCell"
import { gql, useQuery } from "@apollo/client"
import { PlayerScript } from "@exploregame/types"
import { Player } from "@exploregame/types"

const GET_CURRENT_PLAYER = gql`
  query GetCurrentPlayer($id: String!) {
    player(id: $id) {
      id
      username
      Department {
          id
          name
      }
    }
  }
`

const GET_PLAYER_SCRIPT = gql`
  query GetPlayerScript {
    playerScripts {
      id
      Player {
        id
        username
        Department {
          id
          name
        }
      }
      score
      remainingTime
    }
  }
`

const aggregateAndSortPlayers = (playerScripts: PlayerScript[]) => {
  const playerMap: { [key: string]: { score: number; player: Player; remainingTime: number; departement: string } } = {};

  playerScripts.forEach((script) => {
    if (playerMap[script.Player.id]) {
      playerMap[script.Player.id].score += script.score;
    } else {
      playerMap[script.Player.id] = {
          score: script.score,
          player: script.Player,
          remainingTime: script.remainingTime,
          departement: script.Player.Department.name,
      }
    }
  })

  const aggregatedPlayers = Object.values(playerMap).map((entry) => ({
    ...entry.player,
    score: entry.score,
    remainingTime: entry.remainingTime,
  }))

  return aggregatedPlayers.sort((a, b) => b.score - a.score);
}

const Leaderboard = () => {
  // const navigate = useNavigate() 

  const currentPlayer = JSON.parse(localStorage.getItem("player")!)  

  if (!currentPlayer) {
    return <p>Vous n'êtes pas connecté</p>
  }

  const {
    data: currentPlayerData,
    loading: currentPlayerLoading,
    error: currentPlayerError,
  } = useQuery(GET_CURRENT_PLAYER, {
    variables: { id: currentPlayer.id }
  })
  const {
    data,
    loading: playerScriptLoading,
    error: playerScriptError,
  } = useQuery(GET_PLAYER_SCRIPT)


  if (currentPlayerLoading || playerScriptLoading) {
      return <p>Loading...</p>
  }
  if (currentPlayerError) {
      return <p>Error: {currentPlayerError.message}</p>
  }
  if (playerScriptError) {
      return <p>Error: {playerScriptError.message}</p>
  }

  if (!currentPlayerData || !data) {
      return <p>No data</p>
  }

  const playersList = data.playerScripts

  const aggregatePlayerList = aggregateAndSortPlayers(playersList)
  const newSortedPlayer = aggregatePlayerList.map((player, index) => {
      const totalTime = 3600 - player.remainingTime;
      const minutes = Math.floor(totalTime / 60);
      const seconds = totalTime % 60;
      return {
          nomPlayer: player.username,
          temps: `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`,
          score: player.score,
          top: index + 1,
          departement: player.Department.name
      };
  });
  
  const currentPlayerScripts = playersList.filter(
      (script: PlayerScript) => script.Player.id === currentPlayerData.player.id
  );

  const totalScore: number = currentPlayerScripts.reduce((acc: number, script: PlayerScript) => acc + script.score, 0);
  const remainingTime = currentPlayerScripts.length > 0 ? currentPlayerScripts[0].remainingTime : 0;

  const currentPlayerFormated = currentPlayerScripts.length > 0
      ? [{
            nomPlayer: currentPlayerData.player.username,
            temps: `${Math.floor((3600 - remainingTime) / 60)}:${
                (3600 - remainingTime) % 60 < 10
                    ? "0" + (3600 - remainingTime) % 60
                    : (3600 - remainingTime) % 60
            }`,
            top: aggregatePlayerList.findIndex(
                (player) => player.id === currentPlayerData.player.id
            ) + 1,
            score: totalScore,
            departement: currentPlayerData.player.Department.name,
        }]
      : [];

  const currentPlayerDepartment = currentPlayerData.player.Department.name || "Inconnu";
  const playerScriptByFilliere = newSortedPlayer.filter(
      (player) => player.departement === currentPlayerData.player.Department.name
  );

  return (
      <div>
          <h1 className="text-5xl font-bold text-center mt-2">Leaderboard</h1>
          <LeaderboardCell title="Meilleur joueur" listePlayer={newSortedPlayer} />
          <LeaderboardCell title="Votre classement" listePlayer={currentPlayerFormated} />
          <LeaderboardCell title={`Classement de la filière : ${currentPlayerDepartment}`} listePlayer={playerScriptByFilliere} />
      </div>
  )
}   

export default Leaderboard;
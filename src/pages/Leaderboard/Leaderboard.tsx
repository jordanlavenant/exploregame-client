import LeaderboardCell from "@/components/Leaderboard/LeaderboardCell"
import { gql, useQuery } from "@apollo/client"
import { PlayerScript } from "@exploregame/types"
import { Player } from "@exploregame/types"
import Header from "@/components/Header"

const GET_CURRENT_PLAYER = gql`
    query GetCurrentPlayer($id: String!) {
        player(id: $id) {
            lastName
            firstName
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
                lastName
                firstName
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
            };
        }
    });

    const aggregatedPlayers = Object.values(playerMap).map((entry) => ({
        ...entry.player,
        score: entry.score,
        remainingTime: entry.remainingTime,
    }));

    return aggregatedPlayers.sort((a, b) => b.score - a.score);
};

const Leaderboard = () => {
    const currentPlayer = localStorage.getItem("player")
    const {
        data: currentPlayerData,
        loading: currentPlayerLoading,
        error: currentPlayerError,
    } = useQuery(GET_CURRENT_PLAYER, {
        variables: { id: "3e079c93-f716-4b32-a0c8-c5fd2f105ef1" || "" },
        skip: !"3e079c93-f716-4b32-a0c8-c5fd2f105ef1",
    })
    const {
      data,
      loading: playerScriptLoading,
      error: playerScriptError,
    } = useQuery(GET_PLAYER_SCRIPT)

    

    if (!currentPlayer) {
        return <p>Vous n'êtes pas connecté</p>
    }
    if (currentPlayerLoading || playerScriptLoading) {
        return <p>Loading...</p>
    }
    if (currentPlayerError) {
        return <p>Error: {currentPlayerError.message}</p>
    }
    if (playerScriptError) {
        return <p>Error: {playerScriptError.message}</p>
    }
    const playersList = data.playerScripts
    const aggregatePlayerList = aggregateAndSortPlayers(playersList)
    const newSortedPlayer = aggregatePlayerList.map((player, index) => {
        const totalTime = 3600 - player.remainingTime;
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;
        return {
            nomPlayer: player.lastName + " " + player.firstName,
            temps: `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`,
            score: player.score,
            top: index + 1,
            departement: player.Department.name
        };
    });
    const currentPlayerScript: PlayerScript | undefined = playersList.find(
        (script: PlayerScript) => script.Player.id === currentPlayerData.player.id
    );

    const currentPlayerFormated = currentPlayerScript
        ? [{
              nomPlayer: `${currentPlayerData.player.lastName} ${currentPlayerData.player.firstName}`,
              temps: `${Math.floor((3600 - currentPlayerScript.remainingTime) / 60)}:${
                  (3600 - currentPlayerScript.remainingTime) % 60 < 10
                      ? "0" + (3600 - currentPlayerScript.remainingTime) % 60
                      : (3600 - currentPlayerScript.remainingTime) % 60
              }`,
              top: aggregatePlayerList.findIndex(
                  (player) => player.id === currentPlayerData.player.id
              ) + 1,
              score: currentPlayerScript.score,
              departement: currentPlayerData.player.Department.name,
          }]
        : [{nomPlayer: "Jean", temps: "1:30", top: 10, score: 100}];

    const currentPlayerDepartment = currentPlayerData.player.Department.name || "Inconnu";
    const playerScriptByFilliere = newSortedPlayer.filter(
        (player) => player.departement === currentPlayerData.player.Department.name
    );

    const listeTopPlayer = [
        {nomPlayer: "Jean", temps: "1:30", top: 1},
        {nomPlayer: "Paul", temps: "1:45", top: 2},
        {nomPlayer: "Jacques", temps: "2:00", top: 3},
        {nomPlayer: "Marie", temps: "2:15", top: 4},
        {nomPlayer: "Pierre", temps: "2:30", top: 5},
    ]

    const listeTopPlayerFiliere = [
        {nomPlayer: "Jean", temps: "1:30", score: 100, top: 10},
        {nomPlayer: "Paul", temps: "1:45", score: 95, top: 24},
        {nomPlayer: "Jacques", temps: "2:00", score: 90, top: 39},
        {nomPlayer: "Marie", temps: "2:15", score: 85, top: 40},
        {nomPlayer: "Pierre", temps: "2:30", score: 80, top: 52},
    ]

    const listeVous = [
        {nomPlayer: "Jean", temps: "1:30", top: 10, score: 100},
    ]

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
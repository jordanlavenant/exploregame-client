import LeaderboardCell from "@/components/Leaderboard/LeaderboardCell"
import { gql, useQuery } from "@apollo/client"
import { PlayerScript } from "@exploregame/types"
import { Player } from "@exploregame/types"

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
            }
            score
            remainingTime
        }
    }
`

const sortPlayersByScore = (players: PlayerScript[]) => {
    return [...players].sort((a: PlayerScript, b: PlayerScript) => b.score - a.score)
}

const Leaderboard = () => {
    const currentPlayer = localStorage.getItem("player")
    if (!currentPlayer) {
        return <p>Vous n'êtes pas connecté</p>
    }
    const {
        data: currentPlayerData,
        loading: currentPlayerLoading,
        error: currentPlayerError,
    } = useQuery(GET_CURRENT_PLAYER, {
        variables: { id: currentPlayer },
    })
    if (currentPlayerLoading) {
        return <p>Loading...</p>
    }
    if (currentPlayerError) {
        return <p>Error: {currentPlayerError.message}</p>
    }
    const filiere = currentPlayerData.currentPlayer.Department.name
    console.log(filiere)
    const {
      data,
      loading: playerScriptLoading,
      error: playerScriptError,
    } = useQuery(GET_PLAYER_SCRIPT)
    if (playerScriptLoading) {
      return <p>Loading...</p>
    }
    if (playerScriptError) {
      return <p>Error: {playerScriptError.message}</p>
    }
    const playersList = data.playerScripts
    const sortedPlayers = sortPlayersByScore(playersList)
    console.log(playersList)
    console.log(sortedPlayers)

    const newSortedPlayer = sortedPlayers.map((player, index) => {
        const totalTime = 3600 - player.remainingTime;
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;
        return {
            nomPlayer: player.Player.lastName + " " + player.Player.firstName,
            temps: `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`,
            top: index + 1
        };
    });

    const listeTopPlayer = [
        {nomPlayer: "Jean", temps: "1:30", top: 1},
        {nomPlayer: "Paul", temps: "1:45", top: 2},
        {nomPlayer: "Jacques", temps: "2:00", top: 3},
        {nomPlayer: "Marie", temps: "2:15", top: 4},
        {nomPlayer: "Pierre", temps: "2:30", top: 5},
    ]

    const listeTopPlayerFiliere = [
        {nomPlayer: "Jean", temps: "1:30", top: 10},
        {nomPlayer: "Paul", temps: "1:45", top: 24},
        {nomPlayer: "Jacques", temps: "2:00", top: 39},
        {nomPlayer: "Marie", temps: "2:15", top: 40},
        {nomPlayer: "Pierre", temps: "2:30", top: 52},
    ]

    const listeVous = [
        {nomPlayer: "Jean", temps: "1:30", top: 10},
    ]

    return (
        <div>
            <h1 className="text-5xl font-bold text-center mt-2">Leaderboard</h1>
            <LeaderboardCell title="Meilleur joueur" listePlayer={newSortedPlayer} />
            <LeaderboardCell title="Votre classement" listePlayer={listeVous} />
            <LeaderboardCell title="Classement de votre filière" listePlayer={listeTopPlayerFiliere} />
        </div>
    )
}

export default Leaderboard;
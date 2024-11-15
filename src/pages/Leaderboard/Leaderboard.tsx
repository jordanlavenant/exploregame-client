import LeaderboardCell from "@/components/Leaderboard/LeaderboardCell"

const Leaderboard = () => {
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

    return (
        <div>
            <h1 className="text-5xl font-bold text-center mt-2">Leaderboard</h1>
            <LeaderboardCell title="Meilleur joueur" listePlayer={listeTopPlayer} />
            <LeaderboardCell title="Votre Filière" listePlayer={listeTopPlayerFiliere} />
        </div>
    )
}

export default Leaderboard;
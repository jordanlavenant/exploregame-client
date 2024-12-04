import LeaderboardBox from "@components/Leaderboard/LeaderboardBox";

// ! Temporaire pour build
type LeaderboardBoxProps = {
    nomPlayer: string;
    temps: string;
    score: number;
    top: number;
}

interface LeaderboardCellProps {
    title: string;
    listePlayer: LeaderboardBoxProps[];
}

const LeaderboardCell = ({ title, listePlayer }:LeaderboardCellProps) => {
    return (
        <div className="flex flex-wrap justify-center items-center gap-3 px-5 my-5">
            <p className="text-3xl font-bold text-[#000] text-start w-full">{title}</p>
            <div className="w-full flex flex-wrap justify-center items-center bg-[#f1f0f0] rounded-xl gap-3 p-5">
                {listePlayer.map((player, index) => (
                    <LeaderboardBox 
                        key={index}
                        nomPlayer={player.nomPlayer}
                        temps={player.temps}
                        score={player.score}
                        top={player.top}
                    />
                ))}
            </div>
        </div>
    )
}

export default LeaderboardCell;
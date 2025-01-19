interface LeaderboardBoxProps {
    nomPlayer: string;
    temps: string;
    score: number;
    top: number;
}

const AchievementBox = ({ nomPlayer, score, temps, top }: LeaderboardBoxProps) => {
    console.log(temps)
    const handleRetourClick = () => {
        window.location.href = '/profile';
    };
    
    if (top === 1) {
        return (
            <div className="flex gap-20 justify-between items-center w-full px-4 py-4 bg-[#FFD700] bg-opacity-30 rounded-xl border-4 border-[#FFD700] text-[#FFD700]" onClick={handleRetourClick}>
                <p className="text-2xl font-bold">{top}</p>
                <div className="flex w-64 gap-4 items-center">
                    <img src="/user.png" alt="user" className="min-w-5 min-h-5" />
                    <p className="text-2xl font-bold">{nomPlayer}</p>
                </div>
                <p className="text-2xl font-bold">{score}</p>
            </div>
        )
    } else if (top === 2) {
        return (
            <div className="flex gap-20 justify-between items-center w-full px-4 py-4 bg-[#C0C0C0] bg-opacity-30 rounded-xl border-4 border-[#C0C0C0] text-[#C0C0C0]" onClick={handleRetourClick}>
                <p className="text-2xl font-bold">{top}</p>
                <div className="flex w-64 gap-4 items-center">
                    <img src="/user.png" alt="user" className="min-w-5 min-h-5" />
                    <p className="text-2xl font-bold">{nomPlayer}</p>
                </div>
                <p className="text-2xl font-bold">{score}</p>
            </div>
        )
    } else if (top === 3) {
        return (
            <div className="flex gap-20 justify-between items-center w-full px-4 py-4 bg-[#CD7F32] bg-opacity-30 rounded-xl border-4 border-[#CD7F32] text-[#CD7F32]" onClick={handleRetourClick}>
                <p className="text-2xl font-bold">{top}</p>
                <div className="flex w-64 gap-4 items-center">
                    <img src="/user.png" alt="user" className="min-w-5 min-h-5" />
                    <p className="text-2xl font-bold">{nomPlayer}</p>
                </div>
                <p className="text-2xl font-bold">{score}</p>
            </div>
        )
    } else {
        return (
            <div className="flex gap-20 justify-between items-center w-full px-4 py-4 bg-[#791860] bg-opacity-30 rounded-xl border-4 border-[#791860] text-[#791860]" onClick={handleRetourClick}>
                <p className="text-2xl font-bold">{top}</p>
                <div className="flex w-64 gap-4 items-center">
                    <img src="/user.png" alt="user" className="min-w-5 min-h-5" />
                    <p className="text-2xl font-bold">{nomPlayer}</p>
                </div>
                <p className="text-2xl font-bold">{score}</p>
            </div>
        )        
    }
}

export default AchievementBox;
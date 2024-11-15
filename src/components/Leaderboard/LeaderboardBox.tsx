interface LeaderboardBoxProps {
    nomPlayer: string;
    temps: string;
    top: number;
}

const AchievementBox = ({ nomPlayer, temps, top }: LeaderboardBoxProps) => {
    const handleRetourClick = () => {
        window.location.href = '/profil';
    };
    
    return (
        <div className="flex gap-20 justify-between items-center w-full px-4 py-4 bg-[#fff] rounded-xl border-4 border-[#791860] text-[#791860]" onClick={handleRetourClick}>
            <p className="text-2xl font-bold">{top}</p>
            <div className="flex w-64 gap-4 items-center">
                <img src="/user.png" alt="user" className="min-w-5 min-h-5" />
                <p className="text-2xl font-bold">{nomPlayer}</p>
            </div>
            <p className="text-2xl font-bold">{temps}</p>
        </div>
    )
}

export default AchievementBox;
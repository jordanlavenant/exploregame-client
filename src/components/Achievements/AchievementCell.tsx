import AchievementBox from "@/components/Achievements/AchievementBox"

interface AchievementCellProps {
    title: string;
    listeAchievements: AchievementBoxProps[];
}

const AchievementCell = ({ title, listeAchievements }: AchievementCellProps) => {
    return (
        <div className="flex flex-wrap justify-center items-center gap-3">
            <p className="text-4xl font-bold text-[#555454] text-start w-full">{title}</p>
            <div className="w-full flex flex-wrap justify-center items-center bg-[#F0F0F0] rounded-xl gap-3 p-5">
                {listeAchievements.map((achievement, index) => (
                    <AchievementBox 
                        key={index}
                        filiere={achievement.filiere}
                        progression={achievement.progression}
                        remainingSteps={achievement.remainingSteps}
                        scenarioStart={achievement.scenarioStart}
                    />
                ))}
            </div>
        </div>
    )
}

export default AchievementCell;
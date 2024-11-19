import AchievementBox from "@/components/Achievements/AchievementBox"

// ! Temporaire pour build
type AchievementBoxProps = {
    filiere: string;
    progression: number;
    remainingSteps: number;
    scenarioStart: boolean;
}

interface AchievementCellProps {
    title: string;
    listeAchievements: AchievementBoxProps[];
}

const AchievementCell = ({ title, listeAchievements }: AchievementCellProps) => {
    return (
        <div className="flex flex-wrap justify-center items-center gap-3">
            <p className="text-3xl font-bold text-[#000] text-start w-full">{title}</p>
            <div className="w-full flex flex-wrap justify-center items-center bg-[#dad9d9] rounded-xl gap-3 p-5">
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
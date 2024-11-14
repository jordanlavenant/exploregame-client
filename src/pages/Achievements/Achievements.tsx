import AchievementCell from "@/components/Achievements/AchievementCell"

const AchievementPage = () => {
    return (
        <div>
            <link rel="stylesheet" href="./styles/achievements.css"/>
            <section className="w-full mt-10 px-7 flex flex-wrap gap-5">
                <AchievementCell title='Obtenu'
                    listeAchievements={[
                        ({filiere: 'GEA', progression: 100, remainingSteps: 0, scenarioStart: true}),
                        ({filiere: 'QLIO', progression: 100, remainingSteps: 0, scenarioStart: true})
                    ]}
                />
                <AchievementCell title="En cours d'obtention"
                    listeAchievements={[
                        ({filiere: 'INFO', progression: 56, remainingSteps: 3, scenarioStart: true}),
                        ({filiere: 'GMP', progression: 67, remainingSteps: 2, scenarioStart: true})
                    ]}
                />
                <AchievementCell title="A Suivre"
                    listeAchievements={[
                        ({filiere: 'GEA', progression: 0, remainingSteps: 6, scenarioStart: false}),
                        ({filiere: 'QLIO', progression: 0, remainingSteps: 6, scenarioStart: false})
                    ]}
                />
            </section>
        </div>
    )
  }
  
  export default AchievementPage
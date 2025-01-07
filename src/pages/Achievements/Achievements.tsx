import AchievementCell from "@/components/Achievements/AchievementCell"
import Header from "@/components/Header";

const AchievementPage = () => {
    const listeAchievementsOtenus = [
        ({filiere: 'GEA', progression: 100, remainingSteps: 0, scenarioStart: true}),
        ({filiere: 'QLIO', progression: 100, remainingSteps: 0, scenarioStart: true})
    ];

    const listeAchievementsEnCours = [
        ({filiere: 'INFO', progression: 56, remainingSteps: 3, scenarioStart: true}),
        ({filiere: 'GMP', progression: 67, remainingSteps: 2, scenarioStart: true})
    ];

    const listeAchievementsASuivre = [
        ({filiere: 'GEA', progression: 0, remainingSteps: 6, scenarioStart: false}),
        ({filiere: 'QLIO', progression: 0, remainingSteps: 6, scenarioStart: false})
    ];

    return (
        <div>
            <link rel="stylesheet" href="./styles/achievements.css"/>
            <Header />
            <section className="w-full mt-10 px-7 flex flex-wrap gap-5">
                <AchievementCell title='Obtenu'
                    listeAchievements={listeAchievementsOtenus}
                />
                <AchievementCell title="En cours d'obtention"
                    listeAchievements={listeAchievementsEnCours}
                />
                <AchievementCell title="A Suivre"
                    listeAchievements={listeAchievementsASuivre}
                />
            </section>
        </div>
    )
  }
  
  export default AchievementPage
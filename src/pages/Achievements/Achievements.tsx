import AchievementCell from "@/components/Achievements/AchievementCell";
import Header from "@/components/Header";
import { gql, useQuery } from "@apollo/client";

const GET_PLAYER_SCRIPTS = gql`
  query GetPlayerScripts {
    playerScripts {
      id
      completed
      Player {
        id
      }
      Script {
        id
      }
      Step {
        id
      }
      Question {
        id
      }
    }
  }
`;

const GET_SCRIPTS = gql`
  query GetScripts {
    scripts {
      id
      name
      visible
      Department {
        id
        name
      }
      ScriptStep {
        id
        Step {
          id
          Questions {
            id
          }
        }
      }
    }
  }
`;

const AchievementPage = () => {
  // Récupération du joueur connecté
  const storedPlayer = localStorage.getItem("player");
  let currentPlayer = null;
  try {
    currentPlayer = storedPlayer ? JSON.parse(storedPlayer) : null;
  } catch (error) {
    console.error("Failed to parse player data:", error);
  }

  if (!currentPlayer) {
    return <p>Vous n'êtes pas connecté</p>;
  }

  // Récupération des player scripts et des scénarios
  const { data: playerScriptsData, loading: playerScriptsLoading, error: playerScriptsError } = useQuery(GET_PLAYER_SCRIPTS);
  const { data: scriptsData, loading: scriptsLoading, error: scriptsError } = useQuery(GET_SCRIPTS);

  if (playerScriptsLoading || scriptsLoading) return <p>Loading...</p>;
  if (playerScriptsError) return <p>Error : {playerScriptsError.message}</p>;
  if (scriptsError) return <p>Error : {scriptsError.message}</p>;
  if (!playerScriptsData || !scriptsData) return <p>No data</p>;

  const listeAchievementsOtenus: { filiere: any; progression: number; remainingSteps: number; scenarioStart: boolean; scriptId: string; }[] = [];
  const listeAchievementsEnCours: { filiere: any; progression: number; remainingSteps: number; scenarioStart: boolean; scriptId: string; }[] = [];
  const listeAchievementsASuivre: { filiere: any; progression: number; remainingSteps: any; scenarioStart: boolean; scriptId: string; }[] = [];

  const processScript = (script: any) => {
    if (!script.visible) return;

    const playerScript = playerScriptsData.playerScripts.find(
      (ps: any) => ps.Player.id === currentPlayer.id && ps.Script.id === script.id
    );

    if (playerScript) {
      processPlayerScript(script, playerScript);
    } else if (script.id) {
      listeAchievementsASuivre.push({
        filiere: script.Department.name,
        progression: 0,
        remainingSteps: script.ScriptStep ? script.ScriptStep.length : 0,
        scenarioStart: false,
        scriptId: script.id,
      });
    }
  };

  const processPlayerScript = (script: any, playerScript: any) => {
    if (playerScript.completed) {
      listeAchievementsOtenus.push({
        filiere: script.Department.name,
        progression: 100,
        remainingSteps: 0,
        scenarioStart: true,
        scriptId: script.id,
      });
    } else {
      const totalSteps = script.ScriptStep ? script.ScriptStep.length : 0;
      const currentStepIndex = script.ScriptStep ? script.ScriptStep.findIndex(
        (step: any) => step.Step.id === playerScript.Step.id
      ) : 0;

      const completedStepsProgression = Math.floor((currentStepIndex / totalSteps) * 100);

      const currentStep = script.ScriptStep[currentStepIndex];
      const totalQuestions = currentStep.Step.Questions.length;
      const currentQuestionIndex = currentStep.Step.Questions.findIndex(
        (question: any) => question.id === playerScript.Question.id
      );

      const currentStepProgression = totalQuestions > 0 ? Math.floor(((currentQuestionIndex + 1) / totalQuestions) * (100 / totalSteps)) : 0;
      const progression = completedStepsProgression + currentStepProgression;

      listeAchievementsEnCours.push({
        filiere: script.Department.name,
        progression: progression,
        remainingSteps: totalSteps - currentStepIndex,
        scenarioStart: true,
        scriptId: script.id,
      });
    }
  };

  scriptsData.scripts.forEach(processScript);

  return (
    <div>
      <link rel="stylesheet" href="./styles/achievements.css" />
      <Header />
      <section className="w-full mt-10 px-7 flex flex-wrap gap-5">
        <AchievementCell title="Obtenu" listeAchievements={listeAchievementsOtenus} />
        <AchievementCell title="En cours d'obtention" listeAchievements={listeAchievementsEnCours} />
        <AchievementCell title="A Suivre" listeAchievements={listeAchievementsASuivre} />
      </section>
    </div>
  );
};

export default AchievementPage;
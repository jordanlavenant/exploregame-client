import EvolutionBox from "@/components/Evolutions/EvolutionBox";
import SecretWord from "@/components/Evolutions/SecretWord";
import EvolutionTop from "@/components/Evolutions/EvolutionTop";
import { gql, useQuery } from "@apollo/client";
import { Script } from "@exploregame/types";
import { useParams } from "react-router-dom";
import { Key } from "react";

const GET_PLAYER_SCRIPT = gql`
  query GetPlayerScript {
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

const GET_SRIPTS_WITH_STEPS = gql`
query GetScriptsWithSteps {
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
      lettre
      Step {
        id
        name
        Location {
          id
          name
          description
        }
        Questions {
          id
        }
      }
    }
  }
}
`;

const EvolutionScenario = () => {
  // Récupération de l'id du scénario
  const { sceID } = useParams();

  // Récupération du joueur connecté
  const storedPlayer = localStorage.getItem("player");
  let currentPlayer = null;
  try {
    currentPlayer = storedPlayer ? JSON.parse(storedPlayer) : null;
  } catch (error) {
    console.error("Failed to parse player data:", error);
  }

  // Récupération des données du joueur
  const {
    data: playerSriptsData,
    loading: playerScriptsLoading,
    error: playerScriptsError,
  } = useQuery(GET_PLAYER_SCRIPT);

  if (!currentPlayer) {
    return <p>Vous n'êtes pas connecté</p>;
  }

  // Récupération des scénarios avec leurs étapes
  const {
    data: scriptsDataWithSteps,
    loading: scriptsDataWithStepsLoading,
    error: scriptsDataWithStepsError,
  } = useQuery(GET_SRIPTS_WITH_STEPS);

  if (playerScriptsLoading || scriptsDataWithStepsLoading) return <p>Loading...</p>;
  if (playerScriptsError) return <p>Error : {playerScriptsError.message}</p>;
  if (!playerSriptsData || !scriptsDataWithSteps) return <p>No data</p>;
  if (scriptsDataWithStepsError) return <p>Error : {scriptsDataWithStepsError.message}</p>;

  const currentPlayerScript = playerSriptsData.playerScripts.find(
    (script: any) =>
      script.Player?.id === currentPlayer.id && script.Script?.id === sceID
  );

  if (!currentPlayerScript) {
    window.location.href = "/achievements";
  }

  //Récupération du scénario avec ses étapes
  const currentScriptWithSteps = scriptsDataWithSteps.scripts.find(
    (script: any) => script.id === sceID
  );

  console.log(currentScriptWithSteps);

  // Récupération du nombres d'étapes total du scénario
  const totalSteps = currentScriptWithSteps.ScriptStep.length;

  // Récupération de l'id de l'étape en cours du joueur
  const currentStepId = currentPlayerScript.Step.id;

  // Récupération de l'id de la question en cours du joueur
  const currentQuestionId = currentPlayerScript.Question.id;

  let listeEvolutions = [];
  if (currentPlayerScript.completed) {
    listeEvolutions = currentScriptWithSteps.ScriptStep.map((scriptStep: any) => ({
      nomEtape: scriptStep.Step.Location.name,
      progression: 100,
      lettre: scriptStep.lettre,
      urlRedirection: `/departments/${currentScriptWithSteps.Department.id}/scenarios/${sceID}/steps/${currentStepId}/questions/${currentQuestionId}`,
    }));
  }else{
  listeEvolutions = [];
  for (let i = 1; i <= totalSteps; i++) {
    const stepIdStr = i.toString();
    let step;
    if (i.toString() === currentStepId) {
      step = currentScriptWithSteps.ScriptStep.find(
        (scriptStep: any) => scriptStep.Step.id === currentStepId
      );      
      const totalQuestions = step.Step.Questions.length;
      let questionDone = 0;
      for (let j = 1 ; j < currentQuestionId; j++){ // Modifier la condition pour exclure la question en cours
        const questionIdStr = j.toString();

        if (step.Step.Questions.find((question: any) => question.id === questionIdStr)){
          questionDone++;
        }
      }
      const progression = (questionDone / totalQuestions) * 100;
      if (step) {
        listeEvolutions.push({
          nomEtape: step.Step.Location.name,
          progression: progression,
          lettre: step.lettre,
          urlRedirection: `/departments/${currentScriptWithSteps.Department.id}/scenarios/${sceID}/steps/${currentStepId}/questions/${currentQuestionId}`,
        });
      }
    } else if (i < parseInt(currentStepId)) {
      step = currentScriptWithSteps.ScriptStep.find(
        (scriptStep: any) => scriptStep.Step.id === stepIdStr
      );
      if (step) {
        listeEvolutions.push({
          nomEtape: step.Step.Location.name,
          progression: 100,
          lettre: step.lettre,
          urlRedirection: `/departments/${currentScriptWithSteps.Department.id}/scenarios/${sceID}/steps/${currentStepId}/questions/${currentQuestionId}`,
        });
      }
    } else {
      step = currentScriptWithSteps.ScriptStep.find(
        (scriptStep: any) => scriptStep.Step.id === stepIdStr
      );
      if (step) {
        listeEvolutions.push({
          nomEtape: step.Step.Location.name,
          progression: 0,
          lettre: step.lettre,
          urlRedirection: `/departments/${currentScriptWithSteps.Department.id}/scenarios/${sceID}/steps/${currentStepId}/questions/${currentQuestionId}`,
        });
      }
    }
  }
}

  const secretWord = listeEvolutions.map((evolution: { lettre: any; }) => evolution.lettre).join("");
  const nomFiliere = "Informatique";

  return (
    <div>
      <EvolutionTop nomFiliere={nomFiliere} />
      <section className="mt-10 px-4 flex flex-wrap gap-4">
        {listeEvolutions.map((evolution: { nomEtape: string; progression: number; lettre: string; urlRedirection: string; }, index: Key | null | undefined) => (
          <EvolutionBox
            key={index}
            nomEtape={evolution.nomEtape}
            progression={evolution.progression}
            lettre={evolution.lettre}
            urlRedirection={evolution.urlRedirection}
          />
        ))}
      </section>
      <SecretWord
        secretWord={secretWord}
        nbEtapesFini={listeEvolutions.filter((evolution: { progression: number; }) => evolution.progression === 100).length}
      />
    </div>
  );
};

export default EvolutionScenario;

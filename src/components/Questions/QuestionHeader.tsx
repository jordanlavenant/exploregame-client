import { useNavigate, useParams } from "react-router-dom"
import { Progress } from "@components/ui/progress"
import { Lock, Clock,  } from "lucide-react"
import { gql, useMutation } from "@apollo/client"
import { clearLocalScenario, getLocalScenario } from "@/utils/localScenario"
import { useColorsDepartments } from "@/context/ColorsDepartmentContext"
import { useScriptProgress } from "@/context/ScriptProgressContext"
import { getChrono, getLocalChrono, stopChrono, refreshChrono } from "@/utils/chrono"
import { useEffect, useState } from "react"
import { getScore, getLocalScore, refreshScore } from "@/utils/score"

export const UPDATE_PLAYER_SCRIPT = gql`
  mutation updatePlayerScript($id: String!, $input: UpdatePlayerScriptInput!) {
    updatePlayerScript(id: $id, input: $input) {
      id
    }
  }
`

const QuestionHeader = () => {
  const navigate = useNavigate()
  const { depId } = useParams() 
  const { getColors } = useColorsDepartments()
  const { currentQuestion, totalQuestions } = useScriptProgress()
  const { primary } = getColors()
  // TODO: get the progress from the context
  const progress = totalQuestions === 0 ? 0 : (currentQuestion / totalQuestions) * 100

  const [updatePlayerScript] = useMutation(UPDATE_PLAYER_SCRIPT)

  const [chronoValue, setChronoValue] = useState(getLocalChrono() ?? getChrono());
  const [score, setScore] = useState( getLocalScore() ?? getScore());

  useEffect(() => {
    //Gestion du chrono
    refreshChrono()
    refreshScore()
    const interval = setInterval(() => {
      setChronoValue(getChrono());
      setScore(getScore());
    }, 1000);

    return () => clearInterval(interval); // Nettoie l'intervalle au démontage
  }, []);

  const saveStep = () => {
    const { id, playerId, scriptId, stepId, questionId} = getLocalScenario()
    console.log('saveStep', id, playerId, scriptId, stepId, questionId, getScore(), getChrono())
    updatePlayerScript({
      variables: {
        id: id,
        input: {
          playerId: playerId,
          scriptId: scriptId,
          stepId: stepId,
          questionId: questionId,
          score: getScore(),
          remainingTime: getChrono(),
        },
      },
    }).catch((error) => {
      console.error('Erreur lors de l`enregistrement des données', error);
    });
  }

  const exit = () => {
    saveStep()
    clearLocalScenario()
    stopChrono()
    navigate(`/departments/${depId}`)
  }
  
  return (
    <header className="mt-5">
      <section className="flex justify-between items-center gap-2 px-6 py-2">
        <button onClick={exit} className="z-10">
          <img src="/exit.svg" alt="timer" className="w-6" />
        </button>
        <h3 className="text-black text-xl font-bold text-center w-full">BATIMENTS ADMINISTRATIF</h3>
      </section>
      <section className="flex justify-center items-center gap-2 px-6 py-2">
        <Progress 
          className='w-full'
          value={progress}
          color={primary}
        />
        <Lock 
          size={36}
          className='translate-x-[-0.7em] translate-y-[-0.4em]'
          style={{ color: primary }}
        />
      </section>
      <div className="flex justify-center items-center w-full space-x-4">
        <div className="flex items-center space-x-2">
            <Clock 
            size={24}
            className='text-black'
            />
          <div className="text-lg font-semibold">
        {Math.floor(chronoValue / 60)}:{chronoValue % 60 < 10 ? '0' : ''}
        {chronoValue % 60}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-lg font-semibold">
        Score: {score}
          </div>
        </div>
      </div>
    </header>
  )
}

export default QuestionHeader
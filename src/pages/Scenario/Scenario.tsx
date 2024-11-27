import ScenarioCell from "@/components/Scenarios/ScenarioCell/ScenarioCell"
import ScenarioHeader from "@/components/Scenarios/ScenarioHeader/ScenarioHeader"
import getCurrentPlayer from "@/utils/currentPlayer"
import getLocalScenario from "@/utils/localScenario"
import { gql, useMutation, useQuery } from "@apollo/client"
import { PlayerScript, ScriptStep } from "@exploregame/types"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate, useParams } from "react-router-dom"

export const SCENARIO = gql`
  query FindScenarioById($id: String!) {
    script(id: $id) {
      id
      name
      ScriptStep {
        stepId
        Step {
          Questions {
            id
          }
        }
      }
      PlayerScript {
        id
        playerId
        stepId
        questionId
      }
    }
  }
`

export const CREATE_PLAYER_SCRIPT = gql`
  mutation createPlayerScript($input: CreatePlayerScriptInput!) {
    createPlayerScript(input: $input) {
      id
    }
  }
`

export const UPDATE_PLAYER_SCRIPT = gql`
  mutation updatePlayerScript($id: String!, $input: UpdatePlayerScriptInput!) {
    updatePlayerScript(id: $id, input: $input) {
      id
    }
  }
`

const ScenarioPage = () => {
  const navigate = useNavigate()
  const { depId, sceId } = useParams()
  const { data, loading, error, refetch } = useQuery(SCENARIO, {
    variables: { id: sceId }
  })
  const [createPlayerScript] = useMutation(CREATE_PLAYER_SCRIPT)
  const [updatePlayerScript] = useMutation(UPDATE_PLAYER_SCRIPT)

  const currentPlayer = getCurrentPlayer()
  // ! navigate to login page (TEMPORAIRE)
  if (!currentPlayer) navigate("/login")

  function alreadyPlayed() {
    return data?.script.PlayerScript?.some((playerScript: PlayerScript) => playerScript.playerId === currentPlayer?.id)    
  }

  // ! Create player script if it doesn't exist
  useEffect(() => {
    if (data?.script?.PlayerScript && !alreadyPlayed() && currentPlayer) {
      createPlayerScript({
        variables: {
          input: {
            playerId: currentPlayer.id,
            scriptId: sceId,
            stepId: data.script.ScriptStep[0].stepId,
            questionId: data.script.ScriptStep[0].Step.Questions[0].id,
            score: 0,
            remainingTime: 3600
          }
        }
      })
      toast.success('Nouveau scénario')
      refetch()
    }
  }, [data, sceId])

  const [currentStep, setCurrentStep] = useState<string | null>(null)

  useEffect(() => {
    const localScenario = getLocalScenario()
    if (localScenario && localScenario.stepId) {
      setCurrentStep(localScenario.stepId)
    }
  }, [])

  useEffect(() => {
    const handleStorageChange = () => {
      const localScenario = getLocalScenario()
      setCurrentStep(localScenario.stepId)
    }

    window.addEventListener('storage', handleStorageChange)
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  if (loading) {
    return <header className="header">Loading...</header>
  }
  if (error) {
    return <header className="header">Error</header>
  }

  const scenario = data.script
  const scriptSteps = scenario.ScriptStep
  const currentStepData = scenario.PlayerScript?.find((playerScript: PlayerScript) => playerScript.playerId === currentPlayer?.id) ?? scenario.ScriptStep[0]
  const playerScript = {
    id: currentStepData.id,
    scriptId: scenario.id,
    playerId: currentPlayer?.id,
    stepId: currentStepData.stepId,
    questionId: currentStepData.questionId,
  }
  localStorage.setItem('scenario', JSON.stringify(playerScript))

  // ! increment local de l'étape
  const incrementStep = () => {
    const localScenario = getLocalScenario()
    const currentStepIndex = scriptSteps.findIndex((step: ScriptStep) => step.stepId === localScenario.stepId)
    if (currentStepIndex < scriptSteps.length - 1) {
      localScenario.stepId = scriptSteps[currentStepIndex + 1].stepId
      localScenario.questionId = scriptSteps[currentStepIndex + 1].Step.Questions[0].id
      localStorage.setItem('scenario', JSON.stringify(localScenario))
      setCurrentStep(localScenario.stepId)
    }
  }

  // ! sauvegarde de l'étape en base de données
  const saveStep = async () => {
    const { id, scriptId, playerId, stepId, questionId } = getLocalScenario()
    await updatePlayerScript({
      variables: {
        id,
        input: {
          playerId,
          scriptId,
          stepId,
          questionId,
          score: 0,
          remainingTime: 3600
        }
      }
    }).then(() => {
      toast.success('Etape sauvegardée')  
      localStorage.removeItem('scenario')
      refetch()
      navigate(`/departments/${depId}`)
    })
  }

  return (
    <main>
      <ScenarioHeader 
        scenario={scenario}
        saveStep={saveStep}
      />
      <ScenarioCell 
        currentStep={currentStep!}
        incrementStep={incrementStep}
      />
    </main>
  )

}

export default ScenarioPage
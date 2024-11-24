import ScenarioCell from "@/components/Scenarios/ScenarioCell/ScenarioCell"
import ScenarioHeader from "@/components/Scenarios/ScenarioHeader/ScenarioHeader"
import getCurrentPlayer from "@/utils/currentPlayer"
import { gql, useMutation, useQuery } from "@apollo/client"
import { PlayerScript, ScriptStep } from "@exploregame/types"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const SCENARIO = gql`
  query FindScenarioById($id: String!) {
    script(id: $id) {
      id
      name
      ScriptStep {
        stepId
      }
      PlayerScript {
        id
        playerId
        stepId
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

  function getLocalScenario() {
    return JSON.parse(localStorage.getItem('scenario') as string)
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
            score: 0,
            remainingTime: 3600
          }
        }
      })
      refetch()
    }
  }, [data, sceId])

  if (loading) {
    return <header className="header">Loading...</header>
  }
  if (error) {
    return <header className="header">Error</header>
  }

  const scenario = data.script
  const scriptSteps = scenario.ScriptStep
  const currentStep = scenario.PlayerScript?.find((playerScript: PlayerScript) => playerScript.playerId === currentPlayer?.id) ?? scenario.ScriptStep[0]
  const playerScript = {
    id: currentStep.id,
    scriptId: scenario.id,
    playerId: currentPlayer?.id,
    stepId: currentStep.stepId,
  }
  localStorage.setItem('scenario', JSON.stringify(playerScript))

  // ! increment local de l'étape
  const incrementStep = () => {
    const playerScript = getLocalScenario()
    const currentStepIndex = scriptSteps.findIndex((step: ScriptStep) => step.stepId === playerScript.stepId)
    if (currentStepIndex < scriptSteps.length - 1) {
      playerScript.stepId = scriptSteps[currentStepIndex + 1].stepId
      localStorage.setItem('scenario', JSON.stringify(playerScript))
    }
  }

  // ! sauvegarde de l'étape en base de données
  const saveStep = async () => {
    const playerScript = getLocalScenario()
    const { id, scriptId, playerId, stepId } = playerScript
    await updatePlayerScript({
      variables: {
        id,
        input: {
          playerId,
          scriptId,
          stepId,
          score: 0,
          remainingTime: 3600
        }
      }
    })
    localStorage.removeItem('scenario')
    await refetch()
    navigate(`/departments/${depId}`)
  }

  return (
    <main>
      <ScenarioHeader 
        scenario={scenario}
        saveStep={saveStep}
      />
      <ScenarioCell 
        currentStep={currentStep.stepId}
        incrementStep={incrementStep}
      />
    </main>
  )

}

export default ScenarioPage
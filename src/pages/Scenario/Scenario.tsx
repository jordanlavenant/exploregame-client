import { useEffect, useState } from "react"
import getCurrentPlayer from "@/utils/currentPlayer"
import { setLocalScenario } from "@/utils/localScenario"
import { gql, useMutation, useQuery } from "@apollo/client"
import { PlayerScript } from "@exploregame/types"
import toast from "react-hot-toast"
import { useNavigate, useParams } from "react-router-dom"
import { useColorsDepartments } from "@/context/ColorsDepartmentContext"

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

const ScenarioPage = () => {
  const navigate = useNavigate()
  const currentPlayer = getCurrentPlayer()
  const { depId, sceId } = useParams()
  const { colors } = useColorsDepartments()
  console.log(colors)
  const [createPlayerScript] = useMutation(CREATE_PLAYER_SCRIPT)
  const { data, loading, error, refetch } = useQuery(SCENARIO, {
    variables: { id: sceId }
  })

  useEffect(() => {
    if (!currentPlayer) {
      toast.error("You must be logged in to play a scenario.")
      navigate("/login")
      return
    }

    if (loading || error) return

    const alreadyPlayed = () => {
      return data.script.PlayerScript.some(
        (playerScript: PlayerScript) => 
          playerScript.playerId === currentPlayer!.id)
    }

    const redirect = (
      stepId: string,
      questionId: string
    ) => {
      navigate(`/departments/${depId}/scenarios/${sceId}/steps/${stepId}/questions/${questionId}`)
    }

    const init = () => {
      // ! Data
      const initScenarioData = {
        playerId: currentPlayer!.id,
        scriptId: sceId,
        stepId: data.script.ScriptStep[0].stepId,
        questionId: data.script.ScriptStep[0].Step.Questions[0].id
      }

      // ! Mutation
      createPlayerScript({
        variables: {
          input: {
            ...initScenarioData,
            score: 0,
            remainingTime: 3600
          }
        }
      }).then(response => {
        // ! Redirection
        let idPlayerScript = response.data.createPlayerScript.id
        setLocalScenario(idPlayerScript, currentPlayer!.id, sceId!, initScenarioData.stepId, initScenarioData.questionId)
        redirect(initScenarioData.stepId, initScenarioData.questionId)
      })
    }

    const resume = () => {
      // ! Data
      let playerScript = data.script.PlayerScript.find((playerScript: PlayerScript) => playerScript.playerId === currentPlayer!.id)
      const { id, stepId, questionId } = playerScript

      // ! Redirection
      setLocalScenario(id, currentPlayer!.id, sceId!, stepId, questionId)
      redirect(stepId, questionId)
    }

    refetch().then(() => {
      if (!alreadyPlayed()) {
        init() 
      } else {
        resume()
      }
    })
  }, [
    currentPlayer,
    data,
    loading,
    error,
    refetch,
    createPlayerScript
  ])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <p>Redirection en cours...</p>
  )
}

export default ScenarioPage
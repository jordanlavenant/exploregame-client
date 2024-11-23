import ScenarioCell from "@/components/Scenarios/ScenarioCell/ScenarioCell"
import ScenarioHeader from "@/components/Scenarios/ScenarioHeader/ScenarioHeader"
import { gql, useMutation, useQuery } from "@apollo/client"
import { PlayerScript } from "@exploregame/types"
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

const ScenarioPage = () => {
  const navigate = useNavigate()
  const { sceId } = useParams()
  const { data, loading, error } = useQuery(SCENARIO, {
    variables: { id: sceId }
  })
  const [createPlayerScript] = useMutation(CREATE_PLAYER_SCRIPT)

  const currentPlayer = localStorage.getItem('playerId')

  function alreadyPlayed() {
    return data?.script.PlayerScript?.some((playerScript: PlayerScript) => playerScript.playerId === currentPlayer)    
  }

  useEffect(() => {
    if (data?.script?.PlayerScript && !alreadyPlayed() && currentPlayer) {
      createPlayerScript({
        variables: {
          input: {
            playerId: currentPlayer,
            scriptId: sceId,
            stepId: data.script.ScriptStep[0].stepId,
            score: 0,
            remainingTime: 3600
          }
        }
      })
    } else {
      console.log('player script already exists')
    }
  }, [data, sceId])


  if (loading) {
    return <header className="header">Loading...</header>
  }
  if (error) {
    return <header className="header">Error</header>
  }
  if (!currentPlayer) {
    // ! navigate to login page (TEMPORAIRE)
    navigate("/login")

  }

  const scenario = data.script

  return (
    <main>
      <ScenarioHeader scenario={scenario} />
      <ScenarioCell scenario={scenario} />
    </main>
  )

}

export default ScenarioPage
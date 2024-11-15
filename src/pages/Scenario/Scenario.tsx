import ScenarioCell from "@/components/Scenarios/ScenarioCell/ScenarioCell"
import ScenarioHeader from "@/components/Scenarios/ScenarioHeader/ScenarioHeader"
import { gql, useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"

export const QUERY = gql`
  query FindScenarioById($id: String!) {
    script(id: $id) {
      id
      name
      ScriptStep {
        id
        lettre
      }
    }
  }
`

const ScenarioPage = () => {
  const { sceId } = useParams()
  const { data, loading, error } = useQuery(QUERY, {
    variables: { id: sceId }
  })

  if (loading) {
    return <header className="header">Loading...</header>
  }
  if (error) {
    return <header className="header">Error</header>
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
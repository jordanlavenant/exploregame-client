import { gql, useQuery } from '@apollo/client'
import './App.css'
// import { Filiere } from 'api/types/graphql'

interface Filiere {
  idF: string
  nomF: string
  descriptionF: string
}

export const QUERY = gql`
  query FindFilieres {
    filieres {
      idF
      nomF
      descriptionF
    }
  }
`
function App() {

  const { loading, error, data } = useQuery(QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return (
    <div>
      {data.filieres.map((filiere: Filiere) => (
        <div key={filiere.idF}>
          <h2>{filiere.nomF}</h2>
          <p>{filiere.descriptionF}</p>
        </div>
      ))}
    </div>
  )
}

export default App

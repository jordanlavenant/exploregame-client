import { gql, useQuery } from '@apollo/client'
import './App.css'
// import { Filiere } from 'api/types/graphql'

interface Course {
  id: string
  name: string
  description: string
}

export const QUERY = gql`
  query FindCourses {
    courses {
      id
      name
      description
    }
  }
`
function App() {

  const { loading, error, data } = useQuery(QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return (
    <div>
      {data.courses.map((course: Course) => (
        <div key={course.id}>
          <h2>{course.name}</h2>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  )
}

export default App

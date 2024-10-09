import { gql, useQuery } from "@apollo/client"
import Header from "../../components/Header/Header"
import Department from "../../components/Department/Department"
import { useDepartmentIndex } from "../../context/DepartmentContext"
import { useEffect } from "react"

const DEPARTMENTS = gql`
    query FindDepartments {
        departments {
            id
            name
        }
    }
`

const Departments = () => {
    const { currDepartmentIndex, setCurrDepartmentIndex } = useDepartmentIndex()

    const { loading, error, data } = useQuery(DEPARTMENTS)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    useEffect(() => {
        let logged = false

        if (logged) {
            setCurrDepartmentIndex(0)
        } else {
            setCurrDepartmentIndex(Math.floor(Math.random() * data.departments.length))
        }
    }, [data.departments.length, setCurrDepartmentIndex])

    console.log(currDepartmentIndex)

    return (
        <>
            <Header departments={data.departments} />
            {/* <Department department={
                data.departments[currDepartmentIndex].id
            } /> */}
        </>
    )
}

export default Departments
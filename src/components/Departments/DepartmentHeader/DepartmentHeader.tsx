import { Department } from "api/types/graphql"

const DepartmentHeader = ({
  currentDepartment,
  nextDepartment,
  previousDepartment,
  handleNextClick,
  handlePrevClick,
}: {
  currentDepartment: Department,
  nextDepartment: Department,
  previousDepartment: Department,
  handleNextClick: () => void,
  handlePrevClick: () => void,
}) => {

  return (
    <header className="header grid grid-cols-3 items-center p-4 bg-red-300">
      <button onClick={handlePrevClick} className="bg-blue-500 text-white px-4 py-2 rounded">
        {previousDepartment.name}
      </button>
      <div className="text-center">
        <h1 className="text-2xl font-bold">{currentDepartment.name}</h1>
      </div>
      <button onClick={handleNextClick} className="bg-blue-500 text-white px-4 py-2 rounded">
        {nextDepartment.name}
      </button>
    </header>
  )
}

export default DepartmentHeader
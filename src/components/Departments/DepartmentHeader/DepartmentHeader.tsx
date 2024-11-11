import { useCurrentDepartment } from "@/context/CurrentDepartmentContext";
import { useDepartments } from "@/context/DepartmentDataContext";

const DepartmentHeader = () => {
  const { departments, loading: departmentsLoading, error: departmentsError } = useDepartments();
  const { currentDepartmentIndex, setCurrentDepartmentIndex, loading: currentDepartmentLoading, error: currentDepartmentError } = useCurrentDepartment();

  if (departmentsLoading || currentDepartmentLoading) {
    return <header className="header">Loading...</header>;
  }

  if (departmentsError || currentDepartmentError) {
    return <header className="header">Error</header>;
  }

  const currentDepartment = departments![currentDepartmentIndex!];
  const previousDepartment = departments![(currentDepartmentIndex! - 1 + departments!.length) % departments!.length];
  const nextDepartment = departments![(currentDepartmentIndex! + 1) % departments!.length];

  const handlePrevClick = () => {
    setCurrentDepartmentIndex(
      (prevIndex: number) => (prevIndex - 1 + departments.length) % departments.length
    )
  }

  const handleNextClick = () => {
    setCurrentDepartmentIndex(
      (prevIndex: number) => (prevIndex + 1) % departments.length)
  }

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
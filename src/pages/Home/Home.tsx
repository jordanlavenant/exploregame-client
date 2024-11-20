import HomeCell from "@/components/Home/HomeCell"
import BoutonExplorer from "@/components/Home/BoutonExplorer";
import Header from "@/components/Header";

const HomePage = () => {
  const navigate = useNavigate()
  const {
    departments,
    loading: departmentsLoading,
    error: departmentsError
  } = useDepartments()
  const { 
    setCurrentDepartmentIndex,
    loading: currentDepartmentLoading,
    error: currentDepartmentError
  } = useCurrentDepartment()

  if (departmentsLoading || currentDepartmentLoading) {
    return <header className="header">Loading...</header>
  }
  if (departmentsError || currentDepartmentError) {
    return <header className="header">Error</header>
  }

  const handleRedirect = (index: number) => {
    setCurrentDepartmentIndex(index)
    navigate(`/departments`)
  }

  return (
    <main>
      <Header />
      <HomeCell title="Bienvenue" />
      <HomeCell title="Carte" />
      <HomeCell title="Acutalités" />
      <HomeCell title="Les filières" />
      <BoutonExplorer />
    </main>
  )
}

export default HomePage;
import HomeCell from "@/components/Home/HomeCell"
import BoutonExplorer from "@/components/Home/BoutonExplorer";
import Header from "@/components/Header";

const HomePage = () => {
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
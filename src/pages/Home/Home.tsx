import HomeCell from "@/components/Home/HomeCell"
import BoutonExplorer from "@/components/Home/BoutonExplorer";
import Header from "@/components/Header";
import CarteBox from "@/components/Home/CarteBox";
import ActualiteBox from "@/components/Home/ActualiteBox";

const HomePage = () => {
  
  return (
    <main>
      <Header />
      <HomeCell title="Bienvenue" />
      {/* <HomeCell title="Carte" /> */}
      <CarteBox />
      {/* <HomeCell title="Actualités" /> */}
      <ActualiteBox />
      <HomeCell title="Les filières" />
      <BoutonExplorer positionBas={true} urlRedirection="/departments" />
    </main>
  )
}

export default HomePage;
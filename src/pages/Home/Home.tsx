import WelcomeCell from "@/components/Home/WelcomeCell";
import BoutonExplorer from "@/components/Home/BoutonExplorer";
import Header from "@/components/Header";
import CarteBox from "@/components/Home/CarteBox";
import ActualiteBox from "@/components/Home/ActualiteBox";
import FilieresBox from "@/components/Home/FilieresBox";

const HomePage = () => {
  
  return (
    <main>
      <Header />
      <WelcomeCell />
      <CarteBox />
      <ActualiteBox />
      <FilieresBox />
      <BoutonExplorer positionBas={true} urlRedirection="/departments" />
    </main>
  )
}

export default HomePage;
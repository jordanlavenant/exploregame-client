import BoutonCell from "@/components/Profil/BoutonCell"
import BoutonIcon from "@/components/Profil/BoutonIcon"
import BoutonLogout from "@/components/Profil/BoutonLogout"
import AchievementCarousel from "@/components/Achievements/AchievementCarousel"
import Header from "@/components/Header"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface ProfilPageProps {
    username: string;
}

const ProfilPage = ({username="@username"}:ProfilPageProps) => {
    const navigate = useNavigate()
    
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
          navigate("/login")
        }
    }, [navigate])

    const listeAchievements = [
        ({nom: 'Accomplissement 1', filiere: 'GEA', urlImage: '/succes.png'}),
        ({nom: 'Accomplissement 2', filiere: 'INFO', urlImage: '/succes.png'}),
        ({nom: 'Accomplissement 3', filiere: 'GMP', urlImage: '/succes.png'}),
        ({nom: 'Accomplissement 4', filiere: 'GEA', urlImage: '/succes-vide.png'}),
        ({nom: 'Accomplissement 5', filiere: 'INFO', urlImage: '/succes-vide.png'}),
        ({nom: 'Accomplissement 6', filiere: 'GMP', urlImage: '/succes-vide.png'}),
    ];

    return (
        <div>
            <Header />
            <div className="w-full flex justify-center items-center mt-10 gap-10">
                <img src="/user.png" alt="profil" className="w-12" />
                <h1 className="text-center text-5xl  text-[#000] font-bold">{username}</h1>
            </div>
            <AchievementCarousel listeAchievements={listeAchievements} />
            <section className="w-full mt-10 px-7 grid grid-cols-2 gap-3">
                <BoutonIcon urlRedirection="/share" urlImage="/share.png" nomTitre="Partager mon profil" />
                <BoutonIcon urlRedirection="/like" urlImage="/Like.png" nomTitre="Aimer par" nbLike={16} />
            </section>
            <BoutonCell urlRedirection="/profile/informations" nomBouton="Informatique" title="Ma filière" />
            <BoutonCell urlRedirection="/profile/informations" nomBouton="Modifier informations" title="Mes informations" />
            <BoutonLogout urlRedirection="/login" nomBouton="Se déconnecter" />
        </div>
    )
  }
  
  export default ProfilPage
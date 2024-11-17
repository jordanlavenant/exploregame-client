import BoutonCell from "@/components/Profil/BoutonCell"
import BoutonIcon from "@/components/Profil/BoutonIcon"
import AchievementCarousel from "@/components/Achievements/AchievementCarousel"

interface ProfilPageProps {
    username: string;
}

const ProfilPage = ({username="@username"}:ProfilPageProps) => {
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
            <h1 className="w-full text-center text-5xl mt-10 text-[#000] font-bold">{username}</h1>
            <AchievementCarousel listeAchievements={listeAchievements} />
            <section className="w-full mt-10 px-7 grid grid-cols-2 gap-3">
                <BoutonIcon urlRedirection="/share" urlImage="/share.png" nomTitre="Partager mon profil" />
                <BoutonIcon urlRedirection="/like" urlImage="/Like.png" nomTitre="Aimer par" nbLike={16} />
            </section>
            <BoutonCell urlRedirection="/profile/informations" nomBouton="Informatique" title="Ma filière" />
            <BoutonCell urlRedirection="/profile/informations" nomBouton="Modifier informations" title="Mes informations" />
        </div>
    )
  }
  
  export default ProfilPage
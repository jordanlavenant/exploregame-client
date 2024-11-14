import BoutonCell from "@/components/Profil/BoutonCell"

const ProfilCheckPage = () => {
    return (
        <div>
            <h1 className="w-full text-center text-5xl mt-10 text-[#791860] font-bold">Mes informations</h1>
            <BoutonCell urlRedirection="/profil/update" nomBouton="Informatique" title="Ma filière" />
            <BoutonCell urlRedirection="/profil/update" nomBouton="@Username" title="Username" />
            <BoutonCell urlRedirection="/profil/update" nomBouton="user@gmail.com" title="Mail" />
            <BoutonCell urlRedirection="/profil/update" nomBouton="********" title="Mot de passe" />
        </div>
    )
  }
  
  export default ProfilCheckPage
import BoutonCell from "@/components/Profil/BoutonCell"

const ProfilCheckPage = () => {
    return (
        <div>
            <h1 className="w-full text-center text-5xl mt-10 text-[#000] font-bold">Mes informations</h1>
            <BoutonCell urlRedirection="/profil/update?type=filiere" nomBouton="Informatique" title="Ma filière" />
            <BoutonCell urlRedirection="/profil/update?type=username" nomBouton="@Username" title="Username" />
            <BoutonCell urlRedirection="/profil/update?type=mail" nomBouton="user@gmail.com" title="Mail" />
            <BoutonCell urlRedirection="/profil/update?type=password" nomBouton="********" title="Mot de passe" />
        </div>
    )
  }
  
  export default ProfilCheckPage
import BoutonCell from "@/components/Profil/BoutonCell"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProfilCheckPage = () => {
    const navigate = useNavigate();
        
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
          navigate("/login")
        }
    }, [navigate])

    const handleClick = () => {
      navigate("/profile");
    };

    return (
        <div>
            <div className="w-full flex justify-center items-center mt-10 gap-10">
                <button onClick={handleClick}>
                    <img src="/arrow-left.svg" alt="back" className="w-9" />
                </button>
                <h1 className="text-center text-5xl text-[#000] font-bold">Mes informations</h1>
            </div>
            <BoutonCell urlRedirection="/profile/update?type=filiere" nomBouton="Informatique" title="Ma filière" />
            <BoutonCell urlRedirection="/profile/update?type=username" nomBouton="@Username" title="Username" />
            <BoutonCell urlRedirection="/profile/update?type=password" nomBouton="********" title="Mot de passe" />
        </div>
    )
  }
  
  export default ProfilCheckPage
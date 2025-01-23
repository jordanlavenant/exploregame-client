import { useEffect, useState } from 'react';
import InputUpdate from '@/components/Profil/InputUpdate';
import BoutonActivate from '@/components/Profil/BoutonActivate';
import { useNavigate } from "react-router-dom";

const ProfilModifPage = () => {
    const navigate = useNavigate();
        
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
          navigate("/login")
        }
    }, [navigate])

    const [type, setType] = useState<string>("");
    const [activation, setActivation] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");

    console.log(inputValue)

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const typeParam = params.get('type');
        if (typeParam) {
            setType(typeParam);
        }
    }, []);

    const title = type === "username" ? "username" : type === "password" ? "mot de passe" : type === "filiere" ? "filière" : "Type de champ inconnu";

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        setActivation(value.trim().length > 0);
    };

    const handleClick = () => {
      navigate("/profile/informations");
    };

    return (
        <div>
            <div className="w-full flex justify-center items-center mt-10 gap-10">
                <button onClick={handleClick}>
                    <img src="/arrow-left.svg" alt="back" className="w-9" />
                </button>
                <h1 className="text-center text-5xl text-[#000] font-bold">Modifier {title}</h1>
            </div>
            <section className="w-full py-40 px-7 grid grid-rows-2 gap-32">
                <InputUpdate typeInput={type} onChange={handleInputChange} />
                <BoutonActivate urlRedirection="/profile/informations" nomBouton="Modifier" activate={activation} />
            </section>
        </div>
    )
}

export default ProfilModifPage;
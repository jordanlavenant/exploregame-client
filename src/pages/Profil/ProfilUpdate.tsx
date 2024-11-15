import { useEffect, useState } from 'react';
import InputUpdate from '@/components/Profil/InputUpdate';
import BoutonActivate from '@/components/Profil/BoutonActivate';

const ProfilModifPage = () => {
    const [type, setType] = useState("");
    const [activation, setActivation] = useState(false);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const typeParam = params.get('type');
        if (typeParam) {
            setType(typeParam);
        }
    }, []);

    const title = type === "username" ? "username" : type === "mail" ? "mail" : type === "password" ? "mot de passe" : type === "filiere" ? "filière" : "Type de champ inconnu";

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        setActivation(value.trim().length > 0);
    };

    return (
        <div className="">
            <div className="w-full text-center text-4xl mt-10 text-[#791860] font-bold">Modifier {title}</div>
            <section className="w-full py-40 px-7 grid grid-rows-2 gap-32">
                <InputUpdate typeInput={type} onChange={handleInputChange} />
                <BoutonActivate urlRedirection="/profil/check" nomBouton="Modifier" activate={activation} />
            </section>
        </div>
    )
}

export default ProfilModifPage;
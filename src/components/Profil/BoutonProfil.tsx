import { useNavigate } from 'react-router-dom';

interface BoutonProfilProps {
    urlRedirection: string;
    nomBouton: string;
}

const BoutonProfil = ({ urlRedirection, nomBouton }: BoutonProfilProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(urlRedirection);
    };

    return (
        <button className="px-4 py-3 bg-[#791860] bg-opacity-50 rounded-xl border-[#791860] border-4
         text-[#791860] text-center font-bold text-2xl w-full" onClick={handleClick}>
            {nomBouton}
        </button>
    )
}

export default BoutonProfil;
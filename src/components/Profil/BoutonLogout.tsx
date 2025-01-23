import { useNavigate } from 'react-router-dom';

interface BoutonLogoutProps {
    urlRedirection: string;
    nomBouton: string;
}

const BoutonLogout = ({ urlRedirection, nomBouton }: BoutonLogoutProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("player");
    navigate(urlRedirection);
  }

  return (
    <section className="w-full my-10 px-7 flex flex-wrap gap-3">
      <button className="px-4 py-3 bg-[#E54646] bg-opacity-50 rounded-xl border-[#C53030] border-4
      text-[#C53030] text-center font-bold text-2xl w-full" onClick={handleClick}>
        {nomBouton}
      </button>
    </section>
  )
}

export default BoutonLogout;
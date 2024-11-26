import { useNavigate } from 'react-router-dom';

interface BoutonExplorerProps {
    positionBas: boolean;
    urlRedirection: string;
    backgroundColor?: string;
    bordercolor?: string;
}

const BoutonExplorer = ({positionBas, urlRedirection, bordercolor, backgroundColor}: BoutonExplorerProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(urlRedirection);
    };

    if (positionBas) {
        return (
            <div className="flex justify-center items-center w-full sticky bottom-0 left-1/2 transform -translate-y-1/2">
                <button className="p-4 py-4 w-3/4 border-4 border-[#791860] rounded-3xl bg-[#BB8BAF] font-bold text-3xl text-white" onClick={handleClick}>
                    Explorer
                </button>
            </div>
        );
    } else {
        return (
            <div className="flex justify-center items-center w-full my-8">
                <button className={`p-4 py-4 w-3/4 border-4 border-[${bordercolor}] rounded-3xl bg-[${backgroundColor}] font-bold text-3xl text-white`} onClick={handleClick}>
                    Explorer
                </button>
            </div>
        );
    }
}

export default BoutonExplorer;
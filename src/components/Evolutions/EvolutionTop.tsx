interface EvolutionTopProps {
    nomFiliere: string;
}

const EvolutionTop = ({ nomFiliere }: EvolutionTopProps) => {
    const handleRetourClick = () => {
        window.location.href = '/achievements';
    };

    return (
        <div className="w-full py-5 px-5 h-24 flex justify-between items-center bg-[#B7BF35]">
            <button className="w-10" onClick={handleRetourClick}>
                <img src="/arrow-left.svg" alt="Retour" className="w-7 h-7" />
            </button>
            <h3 className="text-center font-bold text-4xl text-[#000]">{nomFiliere}</h3>
            <button className="flex flex-col items-center">
                <img src="/mapIcon.png" alt="map" className="w-10 h-10" />
                <p className="text-[#000] text-xl font-bold text-center">Carte</p>
            </button>
        </div>
    );
};

export default EvolutionTop;
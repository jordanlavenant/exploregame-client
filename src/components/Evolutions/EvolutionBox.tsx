interface EvolutionBoxProps {
    nomEtape: string;
    progression: number;
    lettre: string;
    urlRedirection: string;
}

const EvolutionBox = ({ nomEtape, progression, lettre, urlRedirection }: EvolutionBoxProps) => {
    
    return (
        <div className="grid grid-cols-4 gap-10 w-full px-4 py-8 bg-[#B7BF35] bg-opacity-50 rounded-xl border-4 border-[#E6B711] text-[#000]">
            <div className="flex items-center">
                <p className="font-bold text-xl">{nomEtape}</p>    
            </div>
            <div className="flex items-center justify-center">
                <p className="font-bold text-xl text-center">{progression.toString()}%</p>
            </div>
            <div className="flex items-center">
                <p className="font-bold text-xl">{lettre}</p>
            </div>
            <div className="flex items-center">
                <button className="px-4 py-2 flex items-center justify-center">
                    <img src="/arrow-right.png" alt="flèche vers la droite" />
                </button>
            </div>
        </div>
    )
}

export default EvolutionBox;
interface EvolutionBoxProps {
    nomEtape: string;
    progression: number;
    lettre: string;
    urlRedirection: string;
}

const EvolutionBox = ({ nomEtape, progression, lettre, urlRedirection }: EvolutionBoxProps) => {
    console.log(urlRedirection)
    if (progression === 100) {    
        return (
            <div className="flex justify-between items-center gap-10 w-full px-4 py-4 h-28 bg-[#B7BF35] bg-opacity-50 rounded-3xl border-4 border-[#E6B711] text-[#000]">
                <p className="font-bold text-lg text-center w-40">{nomEtape}</p>    
                <img src="/validate.png" alt="valider" className="min-w-5 min-h-5" />
                <p className="font-bold text-2xl">{lettre}</p>
                <img src="/arrow-right.svg" alt="flèche vers la droite" className="min-w-5 min-h-5 px-4 py-2 flex items-center justify-center" />
            </div>
        );
    } else {
        return (
            <div className="flex justify-between items-center gap-10 w-full px-4 py-4 h-28 bg-[#B7BF35] bg-opacity-50 rounded-3xl border-4 border-[#E6B711] text-[#000]">
                <p className="font-bold text-lg text-center w-40">{nomEtape}</p>    
                <p className="font-bold text-xl text-center">{progression.toString()}%</p>
                <p className="font-bold text-3xl blur-sm">?</p>
                <img src="/arrow-right.svg" alt="flèche vers la droite" className="min-w-5 min-h-5 px-4 py-2 flex items-center justify-center" />
            </div>
        );
    }
}

export default EvolutionBox;
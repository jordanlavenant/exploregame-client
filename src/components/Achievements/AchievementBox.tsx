interface AchievementBoxProps {
    filiere: string;
    progression: number;
    remainingSteps: number;
    scenarioStart: boolean;
}

const AchievementBox = ({ filiere, progression, remainingSteps, scenarioStart }: AchievementBoxProps) => {
    let phrase:string = "";
    let urlPhotoSucces: string = "/succes-vide.png";
    
    if (scenarioStart && remainingSteps === 0 && progression === 100) {
        phrase = "Tout a été obtenu";
        urlPhotoSucces = "/succes.png";
    } else if (scenarioStart && remainingSteps > 0) {
        phrase = remainingSteps.toString() + " étapes restantes";
    } else {
        phrase = "A Commencer";
    }

    const handleRetourClick = () => {
        window.location.href = '/evolutions/scenario';
    };
    
    return (
        <div className="flex gap-20 justify-between w-full px-4 py-4 bg-[#791860] bg-opacity-50 rounded-xl border-4 border-[#791860] text-[#791860]" onClick={handleRetourClick}>
            <div className="flex items-center justify-between">
                <img src={urlPhotoSucces} alt="achievement" className="w-11 h-11"/>
                <p className="font-bold text-2xl">{filiere}</p>    
            </div>
            <div className="grid grid-rows-2 w-full">
                <div className="flex gap-2 items-center">
                    <p className="text-xl font-bold">{progression.toString()}%</p>
                    <progress className="w-full rounded-full bg-[#fff] h-4 custom-progress" value={progression.toString()} max="100"></progress>
                </div>
                <p className="text-xl font-bold">{phrase}</p>
            </div>
        </div>
    )
}

export default AchievementBox;
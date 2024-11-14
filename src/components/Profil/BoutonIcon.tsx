interface BoutonProfilProps {
    urlRedirection: string;
    urlImage: string;
    nomTitre: string;
    nbLike?: number;
}

const BoutonProfil = ({ urlRedirection, urlImage, nomTitre, nbLike }: BoutonProfilProps) => {
    if (nbLike) {
    return (
        <div className="w-full grid grid-rows-2 items-center">
            <p className="text-xl font-bold text-[#791860] text-center w-full">{nomTitre}</p>
            <button className="px-4 py-4 flex items-center justify-center gap-2 bg-[#791860] bg-opacity-50 rounded-xl border-[#791860] border-4"><p className="text-[#791860] text-center font-bold text-xl">{nbLike}</p><img src={urlImage} alt="flèche vers la droite" className="h-[30px]"></img></button>
        </div>
    )
    } else {
        return (
            <div className="w-full grid grid-rows-2 items-center">
                <p className="text-xl font-bold text-[#791860] text-center">{nomTitre}</p>
                <button className="px-4 py-4 flex items-center justify-center bg-[#791860] bg-opacity-50 rounded-xl border-[#791860] border-4"><img src={urlImage} alt="flèche vers la droite" className="h-[30px]"></img></button>
            </div>
        )
    }
}

export default BoutonProfil;
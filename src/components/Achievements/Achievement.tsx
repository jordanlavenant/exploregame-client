interface AchievementProps {
    nom: string;
    filiere: string;
    urlImage: string;
}

const Achievement = ({ nom, filiere, urlImage }: AchievementProps) => {
    console.log(nom)
    return (
        // <section className="w-full mt-10 px-7 flex flex-wrap gap-3">
            <img src={urlImage} alt={filiere} className="w-[70px] h-[70px]" />
            //<p className="text-2xl font-bold text-[#791860]">{nom}</p> 
       // </section>
    )
}

export default Achievement;
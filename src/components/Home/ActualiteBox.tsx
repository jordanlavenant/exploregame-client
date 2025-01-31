import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { darkenColor } from "@/utils/color";

interface ActualiteBoxProps {
    primaryColor: string;
}

const ActualiteBox = ({ primaryColor }: ActualiteBoxProps) => {
    const navigate = useNavigate();

    const secondaryColor = darkenColor(primaryColor, -25);

    const handleCardClick = () => {
        navigate("/actualites");
      };

    const news = [
        { title: "Rencontre avec l’IUT Orléans – Génie mécanique et productique", date: "3 décembre 2024", description: "Le département GMP (Génie Mécanique et Productique) de l'IUT d'Orléans a organisé une rencontre pour échanger sur les besoins en recrutement et présenter ses formations, notamment en Sciences et Technologies de l’Automobile. L'événement comprenait des discussions avec les participants sur les métiers en tension, une présentation des formations, et une visite de l’Atelier de Génie Industriel.", tags: ["GMP", "Automobile", "Recrutement"] },
        { title: "la modernisation de l'IUT passe par le biosourcé", date: "7 avril 2023", description: "L'IUT d'Orléans poursuit sa transformation avec la construction d'un nouveau bâtiment administratif écoresponsable. Ce projet de 4,3 millions d'euros, confié à OBM Construction et à l'agence Créa'ture Architectes, met l'accent sur l'utilisation de matériaux biosourcés, notamment une structure composée à 90 % de bois et un isolant en laine de coton recyclée. La livraison du bâtiment est prévue pour l'été 2023.", tags: ["Biosourcé", "Construction", "Écoresponsable"] },
        { title: "Un nouveau bâtiment pour les métiers de la transition et de l'efficacité énergétique", date: "22 juin 2022", description: "L'IUT d'Orléans a inauguré un nouveau bâtiment dédié aux métiers de la transition et de l'efficacité énergétique. Ce bâtiment moderne vise à former les étudiants aux défis énergétiques actuels et futurs, en mettant l'accent sur les technologies durables et les pratiques écoresponsables.", tags: ["Transition", "Efficacité énergétique", "Inauguration"] },
    ];
    return (
        <div className="flex flex-wrap justify-center items-center gap-3 px-5 my-5" onClick={handleCardClick}>
            <p className="text-3xl font-bold text-[#555454] text-start w-full">Dernières nouvelles</p>
            <div className="space-y-4 w-full">
                {news.map((item, index) => (
                    <div key={index} className="flex flex-col space-y-2 p-4 bg-[#bb8baf] rounded-lg shadow" style={{ backgroundColor: primaryColor }}>
                        <h3 className="font-bold text-xl">{item.title}</h3>
                        <div className='flex flex-wrap justify-start gap-2'>
                            <p style={{ backgroundColor: secondaryColor }} className="px-3 py-2 font-semibold text-white text-sm bg-[#791860]  text-center rounded-lg shadow">{item.tags[0]}</p>
                            <p style={{ backgroundColor: secondaryColor }} className="px-3 py-2 font-semibold text-white text-sm bg-[#791860]  text-center rounded-lg shadow">{item.tags[1]}</p>
                            <p style={{ backgroundColor: secondaryColor }} className="px-3 py-2 font-semibold text-white text-sm bg-[#791860]  text-center rounded-lg shadow">{item.tags[2]}</p>
                        </div>
                        <p className="text-sm text-black">{item.description}</p>
                        <p style={{ backgroundColor: secondaryColor }} className="font-semibold px-3 py-2 text-white bg-[#791860] w-48 text-center rounded-lg shadow">{item.date}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ActualiteBox;
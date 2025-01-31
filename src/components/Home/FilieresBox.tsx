import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Department } from "@exploregame/types";

interface FiliereBoxProps {
}

const FilieresBox = ({ }: FiliereBoxProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/departments");
  };

  const departements = [
    {name: "GEA", description: "Gestion des Entreprises et des Administrations"},
    {name: "GMP", description: "Génie Mécanique et Productique"},
    {name: "INFO", description: "Informatique"},      
  ]

  return (
    <div className="flex flex-wrap justify-center items-center gap-3 px-5 my-5">
      <p className="text-3xl font-bold text-[#555454] text-start w-full">Les départements</p>
      <div className='flex flex-wrap justify-center gap-3 bg-[#bb8baf] p-5 rounded-lg shadow'>
        {departements.map((departement, index) => (
            <Card key={index} className="bg-[#bb8baf] cursor-pointer w-full border-[#000]" onClick={handleCardClick}>
                <CardContent>
                    <CardTitle className='font-bold my-4 text-2xl'>{departement.name}</CardTitle>
                    <CardDescription className='text-black text-xl'>{departement.description}</CardDescription>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
};

export default FilieresBox;
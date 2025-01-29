import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface CarteBoxProps {
}

const CarteBox = ({ }: CarteBoxProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/map");
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-3 px-5 my-5">
      <p className="text-3xl font-bold text-[#555454] text-start w-full">Carte de l'IUT d'Orléans</p>
      <Card className="bg-[#bb8baf] cursor-pointer" onClick={handleCardClick}>
        <CardHeader className='p-0'>
          <img src={"/cartefake.png"} alt="Carte" className="w-full h-60 rounded-t-lg" />
        </CardHeader>
        <CardContent>
          <CardTitle className='font-bold my-4'>Carte de l'IUT d'Orléans</CardTitle>
          <CardDescription className='text-black'>Vous pouvez retrouvez la localisation des différents départemens de l'IUT d'Orléans, ainsi que ses différents parking</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default CarteBox;
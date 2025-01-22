import { useNavigate } from 'react-router-dom';
import Achievement from '@/components/Achievements/Achievement';

interface AchievementProps {
  nom: string;
  filiere: string;
  urlImage: string;
}

interface AchievementCellProps {
  listeAchievements: AchievementProps[]
}

const AchievementCell = ({ listeAchievements }: AchievementCellProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/achievements')
  }

  return (
    <section className="w-full mt-10 px-7 grid grid-rows-2">
      <div className="w-full flex flex-start items-center gap-5">
        <p className="text-2xl font-bold text-[#000]">Accomplissements</p>
        <button className="px-4 py-2 flex items-center justify-center" onClick={handleClick}>
          <img src="/arrow-right.svg" alt="flèche vers la droite" />
        </button>
      </div>
      <div className="w-full flex flex-start flex-wrap gap-2 items-center">
        {listeAchievements.map((achievement, index) => (
          <Achievement
            key={index}
            nom={achievement.nom}
            filiere={achievement.filiere}
            urlImage={achievement.urlImage}
          />
        ))}
      </div>
    </section>
  )
}

export default AchievementCell;
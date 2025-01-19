import { useState } from "react";
import { Department } from "@exploregame/types";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";

const DepartmentHeader = ({
  currentDepartment,
  nextDepartment,
  previousDepartment,
  handleNextClick,
  handlePrevClick,
}: {
  currentDepartment: Department,
  nextDepartment: Department,
  previousDepartment: Department,
  handleNextClick: () => void,
  handlePrevClick: () => void,
}) => {
  const [leftOpacity, setLeftOpacity] = useState(1);
  const [centerOpacity, setCenterOpacity] = useState(1);
  const [rightOpacity, setRightOpacity] = useState(1);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setLeftOpacity(0);
      setCenterOpacity(0);
      setRightOpacity(1);
      setTimeout(() => {
        handleNextClick();
        setLeftOpacity(1);
        setCenterOpacity(1);
      }, 300);
    },
    onSwipedRight: () => {
      setLeftOpacity(1);
      setCenterOpacity(0);
      setRightOpacity(0);
      setTimeout(() => {
        handlePrevClick();
        setCenterOpacity(1);
        setRightOpacity(1);
      }, 300);
    },
    //TODO: fix this V
    // preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const navigate = useNavigate();
    
  const UserClick = () => {
    navigate("/profile");
  };

  const HomeClick = () => {
    navigate("/");
  }

  return (
    <header {...handlers} className="pt-2 header flex w-full flex-wrap" style={{ backgroundColor: currentDepartment.ColorSet.primary }}>
      <section className="flex w-full justify-between px-10">
        <button onClick={HomeClick}><img className="w-12" src="/home-icon.svg" alt="home" /></button>
        <button onClick={UserClick}><img className="w-12" src="/user-icon.svg" alt="user" /></button>
      </section>
      <section className="grid grid-cols-3 items-end p-4 w-full">
        <button
          onClick={handlePrevClick}
          className="text-white px-4 rounded font-bold text-opacity-50 text-2xl"
          style={{ opacity: leftOpacity, userSelect: 'none' }}
        >
          {previousDepartment.name}
        </button>
        <div className="text-center" style={{ opacity: centerOpacity }}>
          <h1 className="text-4xl font-bold text-[#fff]" style={{ userSelect: 'none' }}>
            {currentDepartment.name}
          </h1>
        </div>
        <button
          onClick={handleNextClick}
          className="text-white px-4 rounded font-bold text-opacity-50 text-2xl"
          style={{ opacity: rightOpacity, userSelect: 'none' }}
        >
          {nextDepartment.name}
        </button>
      </section>
     
    </header>
  );
};

export default DepartmentHeader;
import { useState } from "react";
import { Department } from "@exploregame/types";
import { useSwipeable } from "react-swipeable";

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
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <header {...handlers} className="header grid grid-cols-3 items-end p-4 bg-red-300">
      <button
        onClick={handlePrevClick}
        className="text-white px-4 rounded font-bold text-opacity-50 text-2xl"
        style={{ opacity: leftOpacity }}
      >
        {previousDepartment.name}
      </button>
      <div className="text-center" style={{ opacity: centerOpacity }}>
        <h1 className="text-5xl font-bold text-[#fff]">{currentDepartment.name}</h1>
      </div>
      <button
        onClick={handleNextClick}
        className="text-white px-4 rounded font-bold text-opacity-50 text-2xl"
        style={{ opacity: rightOpacity }}
      >
        {nextDepartment.name}
      </button>
    </header>
  );
};

export default DepartmentHeader;
import { HouseIcon, User } from "lucide-react";
import { useState } from "react";
import { useDepartmentIndex } from "../../context/DepartmentContext";

const Header = ({ departments }: { departments: any[] }) => {
    const { currDepartmentIndex, setCurrDepartmentIndex } = useDepartmentIndex();
    const [selectedDepartments, setSelectedDepartments] = useState<any[]>([]);

    return (
        <header 
            className="grid grid-cols-3 p-4 gap-16"
            style={{
                backgroundColor: "#f0f0f0"
                // Ici fetch la bonne couleur du département
            }}
        >
            <div className="flex items-center flex-col">
                <HouseIcon />
                <button onClick={() => console.log("before")}>
                    {selectedDepartments[0]?.name}
                </button>
            </div>
            <p className="font-bold text-3xl text-center">{departments[currDepartmentIndex].name}</p>
            <div className="flex items-center flex-col">
                <User />
                <button onClick={() => console.log("after")}>
                    {selectedDepartments[2]?.name}
                </button>
            </div>
        </header>
    )
}

export default Header
import { useColorsDepartments } from "@/context/ColorsDepartmentContext";
import React from 'react';

interface BoutonTextProps {
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextBouton: React.FC<BoutonTextProps> = ({ placeholder, value, onChange }) => {
  const { getColors } = useColorsDepartments()
  const { primary, secondary, tertiary } = getColors()

  return (
    <div className="flex items-center px-4 py-2 border rounded-lg" style={{ backgroundColor: secondary, borderColor: primary }}>
      {/* Icône */}
      <span className="mr-2" style={{ color: tertiary }}></span>
      {/* Champ Texte */}
      <input
        type="text"
        placeholder={placeholder || "Écrire ici"}
        value={value}
        onChange={onChange}
        className="flex-1 bg-transparent outline-none placeholder-gray-500"
        style={{ color: primary }}
      />
    </div>
  );
};

export default TextBouton;

import React from 'react';

interface BoutonTextProps {
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextBouton: React.FC<BoutonTextProps> = ({ placeholder, value, onChange }) => {
  return (
    <div className="flex items-center px-4 py-2 border rounded-lg bg-gray-100 border-gray-300 focus-within:ring-2 focus-within:ring-gray-400">
      {/* Icône */}
      <span className="text-gray-500 mr-2"></span>
      {/* Champ Texte */}
      <input
        type="text"
        placeholder={placeholder || "Écrire ici"}
        value={value}
        onChange={onChange}
        className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
      />
    </div>
  );
};

export default TextBouton;

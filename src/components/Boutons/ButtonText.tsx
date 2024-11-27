import React from 'react';

interface BoutonTextProps {
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextBouton: React.FC<BoutonTextProps> = ({ placeholder, value, onChange }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="bouton-text"
        />
    );
};

export default TextBouton;
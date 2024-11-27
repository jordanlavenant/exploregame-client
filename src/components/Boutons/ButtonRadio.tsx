import React from 'react';

interface RadioButtonProps {
    name: string;
    options: { label: string; value: string }[];
    selectedValue: string;
    onChange: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ name, options, selectedValue, onChange }) => {
    return (
        <div>
            {options.map((option) => (
                <label key={option.value}>
                    <input
                        type="radio"
                        name={name}
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={() => onChange(option.value)}
                    />
                    {option.label}
                </label>
            ))}
        </div>
    );
};

export default RadioButton;
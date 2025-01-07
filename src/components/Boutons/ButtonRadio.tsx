import React from 'react';
import { useColorsDepartments } from "@/context/ColorsDepartmentContext"

interface RadioButtonProps {
  name: string;
  options: { label: string; value: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const colors = useColorsDepartments();

const RadioButton: React.FC<RadioButtonProps> = ({ name, options, selectedValue, onChange }) => {
  return (
    <div className="flex flex-col space-y-4">
      {options.map((option) => {
        const isSelected = selectedValue === option.value;

        return (
          <label
            key={option.value}
            className={`flex items-center px-4 py-3 rounded-lg cursor-pointer transition-all ${
              isSelected
                ? `bg-[${colors.colors.primary}] text-white border-2 border-[${colors.colors.secondary}]`
                : `bg-[${colors.colors.tertiary}] text-black border-2 border-gray-300`
            }`}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={isSelected}
              onChange={() => onChange(option.value)}
              className="hidden"
            />
            <span
              className={`w-6 h-6 flex items-center justify-center rounded-full border-2 mr-3 ${
                isSelected
                  ? `border-white bg-white`
                  : `border-gray-400 bg-transparent`
              }`}
            >
              {isSelected && (
                <span
                  className={`w-3 h-3 rounded-full ${
                    isSelected ? `bg-[${colors.colors.primary}]` : ''
                  }`}
                ></span>
              )}
            </span>
            <span className="text-lg font-semibold">{option.label}</span>
          </label>
        );
      })}
    </div>
  );
};

export default RadioButton;

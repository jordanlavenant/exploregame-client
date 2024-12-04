import { Colors } from '@/utils/colors';
import React from 'react';

interface BoutonDateProps {
    label: string;
    onChange: (date: string) => void;
    colors?: Colors;
}

const ButtonDate: React.FC<BoutonDateProps> = ({ label, onChange }) => {
    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div>
            <label>{label}</label>
            <input type="date" onChange={handleDateChange} />
        </div>
    );
};

export default ButtonDate;
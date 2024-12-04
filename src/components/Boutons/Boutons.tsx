import React from 'react';
import RadioButton from './ButtonRadio';
import TextButton from './ButtonText';
import DateButton from './ButtonDate';
import { useCurrentDepartment } from '@/context/CurrentDepartmentContext';

interface BoutonProps {
    type: number;
    label: string;
    onClick: () => void;
}

const Bouton: React.FC<BoutonProps> = ({ type, label, onClick }) => {
    const currentDepartment = useCurrentDepartment();
    console.log(currentDepartment);
    switch (type) {
        case 1:
            return <TextButton value={''} onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
                throw new Error('Function not implemented.');} } />;
        case 2:
            return <RadioButton name={''} options={[{ label: label, value: '' }]} selectedValue={''} onChange={function (value: string): void {
                throw new Error('Function not implemented.');
            } } />;
        case 3:
            return <DateButton label={''} onChange={function (date: string): void {
                throw new Error('Function not implemented.');} } />;
        default:
            break;
    }
};

export default Bouton;
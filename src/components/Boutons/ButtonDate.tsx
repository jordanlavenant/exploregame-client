import React from 'react';

interface BoutonDateProps {
  label: string;
  onChange: (date: string) => void;
}

// const colors = useColorsDepartments()

const ButtonDate: React.FC<BoutonDateProps> = ({ label, onChange }) => {
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  }

  return (
    <div>
      <label>{label}</label>
      <input type="date" onChange={handleDateChange} />
    </div>
  )
}

export default ButtonDate;
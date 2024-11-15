interface InputUpdateProps {
    typeInput: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputUpdate = ({typeInput, onChange}: InputUpdateProps) => {
    if (typeInput === "username") {
        return (
            <input className="px-4 py-3 rounded-xl border-[#791860] border-4 text-[#791860] text-center font-bold text-2xl placeholder:text-[#791860]" placeholder="@username" onChange={onChange}></input>
        )
    } else if (typeInput === "mail") {
        return (
            <input className="px-4 py-3 rounded-xl border-[#791860] border-4 text-[#791860] text-center font-bold text-2xl placeholder:text-[#791860]" placeholder="user@gmail.com" onChange={onChange}></input>
        )
    } else if (typeInput === "password") {
        return (
            <input className="px-4 py-3 rounded-xl border-[#791860] border-4 text-[#791860] text-center font-bold text-2xl placeholder:text-[#791860]" placeholder="********" onChange={onChange}></input>
        )
    } else if (typeInput === "filiere") {
        return (
            <input className="px-4 py-3 rounded-xl border-[#791860] border-4 text-[#791860] text-center font-bold text-2xl placeholder:text-[#791860]" placeholder="Informatique" onChange={onChange}></input>
        )
    } else {
        new Error("Type de champ inconnu")
    }
}

export default InputUpdate;
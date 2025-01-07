interface BoutonSubmitProps {
    nomBouton: string;
    activate: boolean;
}

const BoutonSubmit = ({nomBouton, activate}: BoutonSubmitProps) => {
    if (activate) {
        return (
            <button className="px-4 py-3 bg-[#791860] bg-opacity-50 rounded-3xl border-[#791860] border-4 text-[#fff] text-center font-bold text-2xl w-full" type="submit">{nomBouton}</button>
        )
    } else {
        return (
            <button className="px-4 py-3 bg-[#C9C9C9] bg-opacity-50 rounded-3xl border-[#8C8C8C] border-4 text-[#8C8C8C] text-center font-bold text-2xl w-full" type="submit" disabled>{nomBouton}</button>
        )
    }
}

export default BoutonSubmit;
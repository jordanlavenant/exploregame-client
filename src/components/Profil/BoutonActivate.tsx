interface BoutonActivateProps {
    urlRedirection: string;
    nomBouton: string;
    activate: boolean;
}

const BoutonActivate = ({urlRedirection, nomBouton, activate}: BoutonActivateProps) => {
    console.log(urlRedirection)
    if (activate) {
        return (
            <button className="px-4 py-3 bg-[#791860] bg-opacity-50 rounded-xl border-[#791860] border-4 text-[#791860] text-center font-bold text-2xl">{nomBouton}</button>
        )
    } else {
        return (
            <button className="px-4 py-3 bg-[#C9C9C9] bg-opacity-50 rounded-xl border-[#8C8C8C] border-4 text-[#8C8C8C] text-center font-bold text-2xl" disabled>{nomBouton}</button>
        )
    }
}

export default BoutonActivate;
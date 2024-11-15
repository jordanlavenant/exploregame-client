import BoutonProfil from "@/components/Profil/BoutonProfil"

interface BoutonCellProps {
    urlRedirection: string;
    nomBouton: string;
    title: string;
}

const BoutonCell = ({ urlRedirection, nomBouton, title }: BoutonCellProps) => {
    return (
        <section className="w-full mt-10 px-7 flex flex-wrap gap-3">
            <p className="text-2xl font-bold text-[#000] text-start w-full">{title}</p>
            <BoutonProfil urlRedirection={urlRedirection} nomBouton={nomBouton} />
        </section>
    )
}

export default BoutonCell;
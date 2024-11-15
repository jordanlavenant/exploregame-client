import EvolutionBox from "@/components/Evolutions/EvolutionBox";
import SecretWord from "@/components/Evolutions/SecretWord";
import EvolutionTop from "@/components/Evolutions/EvolutionTop";

const EvolutionScenario = () => {
    const listeEvolutions = [
        {nomEtape: 'BATIMENT ADMINISTRATIF', progression: 100, lettre: 'A', urlRedirection: ''},
        {nomEtape: 'BATIMENT MT2E', progression: 100, lettre: 'B', urlRedirection: ''},
        {nomEtape: 'BATIMENT ADMINISTRATIF', progression: 69, lettre: 'C', urlRedirection: ''},
        {nomEtape: 'BATIMENT MT2E', progression: 0, lettre: 'G', urlRedirection: ''}
    ];

    const secretWord = listeEvolutions.map(evolution => evolution.lettre).join('');
    const nomFiliere = "Informatique";

    return (
        <div>
            <EvolutionTop nomFiliere={nomFiliere} />
            <section className="mt-10 px-4 flex flex-wrap gap-4">
                {listeEvolutions.map((evolution, index) => (
                    <EvolutionBox 
                        key={index}
                        nomEtape={evolution.nomEtape}
                        progression={evolution.progression}
                        lettre={evolution.lettre}
                        urlRedirection={evolution.urlRedirection}
                    />
                ))}
            </section>
            <SecretWord secretWord={secretWord} nbEtapesFini={listeEvolutions.filter(evolution => evolution.progression === 100).length} />
        </div>
    )
}

export default EvolutionScenario;
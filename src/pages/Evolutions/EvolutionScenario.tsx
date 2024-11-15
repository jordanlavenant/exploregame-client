import EvolutionBox from "@/components/Evolutions/EvolutionBox";

const EvolutionScenario = () => {
    return (
        <div>
            <h1>Evolution Scenario</h1>
            <section className="mt-10 px-4 flex flex-wrap gap-4">
                <EvolutionBox nomEtape="BATIMENT ADMINISTRATIF" progression={100} lettre="A" urlRedirection="" />
                <EvolutionBox nomEtape="BATIMENT MT2E" progression={50} lettre="B" urlRedirection="" />
                <EvolutionBox nomEtape="BATIMENT MT2E" progression={60} lettre="C" urlRedirection="" />
                <EvolutionBox nomEtape="BATIMENT MT2E" progression={100} lettre="G" urlRedirection="" />
            </section>
        </div>
    )
}

export default EvolutionScenario;
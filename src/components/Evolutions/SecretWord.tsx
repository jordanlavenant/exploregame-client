interface SecretWordProps {
    secretWord: string;
    nbEtapesFini: number;
}

const SecretWord = ({secretWord, nbEtapesFini}:SecretWordProps) => {
    const listeLetters = secretWord.split('');

    return (
        <div className="w-full mt-5">
            <h3 className="text-center font-bold text-xl">Mot secret</h3>
            <section className="flex justify-center gap-5 mt-5">
                {listeLetters.map((letter, index) => (
                    <div key={index} className="flex flex-col items-center justify-center gap-5">
                        <p className="font-bold text-3xl">{nbEtapesFini > index ? letter : '‎ '}</p>
                        <div className="w-10 border-2 border-[#000]"></div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default SecretWord;
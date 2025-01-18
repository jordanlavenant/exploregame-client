interface QuestionBottomProps {
    valide: boolean;
    answer: string;
    handleAnswer: (answer: string) => void;
}

const QuestionBottom = ({ valide, answer, handleAnswer }: QuestionBottomProps) => {
    function submit() {
        if (!valide) return
        console.log(answer)
        handleAnswer(answer)
      }

    return (
        <section className="flex flex-wrap justify-center items-center gap-4 px-6 py-2 w-full">
            <div className="flex justify-end items-center w-full p-2">
            <button className=""><img src="/interogation.svg" alt="indices" className="w-10" /></button>
            </div>
            <button onClick={submit} className="p-4 mx-2 border-4 rounded-3xl font-bold text-2xl text-white bg-yellow-400 border-yellow-600 w-full">
            Valider
            </button>
        </section>
    )
}

export default QuestionBottom;
import { useColorsDepartments } from "@/context/ColorsDepartmentContext"
import { useCurrentQuestionState } from "@/context/CurrentQuestionStateContext"
import { useState, useEffect } from "react"

const SubmitQuestion = () => {
  const { questionState } = useCurrentQuestionState()
  const { getColors } = useColorsDepartments()
  const { primary, secondary } = getColors()

  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDisabled(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section 
    className={`${questionState.answered 
      ? questionState.correct 
        ? 'bg-[#B6FABA] fixed bottom-0 w-full p-2 space-y-2' 
        : 'bg-[#FAB6B6] fixed bottom-0 w-full p-2 space-y-2' 
      : 'bg-transparent fixed bottom-8 h-44 w-full p-2 space-y-2'}`
    }
    >
        <div className="grid grid-rows-2 min-h-24 px-8">
          {questionState.answered && (
            <>
              <div className='flex flex-wrap justify-start items-center'>
                <div className="flex items-center gap-x-2 text-3xl justify-between w-full">
                  <section className="flex items-center justify-start gap-x-2">
                    <img src={questionState.correct ? '/icon-valid.svg' : '/icon-false.svg'} alt="checked" className="w-8 h-8" />
                    <p className={questionState.correct ? 'font-bold text-[#46E54E]' : 'font-bold text-[#C53030]'}>{questionState.correct ? 'Correct !' : 'Incorrect'}</p>
                  </section>
                  {questionState.correct ? <img src="/green-flag.svg" alt="green-flag" className="w-12 h-12" /> : <img src="/red-flag.svg" alt="red-flag" className="w-12 h-12" />}
                </div>
              </div>
              <div className="flex justify-start items-center text-xl">
              <p className={questionState.correct ? 'text-[#46E54E] font-bold' : 'text-[#C53030] font-bold'}>
                {questionState.correct ? '' : 'Bonne réponse :'} 
                <span className={questionState.correct ? 'font-thin' : 'font-thin'}>
                  {questionState.correct ? '' : questionState.answers.join(' , ')}
                </span>
              </p>
              </div>
            </>
          )}
        </div>
      <div className="flex flex-wrap justify-center items-center gap-4 py-2 w-full">
        <button
          className={`${questionState.answered 
            ? questionState.correct 
              ? 'p-4 mx-2 border-4 rounded-3xl font-bold text-2xl text-white bg-[#46E54E] border-[#3cd943] w-full' 
              : 'p-4 mx-2 border-4 rounded-3xl font-bold text-2xl text-white bg-[#E54646] border-[#C53030] w-full' 
            : `p-4 border-4 rounded-3xl font-bold text-2xl text-white w-full transition-opacity duration-500 ${isDisabled ? 'opacity-0' : 'opacity-100'}`}`
          }
          style={!questionState.answered ? {
            backgroundColor: secondary,
            borderColor: primary
          } : {}}
          type="submit"
          disabled={isDisabled}
        >
          {!questionState.answered ? "Valider" : "Continuer"}
        </button>
      </div>
    </section>
  )
}

export default SubmitQuestion
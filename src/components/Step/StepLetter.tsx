import { useCurrentQuestionState } from "@/context/CurrentQuestionStateContext"
import { gql, useMutation } from "@apollo/client"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "../ui/button"
import { useNextStep } from "@/context/NextStepContext"
import { Lock } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export const UPDATE_PLAYER_SCRIPT = gql`
  mutation updatePlayerScript($id: String!, $input: UpdatePlayerScriptInput!) {
    updatePlayerScript(id: $id, input: $input) {
      id
    }
  }
`

const StepLetter = () => {
  const navigate = useNavigate()
  const { depId, sceId } = useParams()
  const [updatePlayerScript] = useMutation(UPDATE_PLAYER_SCRIPT)
  const { setQuestionState } = useCurrentQuestionState()
  const { stepProps } = useNextStep()

  const [isRevealed, setIsRevealed] = useState(false)
  const [isGlowing, setIsGlowing] = useState(false)

  const { playerScriptId, currentStep, nextStep } = stepProps
  
  const handleNext = () => {
    updatePlayerScript({
      variables: {
        id: playerScriptId,
        input: {
          stepId: nextStep.id,
          questionId: nextStep.Step.Questions[0].id
        }
      }
    })
    .then(() => setQuestionState({
      answered: false,
      correct: false
    }))
    .then(() => navigate(`/departments/${depId}/scenarios/${sceId}`))
  }

  useEffect(() => {
    if (isRevealed) {
      const timer = setTimeout(() => setIsGlowing(true), 300)
      return () => clearTimeout(timer)
    }
  }, [isRevealed])

  return (
    // <section>
    //   <Button onClick={handleNext}>Next</Button>
    //   {currentStep.lettre}
    // </section>
    <div className="min-h-screen bg-white px-4 py-8 flex flex-col">
    <link rel="stylesheet" href="./styles/stepLetter.css"/>
    {/* Header */}
    <h1 className="text-[#F4C430] text-2xl font-bold text-center mb-12">
      SCENARIO QLIO
    </h1>

    {/* Progress Indicator */}
    <div className="w-full max-w-[280px] mx-auto mb-16">
      <div className="relative flex items-center justify-between">
        {/* Line connecting circles */}
        <div className="absolute left-0 right-0 h-[2px] bg-[#F4C430]" />
        
        {/* Circles */}
        <motion.div 
          className={`relative z-10 w-10 h-10 rounded-full bg-[#F4C430] flex items-center justify-center text-white font-semibold ${!isRevealed ? 'blur-sm' : ''}`}
          animate={{ filter: isRevealed ? 'blur(0px)' : 'blur(4px)' }}
          transition={{ duration: 0.3, delay: 1.5 }}
        >
          {currentStep.lettre}
        </motion.div>
        <div className="relative z-10 w-10 h-10 rounded-full bg-[#F4C430] flex items-center justify-center">
          <Lock className="w-5 h-5 text-black" />
        </div>
        <div className="relative z-10 w-10 h-10 rounded-full bg-[#F4C430] flex items-center justify-center">
          <Lock className="w-5 h-5 text-black" />
        </div>
      </div>
    </div>

    {/* Secret Letter Section */}
    <div className="flex-1 flex flex-col items-center justify-center gap-8 mb-16">
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[#F4C430] text-xl"
      >
        La lettre secrete est
      </motion.p>
      <div className="relative">
        <motion.div 
          initial={{ scale: 0, opacity: 0, rotateY: -180 }}
          animate={{ 
            scale: 1, 
            opacity: 1, 
            rotateY: 0,
          }}
          transition={{ 
            duration: 1.2,
            delay: 0.6,
            type: "spring",
            stiffness: 260,
            damping: 20,
            onComplete: () => setIsRevealed(true)
          }}
          className={`text-[#F4C430] text-8xl font-bold ${isGlowing ? 'animate-glow' : ''}`}
        >
          {currentStep.lettre}
        </motion.div>
        {isGlowing && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gradient-radial from-yellow-200 to-transparent opacity-75 blur-xl -z-10"
          />
        )}
      </div>
    </div>

    {/* Next Button */}
    <motion.button 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.8 }}
      className="w-full max-w-[280px] mx-auto py-4 px-8 bg-[#F4C430] rounded-full text-white font-semibold hover:bg-[#E3B420] transition-colors"
      onClick={handleNext}
    >
      Suivant
    </motion.button>
  </div>
  )
}

export default StepLetter
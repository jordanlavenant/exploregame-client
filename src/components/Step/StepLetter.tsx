import { useCurrentQuestionState } from "@/context/CurrentQuestionStateContext"
import { gql, useMutation } from "@apollo/client"
import { useNavigate, useParams } from "react-router-dom"
import { useNextStep } from "@/context/NextStepContext"
import { Lock } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useColorsDepartments } from "@/context/ColorsDepartmentContext"
import { useDepartments } from "@/context/DepartmentDataContext"

export const UPDATE_PLAYER_SCRIPT = gql`
  mutation updatePlayerScript($id: String!, $input: UpdatePlayerScriptInput!) {
    updatePlayerScript(id: $id, input: $input) {
      id
    }
  }
`

const StepLetter = () => {
  const { getColors } = useColorsDepartments()
  const { primary, secondary } = getColors()
  const { departments } = useDepartments()

  const navigate = useNavigate()
  const { depId, sceId, stepId } = useParams()
  const [updatePlayerScript] = useMutation(UPDATE_PLAYER_SCRIPT)
  const { setQuestionState } = useCurrentQuestionState()
  const { stepProps } = useNextStep()

  const [isRevealed, setIsRevealed] = useState(false)
  const [isGlowing, setIsGlowing] = useState(false)
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonVisible(true)
    }, 2400)

    return () => clearTimeout(timer);
  }, [])

  const { playerScriptId, currentStep, nextStep } = stepProps
  
  const handleNext = () => {
    if (nextStep === undefined) {
      updatePlayerScript({
        variables: {
          id: playerScriptId,
          input: {
            stepId: stepId,
            questionId: currentStep.Step.Questions[currentStep.Step.Questions.length - 1].id,
            completed: true
          }
        }
      }).then(() => navigate(`/departments/${depId}`))
      return
    }
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
    <div className="min-h-screen bg-white px-4 py-8 flex flex-col">
    <link rel="stylesheet" href="./styles/stepLetter.css"/>
    {/* Header */}
    <h1 className="text-[#000] text-2xl font-bold text-center mb-12">
      SCENARIO {departments?.find(dep => dep.id === depId)?.name.toUpperCase()}
    </h1>

    {/* Progress Indicator */}
    <div className="w-full mx-auto mb-16">
      <div className="relative flex items-center justify-between">
        {/* Line connecting circles */}
        <div className="absolute left-0 right-0 h-[2px]" style={{ backgroundColor: secondary }} />
        
        {/* Circles */}
        <motion.div 
          className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-black font-semibold ${!isRevealed ? 'blur-sm' : ''}`}
          animate={{ filter: isRevealed ? 'blur(0px)' : 'blur(4px)' }}
          transition={{ duration: 0.3, delay: 1.5 }}
          style={{ backgroundColor: secondary }}
        >
          {currentStep.lettre}
        </motion.div>
        <div className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center"
        style={{ backgroundColor: secondary }}>
          <Lock className="w-5 h-5 text-black" />
        </div>
        <div className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center"
        style={{ backgroundColor: secondary }}>
          <Lock className="w-5 h-5 text-black" />
        </div>
        <div className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center"
        style={{ backgroundColor: secondary }}>
          <Lock className="w-5 h-5 text-black" />
        </div>
        <div className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center"
        style={{ backgroundColor: secondary }}>
          <Lock className="w-5 h-5 text-black" />
        </div>
        <div className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center"
        style={{ backgroundColor: secondary }}>
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
        className="text-[#000] text-3xl"
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
          className={`text-8xl font-bold ${isGlowing ? 'animate-glow' : ''}`}
          style={{ color: secondary }}
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
      className="p-4 border-4 rounded-3xl font-bold text-2xl text-white w-full"
      style={{ backgroundColor: secondary, borderColor: primary }}
      onClick={handleNext}
      disabled={!isButtonVisible}
    >
      {nextStep === undefined ? 'Terminer' : 'Continuer'}
    </motion.button>
  </div>
  )
}

export default StepLetter
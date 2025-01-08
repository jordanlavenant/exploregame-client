import QuestionCell from "@/components/Questions/QuestionCell"
import QuestionHeader from "@/components/Questions/QuestionHeader";
import Discussion from "@/components/Scenarios/Discussion";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export const QUESTIONS_RELATED = gql`
query FindStepById($id: String!) {
    step(id: $id) {
      id
    	CharacterStep{
        id
        text
        Character{
          id
          image
          nomPerso
        }
      }
      Questions {
        id
        question
        Answer {
          id
          answer
        }
        QuestionType {
          id
        }
      }
    }
  }
`

const QuestionPage = () => {
  const { stepId } = useParams()
  const { data, loading, error } = useQuery(QUESTIONS_RELATED, {
    variables: { id: stepId }
  })

  const [showQuestions, setShowQuestions] = useState(false)

  useEffect(() => {
    const checkDiscussionStatus = async () => {
      const discussionFinished = await localStorage.getItem(`discussionFinished-${stepId}`);
      if (discussionFinished) {
        setShowQuestions(true);
      }
    };
    checkDiscussionStatus();
  }, [stepId]);

  const handleFinishDiscussion = () => {
    setShowQuestions(true);
    localStorage.setItem(`discussionFinished-${stepId}`, true);
  };

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  const questions = data.step.Questions
  const discussion = data.step.CharacterStep
  console.log(discussion)

  return (
    <main className="flex-1 flex flex-col h-full">
      <QuestionHeader />
      {!showQuestions ? (
        <Discussion characterSteps={discussion} onFinish={handleFinishDiscussion}/>
      ) : (
        <QuestionCell questions={questions} />
      )}
    </main>
  )
}

export default QuestionPage
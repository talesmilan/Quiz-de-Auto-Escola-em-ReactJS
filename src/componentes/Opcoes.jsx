import './Opcoes.css'
import { useContext } from 'react'
import { QuizContext } from '../context/Quiz'

const Opcoes = ({opcoes, resposta, selectOption}) => {

    const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className={`opcoes ${quizState.answerSelected && opcoes === resposta ? 'correto' : "" } ${quizState.answerSelected && opcoes !== resposta ? 'errado' : "" }`}
        onClick={() => selectOption()}
    >
        <p>{opcoes}</p>
    </div>
  )
}

export default Opcoes
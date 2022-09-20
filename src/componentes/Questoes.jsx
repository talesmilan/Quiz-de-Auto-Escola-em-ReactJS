import { useContext } from 'react'
import { QuizContext } from '../context/Quiz'
import Opcoes from './Opcoes'
import './Questoes.css'

const Questoes = () => {

  const [quizState, dispatch] = useContext(QuizContext)
  const currentQuestion = quizState.questions[quizState.currentQuestion]

  const onSelectOption = (opcoes) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: {answer: currentQuestion.answer, opcoes}
    })
  }


  return (
    <div id="questoes">
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option) => (
          <Opcoes 
            opcoes={option} 
            key={option} 
            resposta={currentQuestion.answer} 
            selectOption={() => onSelectOption(option)}
          />
        ))}
      </div>
      {quizState.answerSelected && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION"}) } >Continuar</button>
      )}
    </div>
  )
}

export default Questoes
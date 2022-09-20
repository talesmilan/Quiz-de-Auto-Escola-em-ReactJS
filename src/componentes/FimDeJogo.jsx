import './FimDeJogo.css'
import { useContext } from 'react'
import { QuizContext } from '../context/Quiz'
import sucesso from '../imagens/sucesso.png'


const FimDeJogo = () => {
    const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id="fim_de_jogo">
        <h2>Fim de Jogo</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
        <img src={sucesso} alt="Fim do Quiz" />
        <button onClick={() => dispatch({type: "NEW_GAME"})} >Reiniciar</button>
    </div>
  )
}

export default FimDeJogo
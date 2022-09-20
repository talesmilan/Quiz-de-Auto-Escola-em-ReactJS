import { useContext } from 'react'
import { QuizContext } from '../context/Quiz'
import questoes from '../imagens/questoes.png'
import './BoasVindas.css'

const BoasVindas = () => {

    const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id="boas_vindas">
        <h2>Seja bem-vindo!</h2>
        <p>Clique no botão abaixo para começar.</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})} >Iniciar</button>
        <img src={questoes} alt="Início do Quiz" />
    </div>
  )
}

export default BoasVindas
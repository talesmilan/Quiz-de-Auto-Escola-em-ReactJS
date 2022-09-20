import './App.css'
import { useContext, useEffect } from 'react'
import { QuizContext } from './context/Quiz'
import BoasVindas from './componentes/BoasVindas'
import Questoes from './componentes/Questoes'
import FimDeJogo from './componentes/FimDeJogo'


function App() {

  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    // embalharar as perguntas
    dispatch({ type: "REODER_QUESTIONS"})

  }, [])

  return (
    <div className="App">
      <h1>Quiz de Auto-escola</h1>
      {quizState.gameStage === "Inicio" && <BoasVindas />}
      {quizState.gameStage === "Meio" && <Questoes />}
      {quizState.gameStage === "Fim" && <FimDeJogo />}
    </div>
  )
}

export default App

import { createContext, useReducer } from "react";
import questions from '../data/questoes'

const STAGES = ["Inicio", "Meio", "Fim"]

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
}

const quizReducer = (state, action) => {

    console.log(state, action)

    switch(action.type) {
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1]
            }
        case "REODER_QUESTIONS":
            const reorderedQuestion = questions.sort(() => {
                return Math.random() - 0.5
            })
            return {
                ...state,
                questions: reorderedQuestion,
            }

        case "CHANGE_QUESTION":
            const nexQuestion = state.currentQuestion + 1
            return {
                ...state,
                currentQuestion: nexQuestion,
            }
        default:
            return state
    }

}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {

    const value = useReducer(quizReducer, initialState)

    return <QuizContext.Provider value={value} >{children}</QuizContext.Provider>
}
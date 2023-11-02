import axios from "axios"
import styled from "styled-components"
import { useEffect, useState } from "react"
import arrWords from "./words"
import QuizDisplay from "../QuizDisplay/QuizDisplay"

const QuizContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`

const Quiz = (props) => {

    const [ word, setWord ] = useState('')
    const [ display, setDisplay ] = useState(false)

    const getWord = () => {
        const randomNum = Math.floor(Math.random() * arrWords.length)
        const randomWord = arrWords[randomNum]
        console.log(randomWord)
        setWord(randomWord)
        console.log(word)
    }

    useEffect(() => {
        if (word) {
            setDisplay(true)
        }
    }, [word])
    

    return (
        <QuizContainer>
            <h1>Quiz</h1>
            <button onClick={getWord}>Get Word</button>
            {/* {display ? <QuizDisplay word={word} /> : null} */}
            <QuizDisplay word={word} />
        </QuizContainer>
    )
}

export default Quiz
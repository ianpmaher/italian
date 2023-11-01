import axios from "axios"
import styled from "styled-components"
import { useState } from "react"

const QuizContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`

const wordUrl = "https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json"

const Quiz = (props) => {

    const randomNum = Math.floor(Math.random() * 10000)
    const [ word, setWord ] = useState("")
    
    const getWord = async () => {
        axios.get(wordUrl)
            .then(res => {
                console.log(res.data)
                setWord(res.data[randomNum])
                // setWord(arrayData[randomNum])
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <QuizContainer>
            <h1>Quiz</h1>
            <button onClick={getWord}>Get Word</button>
            <p>{word}</p>
        </QuizContainer>
    )
}

export default Quiz
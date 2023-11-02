import styled from "styled-components";

const QuizContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`

const QuizDisplay = (props) => {
    const loaded = () => (
        <QuizContainer>
            <p>{props.word}</p>
        </QuizContainer>
    )
    
    const loading = () => (
        <QuizContainer>
            <p>Loading...</p>
        </QuizContainer>
    )

    return (
        props.word ? loaded() : loading()
    )
}

export default QuizDisplay;
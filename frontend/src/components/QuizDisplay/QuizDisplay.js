import styled from "styled-components";

const QuizContainerDisplay = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    font-size: 1.25em;
    font-family: "Courier", monospace;
`

const QuizDisplay = (props) => {
    const loaded = () => (
        <QuizContainerDisplay>
            <p>{props.word}</p>
        </QuizContainerDisplay>
    )
    
    const loading = () => (
        <QuizContainerDisplay>
            <p>Click for a word</p>
        </QuizContainerDisplay>
    )

    return (
        props.word ? loaded() : loading()
    )
}

export default QuizDisplay;
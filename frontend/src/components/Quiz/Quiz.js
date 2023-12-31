import styled from "styled-components";
import { useEffect, useState } from "react";
import arrWords from "./words";
import QuizDisplay from "../QuizDisplay/QuizDisplay";
import Button from "../Button/Button";
import QuizSearch from "../QuizSearch/QuizSearch";

const QuizContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`;
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 2rem 5rem;
    place-items: stretch;
    justify-content: stretch;
    align-content: center;
    margin: 0 auto;
`;

const Quiz = (props) => {
    const [word, setWord] = useState("");
    const [display, setDisplay] = useState(false);

    const getWord = () => {
        const randomNum = Math.floor(Math.random() * arrWords.length);
        const randomWord = arrWords[randomNum];
        console.log(randomWord);
        setWord(randomWord);
    };

    useEffect(() => {
        if (word) {
            setDisplay(true);
        }
    }, [word]);

    const handleGetWord = (event) => {
        event.preventDefault();
        getWord();
        console.log(display)
    };

    return (
        <QuizContainer>
            <h1>Quiz</h1>
            <GridContainer>
                <Button onClick={handleGetWord}>Get Word</Button>
                <QuizDisplay word={word} />
                <QuizSearch word={word} />
            </GridContainer>
        </QuizContainer>
    );
};

export default Quiz;

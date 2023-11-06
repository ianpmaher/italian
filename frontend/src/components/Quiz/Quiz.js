import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import arrWords from "./words";
import QuizDisplay from "../QuizDisplay/QuizDisplay";
import Button from "../Button/Button";

const QuizContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
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
    };

    return (
        <QuizContainer>
            <h1>Quiz</h1>
            <Button onClick={handleGetWord}>Get Word</Button>
            {/* {display ? <QuizDisplay word={word} /> : null} */}
            <QuizDisplay word={word} />
        </QuizContainer>
    );
};

export default Quiz;

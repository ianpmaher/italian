import { useState } from "react";
import axios from "axios";
import Button from "../Button/Button";
import QuizWordDisplay from "../QuizWordDisplay/QuizWordDisplay";

const QuizSearch = ({word}) => {
    const [entry, setEntry] = useState("");
    // blur effect
    const [ isTranslated, setIsTranslated ] = useState(false);
    
    // so now, the blur state is set to true by default and needs to be clicked to be set to false
    const handleIsTranslated = (e) => {
        setIsTranslated(!isTranslated);
    };

    const fetchTranslateWord = async (event) => {
        event.preventDefault();
        handleIsTranslated();
        try {
            const response = await axios.get(`http://localhost:4001/english/quiz/${word}`, {
                headers: {
                    "Content-Type": "application/json"
                }            });
            console.log(response);
            setEntry(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Button onClick={fetchTranslateWord}>Translate</Button>
            <QuizWordDisplay content={entry} isTranslated={isTranslated} />
        </>
    );
}

export default QuizSearch;
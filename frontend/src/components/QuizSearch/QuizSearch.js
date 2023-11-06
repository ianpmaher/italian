import { useState } from "react";
import axios from "axios";
import Button from "../Button/Button";
import QuizWordDisplay from "../QuizWordDisplay/QuizWordDisplay";


const QuizSearch = ({word}) => {
    const [entry, setEntry] = useState("");
    const fetchTranslateWord = async (event) => {
        event.preventDefault();
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
            <QuizWordDisplay content={entry}/>
        </>
    );
}

export default QuizSearch;
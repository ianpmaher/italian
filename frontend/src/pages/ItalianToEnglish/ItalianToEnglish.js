import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Display from "../../components/Display/Display";
import Quiz from "../../components/Quiz/Quiz";

const PageContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
`;

const ItalianToEnglish = (props) => {
    const [word, setWord] = useState("");
    const [entry, setEntry] = useState("");

    const handleFormChange = (e) => {
        setEntry(e.target.value);
        setWord(e.target.value);
    };

    const fetchWord = async (event) => {
        event.preventDefault();
        try {
            // const response = await fetch(`${baseUrl}english-italian/entries/${word}`, {
            //     method: "GET",
            //     headers: {
            //         "accessKey": accessKey,
            //         "serverName": serverName,
            //         "searchWord": word
            //     }
            // });
            const response = await axios.get(`http://localhost:4001/italian/entry/${word}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(response);
            setEntry(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <PageContainer>
            <h1>ItalianToEnglish</h1>
            {/* entry search */}
            <Quiz />
            <form onChange={handleFormChange}>
                <input type="text" name="entry" onChange={handleFormChange} />
                <input type="submit" value="Submit" onClick={fetchWord} />
            </form>
            {/* <input type="text" onChange={(e) => setWord(e.target.value)} /> */}
            {/* <button onClick={fetchWord}>Search</button> */}
            <Display content={entry} />
        </PageContainer>
    );
};

export default ItalianToEnglish;

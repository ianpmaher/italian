import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Display from "../../components/Display/Display";
import Quiz from "../../components/Quiz/Quiz";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import SearchEnglishToItalian from "../../components/SearchEnglishToItalian/SearchEnglishToItalian";

const PageContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 5rem;
`
const FlexContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`

// const baseUrl = 'https://api.collinsdictionary.com/api/v1/dictionaries/';
// const serverName = "api.collinsdictionary.com";
// const accessKey = process.env.API_KEY_COLLINS_DICTIONARY;

const EnglishToItalian = (props) => {
    
    // API English to Italian
    const [word, setWord] = useState("");
    const [entry, setEntry] = useState("");
    const fetchWord = async () => {
        try {
            // const response = await fetch(`${baseUrl}english-italian/entries/${word}`, {
            //     method: "GET",
            //     headers: {
            //         "accessKey": accessKey,
            //         "serverName": serverName,
            //         "searchWord": word
            //     }
            // });
            const response = await axios.get(`http://localhost:4001/english/entry/${word}`, {
                headers: {
                    "Content-Type": "application/json"
                }            });
            console.log(response);
            setEntry(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleFetchWord = (event) => {
        event.preventDefault();
        fetchWord();
    }

    return (
        <PageContainer>
            <FlexContainer>
                {/* SEARCH WORD */}
                <SearchEnglishToItalian />
            </FlexContainer>
            <FlexContainer>
                {/* SEARCH ENTRY */}
                <h1>Entry: EnglishToItalian</h1>
                <InputField type="text" onChange={(e) => setWord(e.target.value)} />
                <Button onClick={handleFetchWord}>Search</Button>
                <Display content={entry} />
            </FlexContainer>
        </PageContainer>
    );
}

export default EnglishToItalian;
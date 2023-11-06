import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Display from "../Display/Display";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";

const PageContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`
const CoolForm = styled.form`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    min-width: 20rem;
`;

// const baseUrl = 'https://api.collinsdictionary.com/api/v1/dictionaries/';
// const serverName = "api.collinsdictionary.com";
// const accessKey = process.env.API_KEY_COLLINS_DICTIONARY;

const SearchItalianToEnglish = (props) => {
    
    // API English to Italian
    const [word, setWord] = useState("");
    const [entry, setEntry] = useState("");
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
            const response = await axios.get(`http://localhost:4001/italian/search/${word}`, {
                headers: {
                    "Content-Type": "application/json"
                }            });
            console.log(response);
            setEntry(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleFormChange = (event) => {
        setEntry(event.target.value);
        setWord(event.target.value);
    }

    return (
        <PageContainer>
            <h1>Search Italian to English</h1>
            {/* entry search */}
            <CoolForm onChange={handleFormChange}>
                <InputField type="text" name="entry" onChange={(e) => setWord(e.target.value)} />
                <Button onClick={fetchWord}>Search</Button>
            </CoolForm>
            <Display content={entry} />
        </PageContainer>
    );
}

export default SearchItalianToEnglish;
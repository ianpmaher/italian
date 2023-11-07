import { useState} from "react";
import axios from "axios";
import styled from "styled-components";
import Display from "../../components/Display/Display";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import SearchEnglishToItalian from "../../components/SearchEnglishToItalian/SearchEnglishToItalian";

const PageContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
`
const FlexContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
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

const EnglishToItalian = (props) => {
    
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

    const handleFormChange = (e) => {
        setEntry(e.target.value);
        setWord(e.target.value);
    }

    return (
        <PageContainer>
            <FlexContainer>
                {/* SEARCH WORD */}
                <SearchEnglishToItalian />
            </FlexContainer>
            <FlexContainer>
                {/* SEARCH ENTRY */}
                <h1>Entry: English to Italian</h1>
                <CoolForm onChange={handleFormChange}>
                    <InputField type="text" name="entry" onChange={(e) => setEntry(e.target.value)} />
                    <Button onClick={fetchWord}>Search</Button>
                </CoolForm>
                <Display content={entry} />
            </FlexContainer>
        </PageContainer>
    );
}

export default EnglishToItalian;
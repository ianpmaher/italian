import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Display from "../../components/Display/Display";

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
            const response = await axios.get(`http://localhost:4001/english/${word}`, {
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
        <div>
            <h1>EnglishToItalian</h1>
            <input type="text" onChange={(e) => setWord(e.target.value)} />
            <button onClick={fetchWord}>Search</button>
            <Display content={entry} />
        </div>
    );
}

export default EnglishToItalian;
// BASE URL:
// https://api.collinsdictionary.com/api/v1

import axios from "axios";

const baseURL = "https://api.collinsdictionary.com/api/v1";

// English to Italian:
export async function FetchCollinsAPI(word) {
    try {
        const response = await axios.get(`${baseURL}/english/search/${word}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "accessKey": process.env.API_KEY_COLLINS_DICTIONARY,
            },
        });

        return response.data;
    } catch (error) {
        console.error(`Error fetching data from Collins API: ${error}`);
    }
}
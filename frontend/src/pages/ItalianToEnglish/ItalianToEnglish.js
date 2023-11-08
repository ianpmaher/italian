// import { useState } from "react";
// import axios from "axios";
import styled from "styled-components";
// import Display from "../../components/Display/Display";
// import InputField from "../../components/InputField/InputField";
// import Button from "../../components/Button/Button";
import SearchItalianToEnglish from "../../components/SearchItalianToEnglish/SearchItalianToEnglish";

const PageContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 3rem;
`
const FlexContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`
// const CoolForm = styled.form`
//     display: flex;
//     flex-flow: column wrap;
//     justify-content: center;
//     align-items: center;
//     min-width: 20rem;
// `;

const ItalianToEnglish = (props) => {
    // const [word, setWord] = useState("");
    // const [entry, setEntry] = useState("");

    // const handleFormChange = (e) => {
    //     setEntry(e.target.value);
    //     setWord(e.target.value);
    // };

    // const fetchWord = async (event) => {
    //     event.preventDefault();
    //     try {
            
    //         // local
    //         // ================================
    //         // const response = await axios.get(`http://localhost:4001/italian/entry/${word}`, {
    //         //     headers: {
    //         //         "Content-Type": "application/json",
    //         //     },
    //         // });
    //         const response = await axios.get(`https://ancient-river-11177-d542b39e28a6.herokuapp.com/italian/entry/${word}`, {
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         });
    //         console.log(response);
    //         setEntry(response.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    return (
        <PageContainer>
            <FlexContainer>
                <SearchItalianToEnglish />
            </FlexContainer>
            {/* <FlexContainer>
                <h1>Entry: Italian to English</h1>
                <CoolForm onChange={handleFormChange}>
                    <InputField type="text" name="entry" onChange={handleFormChange} />
                    <Button onClick={fetchWord}>Search</Button> 
                </CoolForm>
                <Display content={entry} />
            </FlexContainer> */}
        </PageContainer>
    );
};

export default ItalianToEnglish;

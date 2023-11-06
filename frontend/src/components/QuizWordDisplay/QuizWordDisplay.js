import { useState } from "react";
import styled from "styled-components";
import "./QuizWordDisplay.css";
import Skeleton from "@mui/material/Skeleton";

const DisplayContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25em;
    font-family: "Courier", monospace;
`;

const Display = ({content, isTranslated}) => {
    
    if (content && isTranslated) {
        return (
            <DisplayContainer>
                {/* Ternary Operator = will set blur CSS class style if user clicks on Button in QuizSearch.js */}
                <div dangerouslySetInnerHTML={{ __html: content} } />
                    
            </DisplayContainer>
        );
    } else {
        return (
            <DisplayContainer>
                <Skeleton variant="rounded" animation="wave" width={100} height={40} />
            </DisplayContainer>
        );
    }
}

export default Display;
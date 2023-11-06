import styled from "styled-components";
import Skeleton from "@mui/material/Skeleton";

const DisplayContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25em;
    font-family: "Courier", monospace;
`;

const Display = ({content}) => {

    if (content) {
        return (
            <DisplayContainer>
                <div dangerouslySetInnerHTML={{ __html: content}} />
            </DisplayContainer>
        );
    } else {
        return (
            <DisplayContainer>
                <Skeleton variant="rounded" animation="wave" width={80} height={30} />
            </DisplayContainer>
        );
    }
}

export default Display;
import styled from "styled-components";

const DisplayContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
    min-width: 20rem;
    max-width: 30rem;
    padding: 1rem;
    height: fit-content;
    border: 1px solid black;
`;

const Display = ({content}) => {
    return (
        <DisplayContainer>
            <div dangerouslySetInnerHTML={{ __html: content}} />
        </DisplayContainer>
    );
}

export default Display;
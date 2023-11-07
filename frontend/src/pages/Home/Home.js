import styled from "styled-components";

const HeaderText = styled.h1`
    font-size: 1.2em;
`;
const AppContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
`;
const StyledUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
`;

const Home = (props) => {
    return (
        <AppContainer>
            <HeaderText>thank you Collins Dictionary </HeaderText>

            <StyledUl>
                <li>https://api.collinsdictionary.com/apidemo/</li>
                <li>https://npm.io/package/collins</li>
            </StyledUl>
        </AppContainer>
    );
};

export default Home;

import styled from "styled-components";
import Header from "../../components/Header/Header";
import Dictionary from "../../components/Dictionary/Dictionary";

const HeaderText = styled.h1`
    font-size: 1.2em;
`;
const AppContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
`;

const Home = (props) => {
    return (
        <AppContainer>
        <Header />
        <main>
            <button type="" onClick={Dictionary}></button>
        </main>
        <footer>
            <HeaderText>Made with 💜 by Ian</HeaderText>
        </footer>
        </AppContainer>
    );
};

export default Home;
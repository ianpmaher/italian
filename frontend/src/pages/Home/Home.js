import styled from "styled-components";

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
            <main>
                <HeaderText>Welcome to my website!</HeaderText>
                <HeaderText>This is a single page that can be scrolled down to get more data.</HeaderText>
                <HeaderText>
                    Edit <code>src/App.js</code> and save to reload.
                </HeaderText>
            </main>
            <footer>
                <HeaderText>Made with 💜 by Ian</HeaderText>
            </footer>
        </AppContainer>
    );
};

export default Home;
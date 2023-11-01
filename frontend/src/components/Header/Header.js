import styled from "styled-components";
import Nav from "../Nav/Nav";
const HeaderText = styled.h1`
    font-size: 1.2em;
`;

const Header = (props) => {
    return (
        <div>
            <HeaderText>English to Italian</HeaderText>
            <Nav />
        </div>
    );
};

export default Header;

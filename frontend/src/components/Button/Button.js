import styled from "styled-components";

const Button = styled.button`
    border: 2px solid green;
    border-radius: 20px;
    font-size: 1.2rem;
    font-weight: bold;
    max-width: 10rem;
    padding: 0.5rem;
    margin: 0.25rem;
    background-color: whitesmoke;
    color: black;
    transition: 0.3s all ease-in-out;
    &:hover {
        background-color: green;
        color: whitesmoke;
        border-color: black;
    }
    &:active {
        outline: none;
        border-color: skyblue;
        box-shadow: 0 1px 0 0px #26A69B;
    }
`

export default Button;
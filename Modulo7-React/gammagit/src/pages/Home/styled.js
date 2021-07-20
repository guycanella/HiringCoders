import styled from "styled-components";

export const Input = styled.input`
    border: 1px solid #ddd;
    border-radius: .25em 0 0 .25em;
    height: 3em;
    padding: 0 .5em;

    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    height: 3em;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25em .25em 0;
    cursor: pointer;

    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ErrorMsg = styled.span`
    display: block;
    font-size: 1.2em;
    color: red;
    margin-left: 2%;
`;
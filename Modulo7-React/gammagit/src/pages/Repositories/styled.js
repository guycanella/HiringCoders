import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 2em;
    font-family: sans-serif;
    color: #333;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
`;

export const ListItem = styled.li`
    margin: .5em 0;
    background: #000;
    color: #fff;
    padding: .5em;
`;

export const LinkHome = styled(Link)`
    display: block;
    width: 4em;
    text-align: center;
    background: #000;
    padding: .5em 0;
    margin: 2em auto;
    color: #fff;
`;
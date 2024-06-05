import styled from 'styled-components';

export const NavStyle = styled.nav`
    background: linear-gradient(to bottom, #D2B48C, #CD853F); 
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    height: 50px;
    padding-left: 100px;
    padding-right: 90px; 
    padding-bottom: 5px;
`;

export const UlStyle = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(6, auto);
    justify-self: end;
    gap: 25px;
`;

export const AStyle = styled.a`
    text-decoration: none;
    color: #000;
    font-size: 0.9rem;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.3s ease-out;

    &:hover {
        color: #8B4513; 
    }
`;
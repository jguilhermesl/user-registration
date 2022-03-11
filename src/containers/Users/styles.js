import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`
        background: linear-gradient(to right, #264ECA, #244BC5); 
        height: 100vh;
        width: 100vw;
`

export const Imagem = styled.img`
`

export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 6.5rem;
`

export const H1 = styled.h1`
    color: #fff;
    margin-top: 1rem;
    font-weight: 400;
    font-size: 1.3rem;
`

export const Button = styled(Link)`
    width: 270px;
    height: 40px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    background: #fff;
    text-transform: uppercase;
    font-weight: 600;
    color: #264ECA;
    border: none;
    border-radius: 5px;
    margin-top: 30px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    
    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }

`

export const User = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-around; 
    width: 270px;
    height: 40px;

    color: white;
    text-transform: uppercase;
    border: 1px solid #fff;
    background: transparent;
    border-radius: 5px;
    margin: 10px 0;
    outline: none;

    button {
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        float: right;

    }
`

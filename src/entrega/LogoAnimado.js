import { keyframes } from "styled-components";
import styled from "styled-components";
import logo from '../logo.svg';
import '../App.css';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const ContenedorAnimado = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
`;



export default function LogoAnimado(){

    return(
        <ContenedorAnimado>
            <img src={logo} className="App-logo" alt="logo"/>
        </ContenedorAnimado>
    )
}

//        <img src={logo}  />

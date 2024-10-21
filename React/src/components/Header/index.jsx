import React from "react";
import LogoImg from '../../imagens/fundo.png'
import Usat from '../../imagens/USAT.png'
import { Container, Logo, Logo2, Menu } from "./styles";

const Header = ( ) => { // estou importando o Header que está na pasto components
    return (
        <Container> {/* comentarios em jsx tem essa sintaxe */}
            <Logo> {/* dentro de styles.js (/components/Header) defini esses elementos e estou apenas aplicando aqui*/}
                <img src={Usat} alt="" />
            </Logo>
            <Logo2>
                <img src={LogoImg} alt="" />
            </Logo2>
            <Menu>
                <ul>
                    <li><span> Cadastro/login </span></li>
                    <li><span> Home </span></li>
                </ul>
            </Menu>
        </Container>
    )
}

export default Header;
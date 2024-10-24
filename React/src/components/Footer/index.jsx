import React, { Fragment } from "react";
import { Container, Copy, Item } from "./styles";
import Logo from '../../imagens/logo.png';
import Casan from '../../imagens/Casan.png';
import Fapesc from '../../imagens/Fapesc.png';
import UFSC from '../../imagens/UFSC.png';
import { FaFacebook, FaGooglePlus, FaInstagram } from "react-icons/fa"

const Footer = () => {
    return (
        <Fragment>
            <Container>
                <Item>
                    <img src={Logo} alt=""/>
                    <p>Entre em contato com a gente!</p>
                    <nav>
                    <li><span><FaFacebook size={32}/></span></li>  
                    <li><span><FaInstagram size={32}/></span></li>  
                    <li><span><FaGooglePlus size={32}/></span></li>  
                    </nav>
                </Item>
                <Item>
                    <h3>Realização e apoio</h3>
                    <ul>
                        <img src={Fapesc} alt=""/>
                        <img src={Casan} alt=""/>
                        <img src={UFSC} alt=""/>
                    </ul>
                </Item>
            </Container>
            <Copy>
                <p>© Todos os direitos reservados</p>
                <ul>
                    <li><span>Termos de Uso</span></li>
                    <li><span>Politicas de Privacidade</span></li>
                    <li><span>Politicas de Cookie</span></li>
                </ul>
            </Copy>
        </Fragment>
    )
}

export default Footer;
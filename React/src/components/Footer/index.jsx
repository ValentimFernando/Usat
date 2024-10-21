import React from "react";
import { Container, Item } from "./styles";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

const Footer = ( ) => {
    return (
        <Container>
            <Item>
                <img src="" alt=""/>
                <p>textinho que arrumo depois</p>
                <nav>
                  <li><span><FaFacebook size={32}/></span></li>  
                  <li><span><FaInstagram size={32}/></span></li>  
                  <li><span><FaWhatsapp size={32}/></span></li>  
                </nav>
            </Item>
        </Container>
    )
}

export default Footer;
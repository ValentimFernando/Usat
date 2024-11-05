import React from "react";
import Usat from '../../imagens/USAT.png'
import { Container, Logo, Menu } from "./styles";
import { Link } from "react-router-dom";

const Header = ( ) => { 
    return (
        <Container> 
            <Logo> 
                <Link to='/'><img src={Usat} alt="" /></Link>
            </Logo>
            <Menu>
                <ul>
                    <li><Link to='/'><span> Home </span></Link></li>
                    <li><Link to='/login'><span> Cadastro/login </span></Link></li>
                    <li><Link to='/condutaAmbiental'><span> Condutas </span></Link></li>
                    <li><Link to='/condutaSocial'><span> Condutas2 </span></Link></li>
                    <li><Link to='/condutaEconomico'><span> Condutas3 </span></Link></li>
                    <li><Link to='/desempenho'><span> Desempenho </span></Link></li>
                </ul>
            </Menu>
        </Container>
    )
}

export default Header;
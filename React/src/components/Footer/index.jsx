import React, { Fragment } from "react";
import { Copy } from "./styles";

const Footer = () => {
    return (
        <Fragment>
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
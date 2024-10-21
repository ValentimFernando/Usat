import styled from "styled-components";

export const Container = styled.div`
    padding: 220px 150px; /* tamanho da imagem e padding do texto */
    position: relative; /* Necessário para posicionar ::before corretamente */
    background-size: cover; 
    background-position: center;
    background-image: url('https://images.unsplash.com/photo-1579288626050-a94bd5178925?q=80&w=1377&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    
    /* Pseudo-elemento para criar a sombra */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* Sombra sobre a imagem */
        z-index: 1; /* Camada abaixo do texto */
    }
`;

export const Text = styled.div`
    position: relative;
    z-index: 2; /* Texto ficará acima da sombra e da imagem */
    
    width: 55%;
    
    h2 {
        color: var(--white);
        font-size: 62px;
        font-weight: 700;
        margin-bottom: 35px;
    }

    p {
        color: var(--white);
        margin-bottom: 25px;
    }

    span {
        background-color: var(--green);
        border: 0;
        color: var(--white);
        font-size: 14px;
        font-weight: 600;
        padding: 12px 120px;
        line-height: 24px;
        border-radius: 3px;
        cursor: pointer;
    }
`;

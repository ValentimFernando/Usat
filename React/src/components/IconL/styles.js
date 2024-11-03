import styled from "styled-components";

export const Container = styled.div`
    width: 150px;
    height: 150px;
    padding: 10px;
    background-color: ${props => props.cor || 'var(--white)'};
    color: var(--white);
    display: flex;
    flex-direction: column;
    border-radius: 20px;         
    align-items: flex-start;       
    justify-content: space-between;
      
`   

export const Label = styled.div`
    color: var(--white);
    text-align: center;
    font-family: Inter;
    font-size: ${props => props.tamanho || 32}px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    `  
    export const Centralizado = styled.div`
    display: flex; 
    width: 100%;
    align-items: center;         
    justify-content: center;
    `  
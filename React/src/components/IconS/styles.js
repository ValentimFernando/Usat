import styled from "styled-components";

export const Container = styled.div`
    width: 65px;
    height: 65px;
    padding: 10px;
    background-color: ${props => props.cor || 'var(--white)'};
    color: var(--white);
    border-radius: 28.482px;
    display: flex;             
    align-items: center;         
    justify-content: center;
      
`   
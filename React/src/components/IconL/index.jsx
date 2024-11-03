import React from 'react';
import { Container, Label, Centralizado } from './styles'; // Certifique-se de que o caminho está correto


const Icon = ({ cor, imagem, numero, Titulo, tamanho }) => {
  return (
    <Container cor={cor}>
      <Label >{numero}</Label>

      <Label tamanho={tamanho}>{Titulo}</Label>

      <Centralizado>
        <img src={imagem} alt="icon"style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
        </Centralizado>
    </Container>
  );
};

export default Icon;
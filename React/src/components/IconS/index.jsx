import React from 'react';
import { Container } from './styles'; // Certifique-se de que o caminho está correto

const Icon = ({ cor, imagem}) => {
  return (
    <Container cor={cor}>
      <img src={imagem} alt="icon" style={{ width: 'tamanho px', height: '40px' }} />
    </Container>
  );
};

export default Icon;
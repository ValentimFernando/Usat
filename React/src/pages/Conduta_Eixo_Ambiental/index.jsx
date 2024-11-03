import React from 'react'
import IconS from "../../components/IconS";
import IconL from "../../components/IconL";
import Condutas_Imagem from '../../imagens/Condutas_Imagem.png';
import Eixo_Ambiental from '../../imagens/Eixo_Ambiental.svg';
import Condutas_Sítio_Local_e_desenvolvimento_sustentável from '../../imagens/Condutas_Sítio_Local_e_desenvolvimento_sustentável.svg';
import Condutas_Água from '../../imagens/Condutas_Água.svg';
import Condutas_Consumo_de_materiais from '../../imagens/Condutas_Consumo_de_materiais.svg';
import Condutas_Energia from '../../imagens/Condutas_Energia.svg';
import Condutas_Qualidade_ambiental_interior from '../../imagens/Condutas_Qualidade_ambiental_interior.svg';
import { Container, ContainerEixo, ContainerTitulo, Horizontal, Label, ContainerIcones} from './styles';

const Icones = [
  { cor: "var(--yellow)", tamanho: '12', numero: '1', Titulo: "SÍTIO (LOCAL) E DESENVOLVIMENTO SUSTENTÁVEL", imagem: Condutas_Sítio_Local_e_desenvolvimento_sustentável },
  { cor: "var(--blue)", tamanho: '20', numero: '2', Titulo: "ÁGUA", imagem: Condutas_Água },
  { cor: "var(--brown)", tamanho: '10', numero: '3', Titulo: "CONSUMO DE MATERIAIS, RECURSOS E ECONOMIA CIRCULAR", imagem: Condutas_Consumo_de_materiais },
  { cor: "var(--orange)", tamanho: '20', numero: '4', Titulo: "ENERGIA", imagem: Condutas_Energia },
  { cor: "var(--moss-green)", tamanho: '15', numero: '5', Titulo: "QUALIDADE AMBIENTAL INTERIOR", imagem: Condutas_Qualidade_ambiental_interior }
];


const Conduta = () => {
    return (
      <Container>
          <ContainerTitulo>
              <Label cor="var(--white)" align="center">Condutas</Label>
          </ContainerTitulo>

          <Horizontal>

            <ContainerEixo>
              <Horizontal>
              <IconS cor="var(--green)" imagem={Eixo_Ambiental} borda="28.482"/>
              <Label cor="var(--moss-green)" tamanho="36" align="left">EIXO AMBIENTAL</Label>
              </Horizontal>
              <Label cor="var(gray)" tamanho="20" align="left"> Resumo do texto</Label>
              <div style={{ position: 'absolute', bottom: '20px', left: '20%' }}>
              <img src={Condutas_Imagem}  style={{ width: '80%', maxWidth: '300px' }} />
              </div>
            </ContainerEixo>

            <ContainerIcones>
            {Icones.map((icon, index) => (
            <div key={index}>
                <IconL 
                    cor={icon.cor} 
                    tamanho={icon.tamanho} 
                    numero={icon.numero} 
                    Titulo={icon.Titulo} 
                    imagem={icon.imagem} 
                />
            </div>
          ))}
        {Icones.length % 4 !== 0 && <div style={{ flex: '0 0 20%' }}></div>} 
            </ContainerIcones>

          </Horizontal>
      </Container>
    )
  }


export default Conduta;
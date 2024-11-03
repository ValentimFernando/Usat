import React from 'react'
import IconS from "../../components/IconS";
import IconL from "../../components/IconL";
import Condutas_Imagem from '../../imagens/Condutas_Imagem.png';
import Eixo_Sociocultural from '../../imagens/Eixo_Sociocultural.svg';
import Condutas_Social from '../../imagens/Condutas_Social.svg';
import Condutas_Qualidade_de_espaço from '../../imagens/Condutas_Qualidade_de_espaço.svg';
import Adaptação_à_alterações_climáticas from '../../imagens/Condutas_Adpatação_à_alterações_climáticas.svg';
import { Container, ContainerEixo, ContainerTitulo, Horizontal, Label, ContainerIcones} from './styles';

const Icones = [
  { cor: "#AE60C2", tamanho: '20', numero: '6', Titulo: "SOCIAL", imagem: Condutas_Social },
  { cor: "#54C0A5", tamanho: '15', numero: '7', Titulo: "QUALIDADE DO ESPAÇO", imagem: Condutas_Qualidade_de_espaço },
  { cor: "#FFAF22", tamanho: '15', numero: '8', Titulo: "ADAPTAÇÃO ÀS ALTERAÇÕES CLIMÁTICAS", imagem: Adaptação_à_alterações_climáticas },
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
              <IconS cor="#E2AC3E" imagem={Eixo_Sociocultural} borda="28.482"/>
              <Label cor="var(--moss-green)" tamanho="36" align="left">EIXO SOCIAL</Label>
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
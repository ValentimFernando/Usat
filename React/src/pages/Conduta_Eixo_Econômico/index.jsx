import React from 'react'
import IconS from "../../components/IconS";
import IconL from "../../components/IconL";
import Condutas_Imagem from '../../imagens/Condutas_Imagem.png';
import Eixo_Econômico from '../../imagens/Eixo_Econômico.svg';
import Condutas_Custos_e_inovações from '../../imagens/Condutas_Custos_e_inovações.svg';
import { Container, ContainerEixo, ContainerTitulo, Horizontal, Label, ContainerIcones} from './styles';



const Icones = [
  { cor: "#FFAF22", tamanho: '15', numero: '9', Titulo: "CUSTOS E INOVAÇÃO", imagem: Condutas_Custos_e_inovações },
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
              <IconS cor="#54C0A5" imagem={Eixo_Econômico} borda="28.482"/>
              <Label cor="var(--moss-green)" tamanho="36" align="left">EIXO ECONÔMICO</Label>
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
            </ContainerIcones>

          </Horizontal>
      </Container>
    )
  }


export default Conduta;
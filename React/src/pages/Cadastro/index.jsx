import React from 'react'
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, ContainerForm, Form, Label } from './styles';

const Cadastro = () => {
  return (
    <Container>
        <h2>Crie sua conta</h2>
        <p>Cadastre-se para acessar a plataforma!</p>
        <ContainerForm>
            <Form>
                <Label>Nome de usuário</Label>
                <Input type='text' placeholder='Crie seu nome' />
                <Label>CEP</Label>
                <Input type='text' placeholder='Informe seu CEP' />
                <Label>E-mail</Label>
                <Input type='text' placeholder='Informe seu E-mail'/>
                <Label>Senha</Label>
                <Input type='text' placeholder='Informe sua Senha' />
                <Label> Confirmar senha</Label>
                <Input type='text' placeholder='Confirme sua Senha'/>
                <Button>Fazer Cadastro</Button>
            </Form>
        </ContainerForm>
    </Container>
  )
}

export default Cadastro;
import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 100px 150px;
    background-color: var(--white);
`

export const Item = styled.div`
    img{
        width: 280px;
    }
    h3{
        margin-bottom: 10px;
        margin-left: 400px;
        text-align: center;
    }
    ul{
        justify-content: space-between;
        display: flex;
        img{
            padding: 12px 0;
            margin-right: 00px;
            margin-left: 100px;
            width:100%;
            max-width: 180px;
            height: auto; /* Mantém a proporção da imagem */
        }
    }
    nav{
        display: flex;
        margin-top: 15px;
        li{
            span{
                margin-right: 30px;
            }
        }
    }
`
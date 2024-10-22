import styled from "styled-components";

// Export do container da página de login
export const Container = styled.div`
  height: 96px;
  padding: 25px 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  background-color: var(--white);
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 160px; /* ajuste o tamanho da logo */
  }
`;

export const Logo2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 400px; /* ajuste o tamanho da logo */
  }
`

export const Menu = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    gap: 20px;
  }

  li {
    border: 1px solid var(--gray);
    border-radius: 10px;
    padding: 10px;
    font-size: 28px;
    color: #000;

    span {
      cursor: pointer;

      &:hover {
        text-decoration: underline; /* Apenas o span será sublinhado ao passar o mouse */
      }
    }
  }
`;


import styled, { createGlobalStyle, keyframes } from "styled-components";

const corPrimaria = "#ff3c3c";
const corFundo = "#0c0c0c";
const corTexto = "#fff";
const corTextoSecundaria = "#aaa";

// @property precisa ser global (não pode ficar dentro de um seletor aninhado)
export const GlobalStyleBorda = createGlobalStyle`
  @property --angulo {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }
`;

const girarBorda = keyframes`
  to { --angulo: 360deg; }
`;

export const ContainerMestre = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: ${corFundo};
  color: ${corTexto};
  line-height: 1.6;
  min-height: 100vh;
`;

export const Header = styled.div`
  padding: 20px;
  background: #000;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  .title {
    color: ${corPrimaria};
    font-size: 1.5rem;
    margin: 0;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  .menu a {
    text-decoration: none;
    color: ${corTexto};
    font-weight: 500;
    transition: color 0.3s ease;
    cursor: pointer;
  }

  .menu a:hover {
    color: ${corPrimaria};
  }

  .menu a:focus-visible {
    outline: 2px solid ${corPrimaria};
    outline-offset: 3px;
    border-radius: 4px;
  }
`;

export const ContainerTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #1a1a1a;
  border-radius: 12px;
  padding: 20px;
  flex-wrap: wrap;
  gap: 40px;
  box-shadow: 0 0 10px rgba(255, 60, 60, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: -20%;
    background:
      radial-gradient(circle at 25% 20%, rgba(255, 60, 60, 0.18), transparent 55%),
      radial-gradient(circle at 80% 75%, rgba(255, 60, 60, 0.10), transparent 50%);
    filter: blur(50px);
    pointer-events: none;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const CaixaTexto = styled.div`
  position: relative;
  isolation: isolate;
  max-width: 400px;
  background: #222;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(255, 60, 60, 0.3);

  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease,
              box-shadow 0.3s ease, transform 0.3s ease;

  &.visivel {
    opacity: 1;
    transform: translateY(0);
    transition-delay: ${({ $delay }) => $delay || "0s"};
  }

  cursor: default;

  &:hover {
    box-shadow: 0 10px 20px rgba(255, 60, 60, 0.5);
    transform: translateY(-5px);
    cursor: pointer;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 12px;
    padding: 2px;
    background: conic-gradient(
      from var(--angulo, 0deg),
      transparent,
      ${corPrimaria},
      transparent 30%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
    animation: ${girarBorda} 3s linear infinite;
    animation-play-state: paused;
    z-index: -1;
  }

  &:hover::before {
    opacity: 1;
    animation-play-state: running;
  }

  h2 {
    font-size: 22px;
    color: ${corTexto};
    margin: 0 0 10px;
    text-align: center;
  }

  h3 {
    font-size: 20px;
    margin: 10px 0 20px;
    color: ${corPrimaria};
  }

  p {
    font-size: 13px;
    color: ${corTexto};
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }

  .titulo {
    margin-bottom: 15px;
  }

  .imagem {
    margin-bottom: 15px;
    display: flex;
    justify-content: center;

    img {
      max-width: 80%;
      border-radius: 15px;
      border: 3px solid ${corPrimaria};
      box-shadow: 0 0 8px rgba(255, 60, 60, 0.7);
      transition: transform 0.3s;
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .tecnologias {
    margin-bottom: 15px;

    h3 {
      margin-bottom: 8px;
    }

    img {
      width: 28px;
      margin-right: 5px;
      filter: drop-shadow(0 0 1px #000);
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    }
  }

  .descricao {
    margin-bottom: 15px;
  }

  .main {
    margin-left: clamp(0px, 4vw, 32px);
  }

  .botoes {
    display: flex;
    gap: 12px;

    a.btn {
      padding: 10px 20px;
      border-radius: 8px;
      color: ${corTexto};
      font-weight: bold;
      text-decoration: none;
      transition: transform 0.3s, background 0.3s;
      cursor: pointer;

      &:focus-visible {
        outline: 2px solid ${corTexto};
        outline-offset: 3px;
      }

      &.github {
        background: #333;
      }

      &.github:hover {
        background: #555;
      }

      &.linkedin {
        background: #0a66c2;
      }

      &.linkedin:hover {
        background: #004182;
      }
    }
  }

  a.btn.demo {
    background: ${corPrimaria};
  }

  a.btn.demo:hover {
    background: #ff1c1c;
  }
`;

export const Skills = styled.div`
  img {
    width: 34px;
    margin-right: 3px;
    transition: transform 0.3s;
  }

  img:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const ButtonsDeRedes = styled.div`
  margin-top: 20px;

  .btn {
    display: inline-block;
    padding: 10px 20px;
    border-radius: 8px;
    text-decoration: none;
    color: ${corTexto};
    font-weight: bold;
    transition: transform 0.3s, background 0.3s;
    margin-right: 10px;
    cursor: pointer;

    &:focus-visible {
      outline: 2px solid ${corTexto};
      outline-offset: 3px;
    }
  }

  .linkedin {
    background: #0a66c2;
  }

  .github {
    background: #333;
  }

  .whatsapp {
    background: #25D366;
  }

  .btn:hover {
    transform: scale(1.05);
  }
`;

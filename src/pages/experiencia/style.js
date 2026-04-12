import styled, { keyframes } from "styled-components";

const corPrimaria = "#ff3c3c";
const corFundo = "#0c0c0c";
const corTexto = "#fff";
const corTextoSecundaria = "#aaa";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ContainerMestre = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: ${corFundo};
  color: ${corTexto};
  line-height: 1.6;
  min-height: 100vh;

  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
  }
`;

export const Header = styled.div`
  padding: 20px;
  background: #000;
`;

export const Container = styled.div`
  .title {
    color: ${corPrimaria};
    font-size: 1.5rem;
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
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-wrap: wrap;
  gap: 20px;

  & > * {
    animation: ${fadeInUp} 0.8s ease forwards;
    opacity: 0;
  }

  & > *:nth-child(1) { animation-delay: 0.1s; }
  & > *:nth-child(2) { animation-delay: 0.3s; }
  & > *:nth-child(3) { animation-delay: 0.5s; }
  & > *:nth-child(4) { animation-delay: 0.7s; }
`;

export const CaixaTexto = styled.div`
  max-width: 500px;
  margin-right: 40px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
    text-align: center;
  }

  h2 {
    font-size: 2.5rem;
    color: ${corTexto};
  }

  h2 span {
    color: ${corPrimaria};
  }

  h3 {
    font-size: 1.5rem;
    margin: 10px 0 20px;
    color: ${corPrimaria};
  }

  p {
    font-size: 16px;
    color: ${corTexto};
    line-height: 1.7;
    margin-bottom: 12px;
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  img {
    width: 34px;
    opacity: 0;
    animation: ${fadeInUp} 0.6s ease forwards;
    transition: transform 0.3s;
    cursor: pointer;
  }

  img:nth-child(1) { animation-delay: 0.1s; }
  img:nth-child(2) { animation-delay: 0.2s; }
  img:nth-child(3) { animation-delay: 0.3s; }
  img:nth-child(4) { animation-delay: 0.4s; }
  img:nth-child(5) { animation-delay: 0.5s; }
  img:nth-child(6) { animation-delay: 0.6s; }

  img:hover {
    transform: scale(1.1);
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
    transition: transform 0.3s, filter 0.3s;
    margin-right: 10px;
    cursor: pointer;
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
    filter: brightness(1.1);
  }
`;

export const FotoPerfil = styled.div`
  img {
    width: 200px;
    border-radius: 15px;
    border: 3px solid ${corPrimaria};
    transition: transform 0.3s;
    cursor: pointer;
  }

  img:hover {
    transform: scale(1.05);
  }
`;

export const TitleDeBaixo = styled.div`
  text-align: center;
  padding: 10px;
  margin-top: 42px;
  background: #000;
  font-size: 14px;
  color: ${corTextoSecundaria};
`;

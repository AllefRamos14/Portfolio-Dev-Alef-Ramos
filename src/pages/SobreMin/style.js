import styled, { keyframes } from "styled-components";

const cores = {
  fundo: "#0c0c0c",
  texto: "#fff",
  destaque: "#ff3c3c",
  textoSecundario: "#aaa",
  linkedin: "#0a66c2",
  github: "#333",
  whatsapp: "#25D366",
  fundoBaixo: "#000",
};

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

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const ContainerMestre = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: #0c0c0c;
  color: #fff;
  line-height: 1.6;
  min-height: 100vh;
`;

export const Header = styled.div`
  padding: 10px 30px;
  background: #000;
`;

export const Container = styled.div`
  .title {
    color: #ff3c3c;
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
    color: #fff;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .menu a:hover {
    color: #ff3c3c;
  }

  .menu a:focus-visible {
    outline: 2px solid #ff3c3c;
    outline-offset: 3px;
    border-radius: 4px;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  flex-wrap: wrap;
  min-height: 75vh;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    img {
      margin-top: 20px;
    }
  }
`;

export const CaixaTexto = styled.div`
  max-width: 600px;
  margin-right: 40px;
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease forwards;

  /* efeito de digitação: largura e passos calculados no componente,
     via props, para acompanhar o tamanho real do texto */
  h2 {
    font-size: 2.3rem;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid #ff3c3c;
    width: 0;
    max-width: ${({ $chars }) => $chars || 20}ch;
    animation: digitar 1.8s steps(${({ $chars }) => $chars || 20}, end) forwards,
               piscarCursor 0.75s step-end infinite;
    animation-delay: 0.2s, 2s;
    margin-bottom: 14px;
  }

  h2 span {
    color: #ff3c3c;
  }

  .UserName {
    color: #ff3c3c;
  }

  p {
    font-size: 16px;
    color: #fff;
    margin-bottom: 16px;
    opacity: 0;
    animation: ${fadeInUp} 0.7s ease forwards;
  }

  p:nth-of-type(1) { animation-delay: 1.9s; }
  p:nth-of-type(2) { animation-delay: 2.1s; }
  p:nth-of-type(3) { animation-delay: 2.3s; }

  @keyframes digitar {
    from { width: 0; }
    to { width: ${({ $chars }) => $chars || 20}ch; }
  }

  @keyframes piscarCursor {
    50% { border-right-color: transparent; }
  }

  @media (max-width: 768px) {
    margin-right: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    h2 {
      animation: none;
      width: ${({ $chars }) => $chars || 20}ch;
      border-right-color: transparent;
    }

    p {
      animation: none;
      opacity: 1;
    }
  }
`;

export const Skills = styled.div`
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  img {
    width: 38px;
    padding: 6px;
    background: #111;
    border-radius: 10px;
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
    opacity: 0;
    animation: ${fadeIn} 0.6s ease forwards;
  }

  img:hover,
  img:focus-visible {
    transform: scale(1.15);
    box-shadow: 0 0 10px ${cores.destaque}55;
  }

  img:focus-visible {
    outline: 2px solid ${cores.destaque};
    outline-offset: 3px;
  }

  img:nth-child(1) { animation-delay: 2.5s; }
  img:nth-child(2) { animation-delay: 2.58s; }
  img:nth-child(3) { animation-delay: 2.66s; }
  img:nth-child(4) { animation-delay: 2.74s; }
  img:nth-child(5) { animation-delay: 2.82s; }
  img:nth-child(6) { animation-delay: 2.9s; }
  img:nth-child(7) { animation-delay: 2.98s; }
  img:nth-child(8) { animation-delay: 3.06s; }

  @media (prefers-reduced-motion: reduce) {
    img {
      animation: none;
      opacity: 1;
    }
  }
`;

export const FotoPerfil = styled.div`
  opacity: 0;
  animation: ${fadeInRight} 0.8s ease forwards;
  animation-delay: 0.3s;

  img {
    width: 250px;
    border-radius: 15px;
    border: 3px solid #ff3c3c;
    transition: transform 0.3s;
  }

  img:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    margin: 20px auto 0;
  }
`;

/* Curriculo agora é um <a> estilizado como botão — evita aninhar
   <button> dentro de <a> (inválido em HTML e ruim para leitor de tela) */
export const Curriculo = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  color: ${cores.texto};
  background: #ff3c3c;
  font-weight: 600;
  font-size: 14px;
  padding: 12px 22px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;

  box-shadow: 0 8px 20px rgba(255, 60, 60, 0.22);
  transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(255, 60, 60, 0.35);
    filter: brightness(1.05);
  }

  &:active {
    transform: scale(0.97);
    box-shadow: 0 6px 16px rgba(255, 60, 60, 0.25);
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 3px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 220px;
    padding: 12px 18px;
    font-size: 14px;
  }
`;

export const TitleDeBaixo = styled.div`
  text-align: center;
  padding: 10px;
  background: #000;
  font-size: 14px;
  color: #ccc;
`;
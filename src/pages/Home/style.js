import styled, { keyframes, css } from "styled-components";

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

// Animações
const scaleFadeSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const fadeSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const ContainerMestre = styled.div`


  font-family: "Poppins", sans-serif;
  background-color: ${cores.fundo};
  color: ${cores.texto};
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
 
`;

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  

  .title {
    color: ${cores.destaque};
    font-size: 1.5rem;
    font-weight: 700;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 100%;
  }

  .menu {
    list-style: none;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .menu a {
    text-decoration: none;
    color: ${cores.texto};
    font-weight: 500;
    transition: color 0.3s ease;
    cursor: pointer;
    white-space: nowrap;
  }

  .menu a:hover {
    color: ${cores.destaque};
  }

  @media (max-width: 768px) {
    padding: 20px 16px;

    Container{
      padding: 5px 0 0 0;
    }

    nav {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .menu {
      justify-content: center;
      gap: 14px;
    }

    .menu a {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 480px) {
    .title {
      font-size: 1.3rem;
    }

    .menu {
      gap: 12px;
    }

    .menu a {
      font-size: 0.9rem;
    }
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  flex-wrap: wrap;
  min-height: 75vh;
  gap: 40px;
  width: 100%;
  max-width: 100%;
  animation: ${fadeSlideIn} 1s ease forwards;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 40px 20px;
    gap: 30px;
  }

  @media (max-width: 480px) {
    padding: 30px 16px;
  }
`;

export const CaixaTexto = styled.div`
  width: 100%;
  max-width: 520px;

  h2 {
    font-size: 3rem;
    line-height: 1.1;
    color: ${cores.texto};
  }

  h2 span {
    color: ${cores.destaque};
  }

  h3 {
    font-size: 1.6rem;
    margin: 12px 0 20px;
    color: ${cores.destaque};
  }

  p {
    font-size: 1rem;
    color: ${cores.textoSecundario};
    margin-bottom: 20px;
    max-width: 480px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 2.2rem;
    }

    h3 {
      font-size: 1.4rem;
    }

    p {
      max-width: 100%;
      font-size: 0.98rem;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.9rem;
    }

    h3 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.95rem;
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
    animation: ${fadeIn} 1.2s ease forwards;
    display: block;
  }

  img:hover {
    transform: scale(1.15);
    box-shadow: 0 0 10px ${cores.destaque}55;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ButtonsDeRedes = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border-radius: 10px;
    text-decoration: none;
    color: ${cores.texto};
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease,
      box-shadow 0.3s ease, color 0.3s ease;
    opacity: 0;
    transform: translateY(10px) scale(0.8);

    ${({ $animate }) =>
    $animate &&
    css`
        animation-name: ${scaleFadeSlideIn};
        animation-duration: 0.6s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-out;
        opacity: 1;
        transform: translateY(0) scale(1);
      `}
  }

  .btn:nth-of-type(1) {
    animation-delay: 0.1s;
  }

  .btn:nth-of-type(2) {
    animation-delay: 0.25s;
  }

  .btn:nth-of-type(3) {
    animation-delay: 0.4s;
  }

  .btn:nth-of-type(4) {
    animation-delay: 0.55s;
  }

  .primary {
    background: ${cores.destaque};
    box-shadow: 0 0 15px ${cores.destaque}66;
  }

  .primary:hover {
    background: #ff1f1f;
    box-shadow: 0 0 20px ${cores.destaque};
    transform: scale(1.08) translateY(-3px);
  }

  .linkedin {
    background: ${cores.linkedin};
  }

  .github {
    background: ${cores.github};
  }

  .whatsapp {
    background: ${cores.whatsapp};
  }

  .linkedin:hover {
    background-color: #0047b3;
    box-shadow: 0 0 10px #0047b3aa;
    transform: scale(1.08) translateY(-3px);
  }

  .github:hover {
    background-color: #222;
    box-shadow: 0 0 10px #222aaa55;
    transform: scale(1.08) translateY(-3px);
  }

  .whatsapp:hover {
    background-color: #1ebe57;
    box-shadow: 0 0 10px #1ebe57aa;
    transform: scale(1.08) translateY(-3px);
  }

  @media (max-width: 768px) {
    justify-content: center;

    .btn {
      min-width: 140px;
    }
  }

  @media (max-width: 480px) {
    .btn {
      min-width: 130px;
      padding: 10px 16px;
      font-size: 0.95rem;
    }
  }
`;

export const FotoPerfil = styled.div`
  width: 100%;
  max-width: 260px;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    display: block;
    border-radius: 18px;
    border: 3px solid ${cores.destaque};
    box-shadow: 0 0 25px rgba(255, 60, 60, 0.25);
    transition: transform 0.3s;
    cursor: pointer;
    animation: ${fadeSlideIn} 1s ease forwards;
  }

  img:hover {
    transform: scale(1.08);
  }

  @media (max-width: 768px) {
    max-width: 320px;
  }

  @media (max-width: 480px) {
    max-width: 260px;
  }
`;
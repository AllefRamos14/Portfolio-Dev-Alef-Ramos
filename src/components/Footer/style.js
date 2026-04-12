import styled from "styled-components";

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

export const TitleDeBaixo = styled.footer`
  text-align: center;
  padding:  10px 12px;
  margin-top: 60px;
  background: ${cores.fundoBaixo};
  font-size: 15px;
  color: ${cores.textoSecundario};
   border-top: 1px solid #111;
   border-radius: 30px 30px 0 0  ;


    p {
    margin: 0;
    transition: color 0.3s ease;
  }

  span {
    color: ${cores.destaque};
    font-weight: 600;
  }

  .socials {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 6px;
}

.socials img {
  width: 28px;
  opacity: 0.8;
  transition: transform 0.2s ease, opacity 0.3s ease, filter 0.3s ease;
  cursor: pointer;
}

.socials img:hover {
  transform: translateY(-3px) scale(1.1);
  opacity: 1;
  filter: drop-shadow(0 0 6px ${cores.destaque});
}
 
`;
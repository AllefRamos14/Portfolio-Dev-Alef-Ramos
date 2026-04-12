import React, { useState, useEffect } from "react";
import {
  Container,
  ContainerTitle,
  CaixaTexto,
  Skills,
  ButtonsDeRedes,
  ContainerMestre,
  FotoPerfil,
} from "./style.js";

import Footer from "../../components/Footer";

import iconeReact from "../../assets/react-original.svg";
import iconeJS from "../../assets/javascript-original.svg";
import iconeCSS from "../../assets/CSS3.svg";
import iconeHTML from "../../assets/HTML5.svg";
import iconeNODE from "../../assets/Node.js.svg";

import FotoAllef from "../../assets/Allef.webp";

import iconTailwind from "../../assets/icons8-tailwind-css-48.png";
import icondocker from "../../assets/icons8-docker-48.png";
import iconTypeScript from "../../assets/icons8-texto-datilografado-48.png";
import iconmongodb from "../../assets/images.png";

import Menu from "../../components/menu/index.jsx";

export default function App() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ContainerMestre>
      <Container>
        <Menu />

        <ContainerTitle>
          <CaixaTexto>
            <h2>
              Desenvolvedor <span>Full Stack</span>
            </h2>
            <h3>Alef Ramos</h3>
            <p>
              Desenvolvedor focado em criar interfaces modernas, responsivas e
              funcionais com React e Node. Sempre buscando evoluir e construir
              soluções que resolvem problemas reais.
            </p>

            <Skills>
              <img src={iconeHTML} alt="HTML5" />
              <img src={iconeCSS} alt="CSS3" />
              <img src={iconeJS} alt="JavaScript" />
              <img src={iconeReact} alt="React" />
              <img src={iconTypeScript} alt="TypeScript" />
              <img src={iconeNODE} alt="Node.js" />
              <img src={iconmongodb} alt="MongoDB" />
              <img src={iconTailwind} alt="Tailwind CSS" />
              <img src={icondocker} alt="Docker" />
            </Skills>

            <ButtonsDeRedes $animate={animate}>
              <a href="/Projetos" className="btn primary">
                Ver Projetos
              </a>

              <a
                href="https://www.linkedin.com/in/allef-ramos"
                className="btn linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/AllefRamos14"
                className="btn github"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://w.app/vgpkho"
                className="btn whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </ButtonsDeRedes>
          </CaixaTexto>

          <FotoPerfil>
            <img src={FotoAllef} alt="Alef Ramos" loading="lazy" />
          </FotoPerfil>
        </ContainerTitle>
      </Container>
      <Footer />
    </ContainerMestre>
  );
}

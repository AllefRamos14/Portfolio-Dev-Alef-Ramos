import {
  Container,
  ContainerTitle,
  CaixaTexto,
  Skills,
  ContainerMestre,
  FotoPerfil,
  Curriculo
} from './style.js';

import { FaDownload } from "react-icons/fa";

import Menu from '../../components/menu/index.jsx';
import Footer from "../../components/Footer";

import iconeReact from '../../assets/react-original.svg';
import iconeJS from '../../assets/javascript-original.svg';
import iconeCSS from '../../assets/CSS3.svg';
import iconeHTML from '../../assets/HTML5.svg';
import iconeNODE from '../../assets/Node.js.svg';
import FotoAllef from '../../assets/Allef.webp';
import iconeTailwind from '../../assets/Tailwind CSS.svg';
import iconeTypeScript from '../../assets/TypeScript.svg';
import iconeDocker from '../../assets/icons8-docker-48.png';


export default function Sobre() {
  return (
    <ContainerMestre>
      <Container>
        <Menu />

        <ContainerTitle>
          <CaixaTexto>
            <h2>
              Sobre <span>Mim</span>
            </h2>

            <p>
              Sou <strong className="UserName">Alef Ramos</strong>, Desenvolvedor front-end júnior, formado em Full Stack e atualmente cursando Engenharia de Software.
              Sou apaixonado por tecnologia e estou sempre em busca de novos desafios que me ajudem a evoluir como profissional.
            </p>

            <p>
              Tenho experiência com as principais tecnologias do front-end, como <strong>React.js</strong> e <strong>JavaScript</strong>, e também conhecimentos em back-end com <strong>Node.js</strong>, buscando construir aplicações completas e bem estruturadas.
            </p>

            <p>
              Gosto de criar interfaces modernas, acessíveis e com foco em performance, aplicando boas práticas de desenvolvimento em projetos pessoais e práticos.
              Busco oportunidades para colaborar com equipes engajadas, aprender continuamente e contribuir para soluções que gerem impacto real.
            </p>


            <Skills>
              <img src={iconeHTML} alt="HTML5" />
              <img src={iconeCSS} alt="CSS3" />
              <img src={iconeJS} alt="JavaScript" />
              <img src={iconeReact} alt="React" />
              <img src={iconeNODE} alt="Node.js" />
              <img src={iconeTailwind} alt="Tailwind" />
              <img src={iconeTypeScript} alt="TypeScript.js" />
              <img src={iconeDocker} alt="Docker" />
            </Skills>

            <a href="./Alef-Ramos.pdf" download="Alef-Ramos-CV.pdf">
              <Curriculo>
                <FaDownload />
                Baixar CV
              </Curriculo>
            </a>

          </CaixaTexto>

          <FotoPerfil>
            <img src={FotoAllef} alt="Foto de Alef Ramos" />
          </FotoPerfil>
        </ContainerTitle>
      </Container>
      <Footer />
    </ContainerMestre>
  );
}

import {
    ContainerMestre,
    ContainerTitle,
    CaixaTexto,
    Skills,
    ButtonsDeRedes,
} from "./style";
import Menu from "../../components/menu";
import { projetos } from "../../Data/projectsData";
import Footer from "../../components/Footer";


function CardProjeto({ proj, $delay }) {
    return (
        <CaixaTexto $delay={$delay}>
            <div className="titulo">
                <h2>{proj.titulo}</h2>
            </div>

            <div className="imagem">
                <img src={proj.imagem} alt={proj.titulo} loading="lazy" />
            </div>

            <div className="main">

                <div className="tecnologias">
                    <h3>Tecnologias:</h3>
                    <Skills>
                        {proj.skills.map((skill) => (
                            <img key={skill} src={skill} alt="Skill icon" />
                        ))}
                    </Skills>
                </div>

                <div className="descricao">
                    <p>{proj.descricao}</p>
                </div>

                <div className="botoes">
                    <ButtonsDeRedes>
                        <a
                            className="btn github"
                            href={proj.linkGitHub}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Ver código do projeto ${proj.nome} no GitHub`}
                        >
                            GitHub
                        </a>
                        <a
                            className="btn demo"
                            href={proj.linkDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Ver aplicação do projeto ${proj.nome}`}
                        >
                            Ver aplicação
                        </a>
                    </ButtonsDeRedes>
                </div>
            </div>
        </CaixaTexto>
    );
}

export default function Projetos() {


    return (
        <ContainerMestre>
            <Menu />

            <ContainerTitle id="projetos">
                {projetos.map((proj, i) => (
                    <CardProjeto key={proj.id} proj={proj} $delay={`${i * 0.2}s`} />
                ))}
            </ContainerTitle>

            <Footer />
        </ContainerMestre>
    );
}

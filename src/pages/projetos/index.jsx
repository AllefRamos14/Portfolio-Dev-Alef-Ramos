import { useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer";
import Menu from "../../components/menu";
import { projetos } from "../../Data/projectsData";
import {
    ButtonsDeRedes,
    CaixaTexto,
    ContainerMestre,
    ContainerTitle,
    GlobalStyleBorda,
    Skills,
} from "./style";

// Hook: revela o elemento só quando ele entra na viewport
function useRevelarAoRolar(threshold = 0.15) {
    const ref = useRef(null);
    const [visivel, setVisivel] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisivel(true);
                    observer.unobserve(el);
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, visivel];
}

function CardProjeto({ proj, $delay }) {
    const [ref, visivel] = useRevelarAoRolar();

    return (
        <CaixaTexto
            ref={ref}
            $delay={$delay}
            className={visivel ? "visivel" : ""}
        >
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
            <GlobalStyleBorda />
            <Menu />

            <ContainerTitle id="projetos">
                {projetos.map((proj, i) => (
                    <CardProjeto key={proj.id} proj={proj} $delay={`${i * 0.15}s`} />
                ))}
            </ContainerTitle>

            <Footer />
        </ContainerMestre>
    );
}
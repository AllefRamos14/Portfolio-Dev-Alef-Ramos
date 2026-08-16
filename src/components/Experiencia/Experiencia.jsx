import { useEffect, useRef, useState } from "react";
import { Exp, GridContainer } from './style.js';

import { FaBriefcase } from "react-icons/fa";

// Hook: revela o card só quando ele entra na viewport
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

function CardExperiencia({ exp, $delay }) {
  const [ref, visivel] = useRevelarAoRolar();

  return (
    <Exp ref={ref} $delay={$delay} className={visivel ? "visivel" : ""}>
      <h3><FaBriefcase />{exp.titulo}</h3>
      <p><strong>Empresa:</strong> {exp.empresa}</p>
      <p><strong>Período:</strong> {exp.periodo}</p>
      <p><strong>Atividades:</strong></p>
      <ul>
        {exp.atividades.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </Exp>
  );
}

export default function Experiencia() {
  // ordem cronológica reversa (mais recente primeiro) — convenção de currículo,
  // e coloca a experiência como dev logo no topo
  const experiencias = [
    {
      titulo: 'Desenvolvedor Front-End Júnior',
      empresa: 'Freelancer',
      periodo: 'Jul 2024 - Presente',
      atividades: [
        'Desenvolvimento de componentes reutilizáveis com React.',
        'Consumo de APIs utilizando Axios.',
        'Estilização com styled-components e TailwindCSS.'
      ]
    },
    {
      titulo: 'Uber Moto',
      empresa: 'Uber',
      periodo: 'Mar 2022 - Presente',
      atividades: [
        'Condução segura e responsável, com foco em oferecer uma excelente experiência ao cliente.',
        'Atendimento cordial e eficiente, com avaliação média de 5 estrelas na plataforma.',
        'Gerenciamento de rotas otimizadas para reduzir tempo de viagem e aumentar a eficiência.',
        'Administração de horários e rotinas com disciplina e organização.'
      ]
    },
    {
      titulo: 'Mecânico de Máquina industrial',
      empresa: 'Grendener',
      periodo: 'Fev 2019',
      atividades: [
        'Manutenção preventiva e corretiva em máquinas industriais.',
        'Diagnóstico e resolução de falhas mecânicas e operacionais.',
        'Ajuste e troca de componentes para garantir o funcionamento adequado dos equipamentos.',
        'Organização de rotinas de manutenção e controle de ordens de serviço.'
      ]
    },
    {
      titulo: 'Estágio Mecânico',
      empresa: 'Grendener',
      periodo: 'Jan 2018 - Jan 2019',
      atividades: [
        'Auxílio na manutenção preventiva e corretiva de máquinas industriais.',
        'Acompanhamento de técnicos em rotinas de inspeção e reparo.',
        'Preenchimento de registros e controle de ordens de serviço.'
      ]
    }
  ];

  return (
    <GridContainer>
      {experiencias.map((exp, index) => (
        <CardExperiencia key={exp.titulo + exp.periodo} exp={exp} $delay={`${(index % 2) * 0.1}s`} />
      ))}
    </GridContainer>
  );
}
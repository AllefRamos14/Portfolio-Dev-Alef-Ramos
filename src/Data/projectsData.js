import html5 from "../assets/HTML5.svg";
import jsIcon from "../assets/javascript-original.svg";
import css3 from "../assets/CSS3.svg";
import reactIcon from "../assets/react.svg";
import nodeIcon from "../assets/Node.js.svg";
import tsIcon from "../assets/TypeScript.svg";
import tailwind from "../assets/icons8-tailwind-css-48.png";

import loginImg from "../assets/imagen-de-projetos/Tela-De-Login.webp";
import devBurguerImg from "../assets/imagen-de-projetos/Tela-DevBurguer.webp";
import devBillsImg from "../assets/imagen-de-projetos/dashboard.webp";
import DevMovies from "../assets/imagen-de-projetos/Devmovies.webp";
import Dashboard from "../assets/imagen-de-projetos/Tela-Dashboard.webp";
import Portfolio from "../assets/imagen-de-projetos/Portfolio.webp";

export const projetos = [
    {
        id: 1,
        titulo: "🎬 DevMovies",
        descricao: "DevMovies é uma aplicação web inspirada em plataformas de streaming, onde é possível explorar filmes, visualizar detalhes, navegar entre conteúdos e ter uma experiência moderna e responsiva.",
        skills: [reactIcon, jsIcon],
        linkGitHub: "https://github.com/AllefRamos14/DevMovies",
        linkDemo: "https://dev-movies-lovat.vercel.app",
        imagem: DevMovies,
    },
    {
        id: 2,
        titulo: "💸 DevBills ",
        descricao: "💸 DevBills é uma aplicação de controle financeiro pessoal com autenticação, dashboard financeiro, cadastro de receitas e despesas e integração com API REST.",
        skills: [reactIcon, tsIcon, nodeIcon, tailwind],
        linkGitHub: "https://github.com/AllefRamos14/DevBills-Front-End.git",
        linkDemo: "https://dev-bills-front-end-nu.vercel.app",
        imagem: devBillsImg,
    },
    {
        id: 3,
        titulo: "🍔 Projeto DevBurguer",
        descricao: "DevBurguer – Cardápio Online Permite navegar por categorias (entradas, hambúrgueres, bebidas e sobremesas), visualizar produtos com imagens e adicionar itens ao carrinho de forma simples e interativa.",
        skills: [reactIcon, jsIcon, nodeIcon],
        linkGitHub: "https://github.com/AllefRamos14/DevBurger-Interface.git",
        linkDemo: "https://dev-burger-interface-five.vercel.app/Login",
        imagem: devBurguerImg,
    },

    {
        id: 4,
        titulo: "📊 Dashboard",
        descricao: "Painel administrativo desenvolvido com React e Vite, focado em componentização, responsividade e organização de layout.",
        skills: [reactIcon, html5, css3, jsIcon],
        linkGitHub: "https://github.com/AllefRamos14/Dashboard.git",
        linkDemo: "https://dashboard-gamma-amber-18.vercel.app/",
        imagem: Dashboard,
    },
    {
        id: 5,
        titulo: "🔑 Login Page Responsiva",
        descricao: "O projeto se destaca pela transição animada entre os formulários, criando uma interação dinâmica e intuitiva, além de garantir responsividade e adaptação para diferentes dispositivos.",
        skills: [html5, css3, jsIcon],
        linkGitHub: "https://github.com/AllefRamos14/Tela-De-Login.git",
        linkDemo: "https://alleframos14.github.io/Tela-De-Login/",
        imagem: loginImg,
    },

    {
        id: 6,
        titulo: "🚀 Portfolio Dev",
        descricao: "A proposta deste projeto é servir como base para desenvolvedores que querem criar um portfólio moderno, responsivo e fácil de personalizar.",
        skills: [reactIcon, html5, css3, jsIcon],
        linkGitHub: "https://github.com/AllefRamos14/Portfolio-Dev.git",
        linkDemo: "https://portfolio-dev-one-beta.vercel.app/",
        imagem: Portfolio,
    },

];

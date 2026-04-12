import { TitleDeBaixo } from './style';


import iconInstagram from "../../assets/Logo-de-RedeSocial/icons8-instagram-logo-48.png";
import iconFacebook from "../../assets/Logo-de-RedeSocial/icons8-facebook-novo-48.png";
import iconLinkdin from "../../assets/Logo-de-RedeSocial/icons8-linkedin-48.png";
import iconGithub from "../../assets/Logo-de-RedeSocial/icons8-github-48.png";


export default function footer() {
    return (

        <TitleDeBaixo>

            <div className="socials">
                <a href="https://www.instagram.com/allef_ramos160/?hl=pt-br" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <img src={iconInstagram} alt="Instagram" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100077686994428" target="_blank" rel="noreferrer" aria-label="Facebook">
                    <img src={iconFacebook} alt="Facebook" />
                </a>
                <a href="https://www.linkedin.com/in/allef-ramos" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <img src={iconLinkdin} alt="LinkedIn" />
                </a>
                <a href="https://github.com/AllefRamos14" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <img src={iconGithub} alt="GitHub" />
                </a>
            </div>

            <p>© 2025 • Desenvolvido por <span>Alef Ramos</span> | Desenvolvedor Full Stack</p>

        </TitleDeBaixo>


    );
}
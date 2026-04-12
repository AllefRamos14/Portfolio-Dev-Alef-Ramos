import { useState } from "react";
import { Container, Header, Li } from "./style";
import { NavLink, useLocation } from 'react-router-dom';

export default function Menu() {

    const [changeBackgroud, setChangeBackground] = useState(false);

    const { pathname } = useLocation();

    window.onscroll = () => {
        if (!changeBackgroud && window.pageYOffset > 150) {
            setChangeBackground(true);
        }
        if (changeBackgroud && window.pageYOffset <= 150) {
            setChangeBackground(false);
        }
    };

    return (

        <Container $changeBackgroud={changeBackgroud}>
            <Header>
                <nav>
                    <h1 className='title'>Alef Ramos</h1>
                    <ul className='menu'>
                        <Li $isActive={pathname === '/'}>
                            <NavLink to="/" end>Home</NavLink>
                        </Li>
                        <Li $isActive={pathname.includes('experiencia')}>
                            <NavLink to="/experiencia">Experiência</NavLink>
                        </Li>
                        <Li $isActive={pathname.includes('projetos')}>
                            <NavLink to="/projetos">Projetos</NavLink>
                        </Li>
                        <Li $isActive={pathname.includes('sobre')}>
                            <NavLink to="/sobre">Sobre </NavLink>
                        </Li>
                    </ul>
                </nav>
            </Header>
        </Container>
    );
}

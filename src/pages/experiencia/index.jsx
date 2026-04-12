import { Container, ContainerTitle, ContainerMestre } from './style.js';
import Experiencia from '../../components/Experiencia/Experiencia.jsx';
import Menu from '../../components/menu/index.jsx';
import Footer from "../../components/Footer";

export default function App() {
  return (
    <ContainerMestre>
      <Container>
        <Menu />

        <ContainerTitle>
          <Experiencia />
        </ContainerTitle>
      </Container>

      <Footer />
    </ContainerMestre>
  );
}

import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/index.jsx';
import Sobre from './pages/SobreMin/Sobre.jsx';
import Experiencia from './pages/experiencia/index.jsx';
import Projetos from './pages/projetos/index.jsx';


const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/sobre',
    element: <Sobre />
  },
  {
    path: '/experiencia',
    element: <Experiencia />
  },
  {
    path: '/Projetos',
    element: <Projetos />
  }
])

export default Router;

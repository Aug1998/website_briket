import {
  Route,
  Routes,
} from "react-router-dom";
import Footer from './components/Footer';
import { Header } from './components/Header';
import WhatsappFloatingButton from './components/WhatsappFloatingButton';
import Home from "./pages/home/Home";
import ServicioTecnico from "./pages/servicioTecnico/ServicioTecnico";

function App() {

  const mql = window.matchMedia('(max-width: 1024px)');
  let isMobile = mql.matches;

  return (
    <>
      <WhatsappFloatingButton />
      <Header isMobile={isMobile} />
      <Routes>
        <Route path="/servicio-tecnico" element={<ServicioTecnico />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

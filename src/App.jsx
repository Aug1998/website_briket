import {
  Route,
  Routes,
} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsappFloatingButton from './components/WhatsappFloatingButton'
import Home from "./pages/Home";
import ServicioTecnico from "./pages/ServicioTecnico";

function App() {

  const mql = window.matchMedia('(max-width: 800px)');
  let isMobile = mql.matches;

  return (
    <>
    <WhatsappFloatingButton />
    <Header isMobile={isMobile} />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/servicio-tecnico" element={<ServicioTecnico/>} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;

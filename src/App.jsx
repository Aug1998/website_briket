import {
  Route,
  Routes,
} from "react-router-dom";
import Header from './components/Header'
import Home from "./pages/Home";
import Argentina from "./pages/Argentina";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/argentina" element={<Argentina/>} />
    </Routes>
    </>
  );
}

export default App;

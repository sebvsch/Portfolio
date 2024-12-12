import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { AppContextProvider } from "./context/AppContext";
import { Home } from "./page/Home";
import { Proyectos } from "./page/Proyectos";
import { SobreMi } from "./page/SobreMi";

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobremi' element={<SobreMi />} />
        <Route path='/proyectos' element={<Proyectos />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App

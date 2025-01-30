import { Habilidades } from "./page/Habilidades";
import { NavBar } from "./components/NavBar";
import { Home } from "./page/Home";
import { Proyectos } from "./page/Proyectos/Proyectos";
import { SobreMi } from "./page/SobreMi";
import { Route, Routes } from "react-router-dom";
import { MasProyectos } from "./page/Proyectos/MasProyectos";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <NavBar />
            <section id="home">
              <Home />
              <SobreMi />
            </section>
            <section id="proyectos">
              <Proyectos />
            </section>
            <section id="habilidades">
              <Habilidades />
            </section>
          </>
        } />
        <Route path="/mas-proyectos" element={<MasProyectos />} />
      </Routes>
    </>
  );
}

export default App

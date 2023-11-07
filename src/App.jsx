import { AppContextProvider } from './context/AppContext';
import { Navigate, Route, Routes } from 'react-router-dom';
import Habilidades from './page/Habilidades';
import Home from './page/Home';
import NavBar from './components/NavBar';
import SobreMi from './page/SobreMi';
import Proyectos from './page/Proyectos';
import './App.css'

function App() {

  return (
    <div>
      <AppContextProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobremi' element={<SobreMi />} />
          <Route path='/habilidades' element={<Habilidades />} />
          <Route path='/proyectos' element={<Proyectos />} />
          <Route path='/*' element={<Navigate to='/'/> } />
        </Routes>
      </AppContextProvider>
    </div>
  );
}

export default App

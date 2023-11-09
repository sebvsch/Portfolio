import CV from "../assets/CV.pdf";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import React, { useContext } from "react";
import ModalContacto from "./ModalContacto";


const NavBar = () => {

  const { mostrarModal, setMostrarModal } = useContext(AppContext);

  return (
    <>
      <header className="bg-blur border-b border-gray-500/20 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <Link to='/' className="flex-none text-[30px] font-normal text-white ease-in duration-300 hover:text-[#0cbeff]" href="#">Sebastián A. Chico</Link>
          <div className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div className="flex flex-col gap-6 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
              <Link to='/sobremi' className="flex items-center text-sm font-medium text-white ease-in duration-300 hover:text-[#0cbeff]" >
                Sobre mí
              </Link>
              <Link to='/proyectos' className="flex items-center text-sm font-medium text-white ease-in duration-300 hover:text-[#0cbeff]" >
                Proyectos
              </Link>
              <button className="text-sm font-medium text-white rounded-lg p-1.5 px-4 bg-blue-500 ease-in duration-300 hover:bg-[#0cbeff]"
                onClick={() => setMostrarModal(true)}
              >Contacto</button>
              <a
                href={CV}
                download="Sebastian Chico - Front-end Developer"
                rel="noreferrer"
                target="_blank"
                className="text-sm font-medium text-white rounded-lg p-1.5 px-4 bg-blue-500 ease-in duration-300 hover:bg-[#0cbeff]"
              >Descargar CV
              </a>
              {
                mostrarModal && (
                  <ModalContacto />
                )
              }
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;

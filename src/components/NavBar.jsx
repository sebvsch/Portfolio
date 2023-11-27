import CV from "../assets/CV.pdf";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import React, { useContext, useEffect, useState } from "react";
import ModalContacto from "./ModalContacto";
import { createPortal } from "react-dom";

const NavBar = () => {
  const { mostrarModal, setMostrarModal } = useContext(AppContext);

  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="bg-blur border-b border-gray-500/20 flex flex-wrap w-full text-sm py-4">
        <nav className="max-w-[85rem] w-full mx-auto px-4 flex items-center justify-between">
          <Link to='/' className="flex-none text-[30px] font-normal text-white ease-in duration-300 hover:text-[#0cbeff] active:text-[#0cbeff]" href="#">Sebastián A. Chico</Link>
          <div className="text-white md:hidden active:text-[#0cbeff] ease-in">
            <button onClick={() => setOpen(true)}>
              <span class="material-symbols-outlined text-3xl">menu</span>
            </button>
            {open &&
              createPortal(
                <div className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden">
                  <div className="absolute top-0 left-0 right-0 p-5 bg-white rounded-b-lg font-semibold text-slate-700">
                    <div className="text-end">
                      <button onClick={() => setOpen(false)}><span class="material-symbols-outlined text-4xl active:text-blue-500">close</span></button>
                    </div>
                    <div className="text-xl text-center">
                      
                      <div className="active:bg-blue-500 active:text-white py-3">
                        <Link to="/sobremi" onClick={() => setOpen(false)}>{'Sobre mí'.toUpperCase()}</Link>
                      </div>

                      <div className="active:bg-blue-500 active:text-white py-3">
                        <Link to="/proyectos" onClick={() => setOpen(false)}>{'Proyectos'.toUpperCase()}</Link>
                      </div>

                      <div className="text-blue-500 active:bg-blue-500 active:text-white py-3">
                        <button onClick={() => { setMostrarModal(true), setOpen(false) }}
                        >{'Contacto'.toUpperCase()}</button>
                      </div>

                      <div className="text-blue-500 active:bg-blue-500 active:text-white py-3">
                        <a
                          href={CV}
                          download="Sebastian Chico - Front-end Developer"
                          rel="noreferrer"
                          target="_blank"
                        >{'Descargar CV'.toUpperCase()}
                        </a>
                      </div>

                    </div>
                  </div>
                </div>,
                document.body
              )}
          </div>
          <div className="hs-collapse overflow-hidden transition-all duration-300 basis-full block max-sm:hidden max-md:hidden">
            <div className="flex gap-6  flex-row items-center justify-end mt-0 pl-5">
              <Link to='/sobremi' className="flex items-center text-sm font-medium text-white ease-in duration-300 hover:text-[#0cbeff] active:text-[#0cbeff]" >
                Sobre mí
              </Link>
              <Link to='/proyectos' className="flex items-center text-sm font-medium text-white ease-in duration-300 hover:text-[#0cbeff] active:text-[#0cbeff]" >
                Proyectos
              </Link>
              <button className="text-sm font-medium text-white rounded-lg p-1.5 px-4 bg-blue-500 ease-in duration-300 hover:bg-[#0cbeff] active:bg-[#0cbeff]"
                onClick={() => setMostrarModal(true)}
              >Contacto</button>
              <a
                href={CV}
                download="Sebastian Chico - Front-end Developer"
                rel="noreferrer"
                target="_blank"
                className="text-sm font-medium text-white rounded-lg p-1.5 px-4 bg-blue-500 ease-in duration-300 hover:bg-[#0cbeff] active:bg-[#0cbeff]"
              >Descargar CV
              </a>
            </div>
          </div>
          {
            mostrarModal && (
              <ModalContacto />
            )
          }
        </nav>
      </header>
    </>
  );
}

export default NavBar;

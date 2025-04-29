import { FC } from "react";
import { ModalContacto } from "./ModalContacto";
import { useDisclosure } from "@nextui-org/react";
import CV from "../assets/CV - Sebastian A. Chico.pdf";
import { Link } from "react-scroll";

const NavBar: FC = () => {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="flex justify-center">
        <div className="fixed">
          <div className="bg-white bg-opacity-10 mt-5 w-auto flex justify-center rounded-full text-white text-sm font-semibold shadow-md backdrop-blur-sm">
            <Link to="home" smooth={true} className="hover:bg-white/25 rounded-full py-2 px-5 cursor-pointer ease-in duration-200">Sobre mi</Link>
            <Link to="habilidades" smooth={true} className="hover:bg-white/25 rounded-full py-2 px-5 cursor-pointer ease-in duration-200">Habilidades</Link>
            <Link to="proyectos" smooth={true} className="hover:bg-white/25 rounded-full py-2 px-5 cursor-pointer ease-in duration-200">Proyectos</Link>
            <a
              href={CV}
              className="hover:bg-orange-500/75 hover:text-orange-100 bg-orange-500/30 rounded-full py-2 px-5 ease-in duration-200"
              download="Sebastian Chico - Front-end Developer"
              rel="noreferrer"
              target="_blank"
            >
              Descargar CV
            </a>
            <button onClick={onOpen} className="hover:bg-white/25 rounded-full py-2 px-5 ease-in duration-200">Contactame</button>
            <ModalContacto isOpen={isOpen} onOpenChange={onOpenChange} />
          </div>
        </div>
      </div>
    </>
  );
};

export { NavBar };

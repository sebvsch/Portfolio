import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import CV from "../assets/CV.pdf";

function Home() {
    const { setMostrarModal } = useContext(AppContext);

    return (
        <div className="flex justify-center">
            <div className="inline-flex flex-col lg:flex-row justify-center items-center mt-[20vh] mx-auto">
                <div className="max-sm:w-10/12 max-md:w-2/3 max-lg:w-2/3 mb-6 max-lg:mr-6">
                    <div className="mb-1 ">
                        <h1 className="text-white text-5xl font-medium max-sm:text-4xl max-sm:text-center max-md:text-4xl max-md:text-center max-lg:text-center">
                            Hola a{" "}
                            <span className="text-blue-500 font-bold inline-flex items-center">
                                Tod@s!
                                <div className="inline-block w-14 ml-3 max-sm:w-14">
                                    <img src="./media/emojiMano.png" alt="Emoji de Mano" />
                                </div>
                            </span>
                        </h1>
                    </div>

                    <div className="max-sm:justify-center max-sm:flex">
                        <div className="flex justify-center mb-2 max-md:text-center max-sm:text-center max-lg:text-center">
                            <p className="text-white text-xl max-sm:text-lg">
                                Me gusta la programación, los videojuegos, la música, pero sobre todo pasarla bien con lo que hago.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="max-lg:w-1/3">
                    <img
                        className="border-white/60 shadow-lg rounded-full max-sm:hidden max-md:hidden "
                        src="./media/perfil2.png"
                        alt="Foto personal de 'presentacion'"
                    />
                </div>
                <div className="md:hidden">
                    <button
                        className="text-base font-medium text-white rounded-lg p-1.5 px-4 bg-blue-500 ease-in duration-300 hover:bg-[#0cbeff] active:bg-[#0cbeff]"
                        onClick={() => setMostrarModal(true)}
                    >
                        Contactame
                    </button>
                </div>
                <div className="md:hidden mt-4">
                    <a
                        href={CV}
                        download="Sebastian Chico - Front-end Developer"
                        rel="noreferrer"
                        target="_blank"
                        className="text-base font-medium text-white rounded-lg p-1.5 px-4 bg-blue-500 ease-in duration-300 hover:bg-[#0cbeff] active:bg-[#0cbeff]"
                    >
                        Descargar CV
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;

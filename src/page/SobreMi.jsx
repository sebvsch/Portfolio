import React from 'react'
import MiniCard from '../components/MiniCard'

function SobreMi() {

    return (
        <>
            <div className='flex items-center justify-center mt-[30vh] max-sm:mt-[10vh] max-md:mt-[10vh] max-lg:mt-[10vh]'>

                <div className='w-[60%]'>
                    <h1 className='text-white font-bold text-5xl max-sm:text-4xl'>Sobre mí</h1>
                    <p className='text-white text-[20px] max-sm:text-[16px] max-md:text-[16px]'>Tengo 22 años, soy de Cartagena de Indias, Colombia. Desde 2018 estudio Ing. de Sistemas en
                        <a href="https://tecnologicocomfenalco.edu.co/" target="_blank" className='text-blue-500 ease-in duration-300 hover:text-[#0cbeff] active:text-[#0cbeff]'> Fundación Universitaria Tecnológico Comfenalco</a>,
                        tengo habilidad y conocimiento en el área del Diseño Gráfico/UI y he trabajado como Diseñador Freelancer por aproximadamente 6 años.
                        <br />
                        <span className='text-[15px]'> Ver información completa en mis perfiles de
                            <a href="https://www.linkedin.com/in/sebastian-chico-80802625b/"
                                target="_blank"
                                className='text-blue-500 ease-in duration-300 hover:text-[#0cbeff] active:text-[#0cbeff]'> LinkedIn
                            </a>,
                            <a href="https://www.behance.net/sebastianachico"
                                target="_blank"
                                className='text-blue-500 ease-in duration-300 hover:text-[#0cbeff] active:text-[#0cbeff]'> Behance
                            </a>,
                            <a href="https://www.github.com/sebvsch"
                                target="_blank"
                                className='text-blue-500 ease-in duration-300 hover:text-[#0cbeff] active:text-[#0cbeff]'> GitHub
                            </a>
                        </span>
                    </p>
                    <div className='mt-5'>
                        <h2 className='text-white font-semibold text-2xl inline'>Habilidades: </h2>
                        <MiniCard name="HTML5" />
                        <MiniCard name="CSS" />
                        <MiniCard name="Javascript" />
                        <MiniCard name="Typescript" />
                        <MiniCard name="React" />
                        <MiniCard name="Bootstrap" />
                        <MiniCard name="Tailwind CSS" />
                        <MiniCard name="Git & GitHub" />
                    </div>
                    <div className='mt-5'>
                        <h2 className='text-white font-semibold text-2xl inline'>Software: </h2>
                        <MiniCard name="Visual Studio Code" />
                        <MiniCard name="Adobe Photoshop" />
                        <MiniCard name="Adobe Illustrator" />
                        <MiniCard name="Figma" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SobreMi
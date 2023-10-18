import React from 'react'
import MiniCard from '../components/MiniCard'

function SobreMi() {

    return (
        <>
            <div className='flex items-center justify-center mt-[30vh]'>
                
                <div className='w-[60%]'>
                    <h1 className='text-white font-bold text-5xl'>Sobre mí</h1>
                    <p className='text-white text-[20px]'>Tengo 22 años, soy de Cartagena de Indias, Colombia. Desde 2018 estudio Ing. de Sistemas en
                        <a href="https://tecnologicocomfenalco.edu.co/" target="_blank" className='text-blue-500 ease-in duration-300 hover:text-[#0cbeff]'> Fundacion Universitario Tecnologico Comfenalco</a>,
                        tengo habilidad y conocimiento en el area del Diseño Grafico/UI y he trabajado como Diseñador Freelancer por aproximadamente 6 años.
                    </p>
                    <div className='mt-5'>
                        <h2 className='text-white font-semibold text-2xl inline'>Habilidades: </h2>
                        <MiniCard name="HTML5" />
                        <MiniCard name="CSS" />
                        <MiniCard name="Javascript" />
                        <MiniCard name="Typescript" />
                        <MiniCard name="React JS" />
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
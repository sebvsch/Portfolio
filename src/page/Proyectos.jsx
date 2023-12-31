import React from 'react';
import CardProject from '../components/CardProject';
import imgToDo from '/media/imgToDo.png'

function Proyectos() {

    return (
        <>
            <div className="flex flex-wrap gap-5 justify-center items-center mt-16 mb-[5%]">

                <CardProject
                    imagen={imgToDo}
                    titulo="To Do List"
                    descripcion={
                        <span>
                            Crud 'To do List' que permite Agregar, Editar y Eliminar tareas que las almacena utilizando
                            <a href="https://pocketbase.io/" target="_blank" rel="noopener noreferrer">
                                <strong className='text-blue-500 ease-in duration-300 hover:text-[#0cbeff] active:text-[#0cbeff]'> PocketBase </strong>
                            </a>
                            como BackEnd. Realizada con React, Typescript, Bootstrap.
                        </span>
                    }
                    linkRepo="https://github.com/sebvsch/CRUDListReactTS"
                    linkDeploy="https://tu-demo.com"
                    mostrarDeploy={false}
                    estado="Terminado"
                />

                <CardProject
                    imagen="https://cdn.dribbble.com/users/1171520/screenshots/6545819/dribbble.png?resize=400x0"
                    titulo="Pokedex"
                    descripcion={
                        <span>
                            Pokedex que contiene filtrado, detalle de cada Pokemon. Consumo de la API,
                            <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">
                                <strong className='text-[#ffc04b] ease-in duration-300 hover:text-[#ffed4b] active:text-[#ffed4b]'> PokeAPI</strong>
                            </a>
                            . Realizada con React, Typescript, Tailwind CSS.
                        </span>
                    }
                    linkRepo="https://github.com/sebvsch/pokeDex"
                    linkDeploy="https://tu-demo.com"
                    mostrarDeploy={false}
                    estado="En Pausa"
                />

                <CardProject
                    imagen="https://webdesigncusco.com/wp-content/uploads/2023/02/pocketbase-app.png"
                    titulo="Login and Register Validation"
                    descripcion={
                        <span>
                            Una pequeña pagina que contiene un Login y un Register, donde los usuarios y se guardan y se autentican en la base de datos
                            <a href="https://pocketbase.io/" target="_blank" rel="noopener noreferrer">
                                <strong className='text-blue-500 ease-in duration-300 hover:text-[#0cbeff] active:text-[#0cbeff]'> PocketBase</strong>
                            </a>
                            . Realizada con React, Typescript, Tailwind CSS.
                        </span>
                    }
                    linkRepo="https://github.com/sebvsch/AuthLogin"
                    linkDeploy="https://tu-demo.com"
                    mostrarDeploy={false}
                    estado="En Proceso"
                />
            </div>
        </>
    );
}

export default Proyectos;

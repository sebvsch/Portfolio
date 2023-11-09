import React from 'react'
import CardProject from '../components/CardProject'

function Proyectos() {

    const descripcion = [
        "Crud 'To do List' que permite Agregar, Editar y Eliminar tareas que las almacena utilizando ",
        <a key="pocketBase" href="https://pocketbase.io/" target="_blank" rel="noreferrer">
            <strong className='text-blue-500 ease-in duration-300 hover:text-[#0cbeff]'>PocketBase</strong>
        </a>,
        " como BackEnd. Realizada con React, Typescript, Bootstrap."
    ]

    const descripcionPoke = [
        "Pokedex que contiene filtrado, detalle de cada Pokemon. consumo de la API, ",
        <a key="pokemonApi" href="https://pokeapi.co/" target="_blank" rel="noreferrer">
            <strong className='text-[#ffc04b] ease-in duration-300 hover:text-[#ffed4b]'>PokeAPI</strong>
        </a>, ". realizada con React, Typescript, Tailwind CSS"
    ]

    return (

        <>

            <div className="flex flex-wrap gap-5 justify-center items-center mt-16 mb-[5%]">

                <CardProject
                    imagen="https://budibase.com/blog/crud-app/images/read.webp"
                    titulo="To Do List"
                    descripcion={descripcion}
                    linkRepo="https://github.com/sebvsch/CRUDListReactTS"
                    linkDeploy="https://tu-demo.com" />

                <CardProject
                    imagen="https://cdn.dribbble.com/users/1171520/screenshots/6545819/dribbble.png?resize=400x0"
                    titulo="Pokedex"
                    descripcion={descripcionPoke}
                    linkRepo="https://github.com/sebvsch/pokeDex"
                    linkDeploy="https://tu-demo.com" />


            </div>
        </>
    )

}

export default Proyectos
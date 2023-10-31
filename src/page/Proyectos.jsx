import React from 'react'
import CardProject from '../components/CardProject'

function Proyectos() {

    const descripcion = [
        "Crud 'To do List' que permite Agregar, Editar y Eliminar tareas que las almacena utilizando ",
        <a href="https://pocketbase.io/" target="_blank">
            <strong className='text-blue-500 ease-in duration-300 hover:text-[#0cbeff]'>PocketBase</strong>
        </a>,
        " como BackEnd. Realizada con React, Typescript, Bootstrap."
    ]

    return (
        <div className="flex flex-wrap gap-5 justify-center items-center mt-16 mb-[5%]">
            <CardProject
                imagen="https://budibase.com/blog/crud-app/images/read.webp"
                titulo="To Do List"
                descripcion={descripcion}
                linkRepo="https://github.com/sebvsch/CRUDListReactTS"
                linkDeploy="https://tu-demo.com"/>
        </div>
    )

}

export default Proyectos
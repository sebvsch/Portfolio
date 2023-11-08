import React from 'react'

function CardProject({ imagen, titulo, descripcion, linkRepo, linkDeploy }) {

    return (

        <div className="w-[20%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <img className="rounded-t-lg h-60 w-96" src={imagen} alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{titulo}</h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{descripcion}</p>

                <div className="space-x-3 mt-6 text-center">

                    <a href={linkRepo} target="_blank" className="text-sm font-medium text-white rounded-lg p-1.5 px-4 bg-blue-500 ease-in duration-300 hover:bg-[#0cbeff]">
                        Repo
                    </a>

                    <a href={linkDeploy} target="_blank" className="text-sm font-medium text-white rounded-lg p-1.5 px-4 bg-blue-500 ease-in duration-300 hover:bg-[#0cbeff]">
                        Demo
                    </a>

                </div>
            </div>
        </div>

    )
}

export default CardProject
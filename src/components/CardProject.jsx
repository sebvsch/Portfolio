import React from 'react';

function CardProject({ imagen, titulo, descripcion, linkRepo, linkDeploy, mostrarDeploy }) {

    return (
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
            <div className="border rounded-lg shadow bg-gray-800 border-gray-700">

                <img className="rounded-t-lg w-full h-48 sm:h-60 object-cover" src={imagen} alt={descripcion} />
                <div className="p-5">
                    <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-white">{titulo}</h5>

                    <p className="mb-3 font-normal text-gray-400">{descripcion}</p>

                    <div className="space-x-3 mt-6 text-center">

                        <a href={linkRepo} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white rounded-lg p-1.5 px-4 bg-blue-500 ease-in duration-300 hover:bg-[#0cbeff] active:bg-[#0cbeff]">
                            Repo
                        </a>

                        {mostrarDeploy && (
                            <a href={linkDeploy} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white rounded-lg p-1.5 px-4 bg-blue-500 ease-in duration-300 hover:bg-[#0cbeff] active:bg-[#0cbeff]">
                                Demo
                            </a>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardProject;

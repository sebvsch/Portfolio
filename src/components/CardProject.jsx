import React from 'react';

function CardProject({ imagen, titulo, descripcion, linkRepo, linkDeploy, mostrarDeploy }) {

    return (
        <div className="w-full p-2 md:w-[30%]">
            <div className="border rounded-lg shadow bg-gray-800 border-gray-700">

                <img className="rounded-t-lg w-full h-24 sm:h-32 md:h-40 object-cover" src={imagen} alt={descripcion} />
                <div className="p-3">
                    <h5 className="mb-1 text-sm sm:text-base font-bold tracking-tight text-white">{titulo}</h5>

                    <p className="mb-2 text-xs sm:text-sm font-normal text-gray-400">{descripcion}</p>

                    <div className="space-x-2 mt-4 text-center">

                        <a href={linkRepo} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-medium text-white rounded-lg p-1 px-2 bg-blue-500 ease-in duration-300 hover:bg-[#0cbeff] active:bg-[#0cbeff]">
                            Repo
                        </a>
                        {mostrarDeploy && (
                            <a href={linkDeploy} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-medium text-white rounded-lg p-1 px-2 bg-blue-500 ease-in duration-300 hover:bg-[#0cbeff] active:bg-[#0cbeff]">
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

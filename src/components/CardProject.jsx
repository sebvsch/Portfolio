import React from 'react';

function CardProject({ imagen, titulo, descripcion, linkRepo, linkDeploy, mostrarDeploy, estado }) {

    let estadoColor;
    if (estado === 'Terminado') {
        estadoColor = 'bg-green-500';
    } else if (estado === 'Pausado') {
        estadoColor = 'bg-red-500';
    } else if (estado === 'En Proceso') {
        estadoColor = 'bg-yellow-500 animate-pulse';
    }

    return (
        <div className="w-full p-2 sm:w-80">
            <div className="border rounded-lg shadow bg-gray-800 border-gray-700">
                <img className="rounded-t-lg w-full h-24 sm:h-32 md:h-40 object-cover" src={imagen} alt={descripcion} />
                <div className="p-3 flex justify-between">
                    <div>
                        <h5 className="mb-1 text-sm sm:text-base font-bold tracking-tight text-white">{titulo}</h5>
                        <p className="mb-5 text-xs sm:text-sm font-normal text-gray-400">{descripcion}</p>
                        <div className="flex items-center">
                            <span className={`w-3 h-3 rounded-full ${estadoColor}`}></span>
                            <span className="text-gray-300 text-sm ml-2 font-bold">{estado}</span>
                        </div>
                    </div>
                </div>
                <div className="space-x-2 mt-2 text-center mb-3">
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
    );
}

export default CardProject;
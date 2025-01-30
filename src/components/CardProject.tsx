import { FC } from 'react';

type CardProjectProps = {
    imagen: string;
    titulo: string;
    descripcion: string;
    linkRepo: string;
}

const CardProject: FC<CardProjectProps> = ({ imagen, titulo, descripcion, linkRepo }) => {
    return (
        <div className="border border-white/10 rounded-2xl w-[340px]">
            <div className="p-5 bg-white/5 rounded-2xl">
                <div className="flex justify-between">
                    <div>
                        <h5 className="mb-1 text-xl font-semibold text-white">
                            {titulo}
                        </h5>
                        <p className="mb-2 text-sm w-[300px] font-normal text-gray-400">
                            {descripcion}
                        </p>
                    </div>
                </div>
                <div className="relative w-[300px] h-[300px] overflow-hidden rounded-xl">
                    <img
                        className="w-full h-full object-cover"
                        src={imagen}
                        alt={descripcion}
                    />
                    <div className="absolute inset-0 flex justify-center items-end p-4 gap-3">
                        <a href={linkRepo} target="_blank" rel="noopener noreferrer">
                            <button>
                                <div className='bg-slate-500 hover:bg-slate-700 ease-in duration-200 px-3 py-1 rounded-full'>
                                    <i className="fa-brands fa-github mr-1 text-white"></i>
                                    <span className="text-white text-sm font-medium">Repo</span>
                                </div>
                            </button>
                        </a>
                        <button>
                            <div className='bg-orange-500 hover:bg-orange-600 ease-in duration-200 px-3 py-1 rounded-full'>
                                <i className="fa-solid fa-laptop mr-1 text-white"></i>
                                <span className="text-white text-sm font-medium">Deploy</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { CardProject };
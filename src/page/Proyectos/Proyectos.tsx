import { FC } from "react";
import { Link } from "react-router-dom";

const Proyectos: FC = () => {

    return (
        <>
            <div className="flex justify-center">
                <div className="mt-14 text-left w-[30%]">
                    <div className="flex flex-col gap-3 items-center justify-center">
                        <div>
                            <div className="text-white font-semibold flex gap-2 text-3xl">
                                <i className="fa-solid fa-star"></i>
                                <h1>Proyectos</h1>
                            </div>
                            <div>
                                <h2 className="text-white text-base mb-2">Proyectos recientes:</h2>
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-slate-400 text-3xl font-bold">Gestor Administrativo:</h3>
                                    <a href="https://github.com/sebvsch/GestorAuth" target="_blank" title="Se direccionara a otra pagina">
                                        <button className="flex text-base text-gray-bg bg-white font-bold gap-1 items-center rounded-md p-2 hover:bg-blue-200 hover:text-blue-700 duration-300 hover:shadow-xl">
                                            <i className="fa-brands fa-github"></i>
                                            <span>Repo</span>
                                        </button>
                                    </a>
                                    <a href="https://gestor-auth.vercel.app" target="_blank" title="Se direccionara a otra pagina">
                                        <button className="flex text-base text-white bg-blue-500 font-bold gap-1 items-center rounded-xl p-2 hover:bg-blue-400 hover:text-blue-900 duration-300 hover:shadow-xl">
                                            <span>Front</span>
                                        </button>
                                    </a>
                                    <a href="https://gestorauth.up.railway.app" target="_blank" title="Se direccionara a otra pagina">
                                        <button className="flex text-base text-white bg-orange-500 font-bold gap-1 items-center rounded-xl p-2 hover:bg-orange-600 hover:text-orange-900 duration-300 hover:shadow-xl">
                                            <span>Back</span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className="text-white text-sm">
                                <p>
                                    Plataforma para centralizar y optimizar la gestión de usuarios, inventarios, proyectos
                                    y procesos clave, mejorando la eficiencia operativa de tu organización
                                </p>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-slate-400 font-semibold">FrontEnd:</span>
                                    <div className="flex gap-1 p-2 rounded-xl border-white border border-opacity-10 bg-blue-300/10 shadow-lg">
                                        <img src="/media/logos/react.png" className="w-4" alt="Logo React" />
                                        <span className="text-xs">React</span>
                                    </div>
                                    <div className="flex gap-1 p-2 rounded-xl border-white border border-opacity-10 bg-blue-300/10 shadow-lg">
                                        <img src="/media/logos/typescript.png" className="w-4" alt="Logo React" />
                                        <span className="text-xs">TypeScript</span>
                                    </div>
                                    <div className="flex gap-1 p-2 rounded-xl border-white border border-opacity-10 bg-blue-300/10 shadow-lg">
                                        <img src="/media/logos/tailwind.png" className="w-4" alt="Logo React" />
                                        <span className="text-xs">Tailwind CSS</span>
                                    </div>
                                    <div className="flex gap-1 p-2 rounded-xl border-white border border-opacity-10 bg-blue-300/10 shadow-lg">
                                        <img src="/media/logos/nextui.png" className="w-4" alt="Logo React" />
                                        <span className="text-xs">NextUI</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-slate-400 font-semibold">BackEnd:</span>
                                    <div className="flex gap-1 p-2 rounded-xl border-white border border-opacity-10 bg-blue-300/10 shadow-lg">
                                        <img src="/media/logos/c-sharp.png" className="w-4" alt="Logo React" />
                                        <span className="text-xs">C#</span>
                                    </div>
                                    <div className="flex gap-1 p-2 rounded-xl border-white border border-opacity-10 bg-blue-300/10 shadow-lg">
                                        <img src="/media/logos/aspnetcore.png" className="w-4" alt="Logo React" />
                                        <span className="text-xs">ASP .NET Core</span>
                                    </div>
                                    <div className="flex gap-1 p-2 rounded-xl border-white border border-opacity-10 bg-blue-300/10 shadow-lg">
                                        <img src="/media/logos/sqlserver.png" className="w-4" alt="Logo React" />
                                        <span className="text-xs">SQL Server</span>
                                    </div>
                                </div>
                                <div className="border border-yellow-400/40 bg-yellow-400/5 rounded-md mt-2 text-xs p-1">
                                    <div>
                                        <p>Al registrarte, se te asignará automáticamente el rol <span className="font-bold">"Usuario Nuevo"</span>, el cual <span className="font-bold">no tiene acceso a prácticamente ninguna funcionalidad.</span></p>
                                    </div>
                                    <div className="my-3">
                                        <p>Para obtener una mejor experiencia y acceso completo, inicia sesión con el siguiente usuario de prueba:</p>
                                    </div>
                                    <div>
                                        <div><span className="font-bold">Usuario: </span>userprueba</div>
                                        <div><span className="font-bold">Contraseña: </span>userprueba</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 mt-2">
                                <img className="rounded-lg shadow-xl" src="/media/gestor.png" alt="" />
                            </div>
                        </div>
                        <div className="mt-2">
                            <Link to='/mas-proyectos' className="px-4 py-1 rounded-full text-white font-semibold bg-slate-300/20 hover:bg-slate-300/30 text-base hover:text-slate-200 ease-in duration-300 ">
                                Ver mas Proyectos
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { Proyectos };

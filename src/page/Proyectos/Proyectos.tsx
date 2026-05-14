// src/page/Proyectos/Proyectos.tsx

import { FC } from "react";
import { Link } from "react-router-dom";

const Proyectos: FC = () => {
    return (
        <>
            <div className="flex justify-center px-4">
                <div className="mt-14 text-left w-[30%]">
                    <div className="flex flex-col gap-6 items-center justify-center">

                        <div className="w-full">
                            <div className="text-white font-semibold flex gap-2 text-3xl mb-4">
                                <i className="fa-solid fa-star"></i>
                                <h1>Proyectos</h1>
                            </div>

                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                                <h3 className="text-slate-400 text-4xl font-bold">
                                    SCIUS ERP SaaS
                                </h3>
                            </div>

                            <div className="text-white text-sm mt-4">
                                <p className="text-base leading-relaxed text-slate-300 max-w-4xl">
                                    SCIUS es un ERP SaaS multi-tenant desarrollado para clínicas
                                    y centros médicos, diseñado para centralizar y optimizar la
                                    gestión operativa y administrativa. El sistema incluye autenticación
                                    segura con roles y permisos, dashboards analíticos, gestión de
                                    pacientes, agenda médica, sala de espera, reportes, administración
                                    de usuarios y filtrado de información por sucursal en tiempo real.

                                    Construido con una arquitectura escalable utilizando React,
                                    TypeScript, Node.js, Express y PostgreSQL, enfocado en rendimiento,
                                    mantenibilidad y experiencia de usuario moderna.
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">

                                    <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs">
                                        Multi Tenant
                                    </div>

                                    <div className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 text-xs">
                                        Gestión de Pacientes
                                    </div>

                                    <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-400/20 text-green-300 text-xs">
                                        Agenda Médica
                                    </div>

                                    <div className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-400/20 text-orange-300 text-xs">
                                        Sala de Espera
                                    </div>

                                    <div className="px-3 py-1 rounded-full bg-pink-500/10 border border-pink-400/20 text-pink-300 text-xs">
                                        Dashboard Analítico
                                    </div>

                                    <div className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs">
                                        Roles y Permisos
                                    </div>

                                </div>

                                {/* VIDEO */}
                                <div className="mt-6 overflow-hidden rounded-2xl shadow-2xl border border-white/10 max-w-2xl">
                                    <div className="aspect-video">
                                        <iframe
                                            className="w-full h-full"
                                            src="https://www.youtube.com/embed/5nE4gLmJRAg?autoplay=1&mute=1&loop=1&playlist=5nE4gLmJRAg"
                                            title="SCIUS ERP Demo"
                                            allow="autoplay; fullscreen"
                                            allowFullScreen
                                        />
                                    </div>
                                </div>

                                {/* FRONT */}
                                <div className="flex items-center gap-2 mt-6 flex-wrap">
                                    <span className="text-slate-400 font-semibold">
                                        FrontEnd:
                                    </span>

                                    <div className="flex gap-1 p-2 rounded-xl border-white border border-opacity-10 bg-blue-300/10 shadow-lg">
                                        <img
                                            src="/media/logos/react.png"
                                            className="w-4"
                                            alt="React"
                                        />
                                        <span className="text-xs">React</span>
                                    </div>

                                    <div className="flex gap-1 p-2 rounded-xl border-white border border-opacity-10 bg-blue-300/10 shadow-lg">
                                        <img
                                            src="/media/logos/typescript.png"
                                            className="w-4"
                                            alt="TypeScript"
                                        />
                                        <span className="text-xs">
                                            TypeScript
                                        </span>
                                    </div>

                                    <div className="flex gap-1 p-2 rounded-xl border-white border border-opacity-10 bg-blue-300/10 shadow-lg">
                                        <img
                                            src="/media/logos/tailwind.png"
                                            className="w-4"
                                            alt="Tailwind"
                                        />
                                        <span className="text-xs">
                                            Tailwind CSS
                                        </span>
                                    </div>

                                    <div className="flex gap-1 p-2 rounded-xl border-white border border-opacity-10 bg-blue-300/10 shadow-lg">
                                        <img
                                            src="/media/logos/nextui.png"
                                            className="w-4"
                                            alt="NextUI"
                                        />
                                        <span className="text-xs">NextUI</span>
                                    </div>
                                </div>

                                {/* BACK */}
                                <div className="flex items-center gap-2 mt-2 flex-wrap">
                                    <span className="text-slate-400 font-semibold">
                                        BackEnd:
                                    </span>

                                    <div className="flex gap-1 p-2 rounded-xl border-white border border-opacity-10 bg-blue-300/10 shadow-lg">
                                        <span className="text-xs">Node.js</span>
                                    </div>
                                    <div className="flex gap-1 p-2 rounded-xl border-white border border-opacity-10 bg-blue-300/10 shadow-lg">
                                        <span className="text-xs">Express</span>
                                    </div>
                                    <div className="flex gap-1 p-2 rounded-xl border-white border border-opacity-10 bg-blue-300/10 shadow-lg">
                                        <img
                                            src="/media/logos/typescript.png"
                                            className="w-4"
                                            alt="TypeScript"
                                        />
                                        <span className="text-xs">
                                            TypeScript
                                        </span>
                                    </div>

                                    <div className="flex gap-1 p-2 rounded-xl border-white border border-opacity-10 bg-blue-300/10 shadow-lg">

                                        <span className="text-xs">
                                            PostgreSQL
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <Link
                                to="/mas-proyectos"
                                className="px-4 py-1 rounded-full text-white font-semibold bg-slate-300/20 hover:bg-slate-300/30 text-base hover:text-slate-200 ease-in duration-300"
                            >
                                Ver más Proyectos
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Proyectos };
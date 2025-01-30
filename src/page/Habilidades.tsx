import { FC } from "react";

const Habilidades: FC = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="my-14 text-left w-[30%]">
                    <div className="flex gap-3 items-center justify-center">
                        <div>
                            <div className="text-white font-semibold flex gap-2 text-3xl">
                                <i className="fa-solid fa-bolt"></i>
                                <h1>Habilidades</h1>
                            </div>
                            <div>
                                <h2 className="text-white text-sm my-2">Tecnologias:</h2>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <img className="w-11" src="/media/logos/react.png" alt="Logo React" title="React" />
                                <img className="w-11" src="/media/logos/javascript.png" alt="Logo JavaScript" title="JavaScript" />
                                <img className="w-11" src="/media/logos/typescript.png" alt="Logo TypeScript" title="TypeScript" />
                                <img className="w-11" src="/media/logos/bootstrap.png" alt="Logo Bootstrap" title="Bootstrap" />
                                <img className="w-11" src="/media/logos/tailwind.png" alt="Logo TailwindCSS" title="TailwindCSS" />
                                <img className="w-11" src="/media/logos/nextui.png" alt="Logo NextUI" title="NextUI" />
                                <img className="w-11" src="/media/logos/azure.png" alt="Logo Azure" title="Azure" />
                                <img className="w-11" src="/media/logos/git.png" alt="Logo Git" title="Git" />
                                <img className="w-11" src="/media/logos/github.png" alt="Logo GitHub" title="GitHub" />
                                <img className="w-11" src="/media/logos/figma.png" alt="Logo Figma" title="Figma" />
                                <img className="w-11" src="/media/logos/c-sharp.png" alt="Logo C-Sharp" title="C-Sharp" />
                                <img className="w-11" src="/media/logos/aspnetcore.png" alt="Logo ASP .Net Core" title="ASP .Net Core" />
                                <img className="w-11" src="/media/logos/sqlserver.png" alt="Logo SQLServer" title="SQLServer" />
                                <img className="w-11" src="/media/logos/adobe-photoshop.png" alt="Logo Photoshop" title="Photoshop" />
                                <img className="w-11" src="/media/logos/adobe-illustrator.png" alt="Logo Illustrator" title="Illustrator" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Habilidades }
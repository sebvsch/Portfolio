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
                                <img className="w-11" src="../../public/media/logos/react.png" alt="Logo React" title="React" />
                                <img className="w-11" src="../../public/media/logos/javascript.png" alt="Logo JavaScript" title="JavaScript" />
                                <img className="w-11" src="../../public/media/logos/typescript.png" alt="Logo TypeScript" title="TypeScript" />
                                <img className="w-11" src="../../public/media/logos/bootstrap.png" alt="Logo Bootstrap" title="Bootstrap" />
                                <img className="w-11" src="../../public/media/logos/tailwind.png" alt="Logo TailwindCSS" title="TailwindCSS" />
                                <img className="w-11" src="../../public/media/logos/nextui.png" alt="Logo TailwindCSS" title="TailwindCSS" />
                                <img className="w-11" src="../../public/media/logos/azure.png" alt="Logo Figma" title="Azure" />
                                <img className="w-11" src="../../public/media/logos/git.png" alt="Logo Git" title="Figma" />
                                <img className="w-11" src="../../public/media/logos/github.png" alt="Logo Git" title="Figma" />
                                <img className="w-11" src="../../public/media/logos/figma.png" alt="Logo Figma" title="Figma" />
                                <img className="w-11" src="../../public/media/logos/c-sharp.png" alt="Logo Figma" title="Figma" />
                                <img className="w-11" src="../../public/media/logos/aspnetcore.png" alt="Logo Figma" title="Figma" />
                                <img className="w-11" src="../../public/media/logos/sqlserver.png" alt="Logo Figma" title="Figma" />
                                <img className="w-11" src="../../public/media/logos/adobe-photoshop.png" alt="Logo Figma" title="Figma" />
                                <img className="w-11" src="../../public/media/logos/adobe-illustrator.png" alt="Logo Figma" title="Figma" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Habilidades }
import { FC } from "react";
import { CardProject } from "../../components/CardProject";
import "./MasProyectos.css"
import { Link } from "react-router-dom";

const MasProyectos: FC = () => {
    return (
        <>
            <div className="bg-[#1F1F1F] min-h-screen flex items-center justify-center">
                <div className="flex flex-wrap justify-center gap-12 p-16">
                    <CardProject
                        imagen="/media/imgToDo.png"
                        titulo="LISTA TAREAS"
                        descripcion={`Crud "To do List" que permite Agregar, Editar y Eliminar tareas, almacenándolas con PocketBase como BackEnd.`}
                        linkRepo="https://github.com/sebvsch/CRUDListReactTS"
                        linkDeploy="https://crud-list-tareas.vercel.app/"
                    />
                    <CardProject
                        imagen="https://webdesigncusco.com/wp-content/uploads/2023/02/pocketbase-app.png"
                        titulo="LOGIN/REGISTER VALIDATION"
                        descripcion={`Una página web con Login y Register, donde los usuarios se guardan y autentican en PocketBase.`}
                        linkRepo="https://github.com/sebvsch/GestorAuth"
                    />
                </div>
                <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
                    <Link to="/" className="px-4 py-1 rounded-full flex items-center gap-1 text-white font-medium bg-slate-300/20 hover:bg-slate-300/30 text-base hover:text-slate-200 ease-in duration-300">
                        <i className="fa-regular fa-circle-left"></i>
                        Volver al Inicio
                    </Link>
                </div >
            </div >
        </>
    )
}

export { MasProyectos }
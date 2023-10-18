import { AppContext } from "../context/AppContext";
import React, { useContext } from "react";

function ModalContacto() {

    const { setMostrarModal } = useContext(AppContext);


    return (

        <div class="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center">
            <div class="bg-white p-8 rounded flex flex-col justify-center items-center gap-6">
                <div>
                    <form>
                        <h1 class="text-4xl font-bold mb-6">Contactame</h1>
                        <label class="block mb-4">Nombre y apellido:</label>
                        <input class="border rounded py-3 px-4 mb-4 w-full" type="text" />
                        <label class="block mb-4">Celular:</label>
                        <input class="border rounded py-3 px-4 mb-4 w-full" type="text" />
                        <label class="block mb-4">Email:</label>
                        <input class="border rounded py-3 px-4 mb-4 w-full" type="text" />
                        <label class="block mb-4">Mensaje:</label>
                        <textarea class="border rounded py-3 px-4 mb-4 resize-none w-full" rows="4"></textarea>
                    </form>
                    <div className='flex justify-end items-center mt-4'>
                        <button className="text-sm font-medium text-white rounded-lg p-1.5 px-8 bg-blue-500 ease-in duration-300 hover:bg-[#0cbeff] mr-2"
                        onClick={() => setMostrarModal(false)}
                        >Cerrar</button>
                        <button className="text-sm font-medium text-white rounded-lg p-1.5 px-8 bg-blue-500 ease-in duration-300 hover:bg-[#0cbeff]">Enviar</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ModalContacto
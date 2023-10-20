import { AppContext } from "../context/AppContext";
import React, { useContext, useRef } from "react";

function ModalContacto() {
    const { setMostrarModal, handleSubmit, form, setForm, handleForm, enviarForm } = useContext(AppContext);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-8 rounded-[13px] flex flex-col justify-center items-center gap-6 shadow-lg ">
                <div>
                    <form
                        ref={enviarForm}
                        onChange={handleForm}
                        onSubmit={handleSubmit}>
                        <h1 className="text-4xl font-bold mb-10 px-[5em]">Contactame</h1>
                        <label className="block mb-4 text-black/50">Nombre y apellido:</label>
                        <input
                            className="border rounded py-3 px-4 mb-4 w-full"
                            value={form.nombre}
                            name="user_name"
                            type="text"
                            placeholder="Sebastian Andres Chico"
                            required
                        />
                        <label className="block mb-4 text-black/50">Celular:</label>
                        <input
                            className="border rounded py-3 px-4 mb-4 w-full"
                            value={form.celular}
                            name="user_phone"
                            type="text"
                            placeholder="(+00) 123-45-678"
                            required
                        />
                        <label className="block mb-4 text-black/50">Email:</label>
                        <input
                            className="border rounded py-3 px-4 mb-4 w-full"
                            value={form.email}
                            name="user_email"
                            type="email"
                            placeholder="email@example.com"
                            required
                        />
                        <label className="block mb-4 text-black/50">Mensaje:</label>
                        <textarea
                            className="border rounded py-3 px-4 mb-4 resize-none w-full"
                            value={form.mensaje}
                            name="message"
                            rows="4"
                            required
                        ></textarea>
                        <div className="flex justify-end items-center mt-4 gap-10">
                            <button
                                className="text-base font-medium text-blue-500 "
                                onClick={() => setMostrarModal(false)}
                            >
                                Cerrar
                            </button>
                            <button
                                className="text-base font-medium text-blue-500 "
                                type="submit"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ModalContacto;

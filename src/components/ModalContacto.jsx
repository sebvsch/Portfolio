import { AppContext } from "../context/AppContext";
import React, { useContext } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function ModalContacto() {
    const { setMostrarModal, handleSubmit, form, handleForm, enviarForm, number, setNumber } = useContext(AppContext);


    return (
        <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-8 rounded-[13px] flex flex-col justify-center items-center gap-6 shadow-lg">
                <div>
                    <form
                        ref={enviarForm}
                        onChange={handleForm}
                        onSubmit={(e) => {
                            handleSubmit(e);
                            setMostrarModal(false);
                        }}
                        className="flex flex-col"
                    >
                        <h1 className="text-4xl font-bold mb-10 px-[5em]">Contáctame</h1>

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
                        <PhoneInput
                            className="border rounded py-3 px-4 mb-4 w-full"
                            name="user_phone"
                            country={number}
                            placeholder="(+00) 12-345-67"
                            onChange={(value) => { setNumber(value) }}
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
                        <div className="flex justify-center mt-6 gap-5">
                            <button
                                className="text-base font-medium text-blue-500 bg-blue-500 text-white p-1.5 px-5 rounded-[20px] ease-in duration-300 hover:bg-[#0cbeff]"
                                type="button"
                                onClick={() => setMostrarModal(false)}
                            >
                                Cerrar
                            </button>
                            <button
                                className="text-base font-medium text-blue-500 bg-blue-500 text-white p-1.5 px-5 rounded-[20px] ease-in duration-300 hover:bg-[#0cbeff]"
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

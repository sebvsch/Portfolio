import { AppContext } from "../context/AppContext";
import React, { useContext } from "react";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import ModalValidacion from "./ModalValidacion";

function ModalContacto() {
    const { setMostrarModal, handleSubmit, form, handleForm, enviarForm, number, setNumber, isValid, handleCloseModal, MostrarModalValidacion, setMostrarModalValidacion } = useContext(AppContext);


    return (
        <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-8 rounded-[13px] shadow-lg max-sm:w-96 border">
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
                        <h1 className="text-4xl font-bold mb-10 px-[5em] max-sm:text-2xl flex justify-center">Contáctame</h1>
                        <label className="block mb-4 text-black/50">Nombre y apellido:<span style={{ color: 'red' }}> *</span></label>
                        <input
                            className="border rounded py-3 px-4 mb-4"
                            defaultValue={form.nombre}
                            name="user_name"
                            type="text"
                            placeholder="Sebastian Andres Chico"
                            required
                        />
                        <label className="block mb-4 text-black/50">Numero de contacto:<span style={{ color: 'red' }}> *</span></label>
                        <div className="mb-4">
                            <PhoneInput
                                placeholder="+00 123 4567 890"
                                className="border rounded py-3 px-4"
                                value={number}
                                onChange={setNumber}
                                name="user_phone"
                                required
                            />
                            {!isValid && number && number.length > 1 && <div className="text-red-600 text-[11px] animate-pulse">Valide su numero telefonico.<span onClick={() => setMostrarModalValidacion(true)} className="material-symbols-outlined text-[13px] cursor-pointer mt-[2px]">help</span></div>}
                        </div>
                        <label className="block mb-4 text-black/50">Email:<span style={{ color: 'red' }}> *</span></label>
                        <input
                            className="border rounded py-3 px-4 mb-4"
                            defaultValue={form.email}
                            name="user_email"
                            type="email"
                            placeholder="email@example.com"
                            required
                        />
                        <label className="block mb-4 text-black/50">Mensaje:<span style={{ color: 'red' }}> *</span></label>
                        <textarea
                            className="border rounded py-3 px-4 mb-4 resize-none"
                            defaultValue={form.mensaje}
                            name="message"
                            rows="4"
                            required
                        ></textarea>
                        <div className="flex justify-center mt-6 gap-5">
                            <button
                                className="text-base font-medium bg-blue-500 text-white p-1.5 px-5 rounded-[20px] ease-in duration-300 hover:bg-[#0cbeff] active:bg-[#0cbeff]"
                                type="button"
                                onClick={handleCloseModal}
                            >
                                Cerrar
                            </button>
                            <button
                                className={`text-base font-medium p-1.5 px-5 rounded-[20px] ease-in duration-300 ${isValid ? "bg-blue-500 text-white hover:bg-[#0cbeff] active:bg-[#0cbeff]" : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    }`}
                                type="submit"
                                disabled={!isValid}
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                    {
                        MostrarModalValidacion && (
                            <ModalValidacion />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default ModalContacto;

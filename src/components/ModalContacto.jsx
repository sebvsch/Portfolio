import { AppContext } from "../context/AppContext";
import React, { useContext } from "react";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

function ModalContacto() {
    const { setMostrarModal, handleSubmit, form, handleForm, enviarForm, number, setNumber, isValid, handleCloseModal, handleEnviarModal } = useContext(AppContext);

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
                        <label className="block mb-4 text-black/50">Nombre y apellido:<span style={{ color: 'red' }}> *</span></label>
                        <input
                            className="border rounded py-3 px-4 mb-4 w-full"
                            value={form.nombre}
                            name="user_name"
                            type="text"
                            placeholder="Sebastian Andres Chico"
                            required
                        />
                        <label className="block mb-4 text-black/50">Numero de contacto:<span style={{ color: 'red' }}> *</span></label>
                        <div className="mb-4">
                            <PhoneInput
                                inputStyle={{ width: '100%' }}
                                value={number}
                                onChange={(number) => setNumber(number)}
                                name="user_phone"
                                required
                            />
                            {!isValid && number.length > 4 && <div className="text-red-600 text-[11px] animate-pulse">Valide su numero telefonico</div>} 
                        </div>
                        <label className="block mb-4 text-black/50">Email:<span style={{ color: 'red' }}> *</span></label>
                        <input
                            className="border rounded py-3 px-4 mb-4 w-full"
                            value={form.email}
                            name="user_email"
                            type="email"
                            placeholder="email@example.com"
                            required
                        />
                        <label className="block mb-4 text-black/50">Mensaje:<span style={{ color: 'red' }}> *</span></label>
                        <textarea
                            className="border rounded py-3 px-4 mb-4 resize-none w-full"
                            value={form.mensaje}
                            name="message"
                            rows="4"
                            required
                        ></textarea>
                        <div className="flex justify-center mt-6 gap-5">
                            <button
                                className="text-base font-medium bg-blue-500 text-white p-1.5 px-5 rounded-[20px] ease-in duration-300 hover:bg-[#0cbeff]"
                                type="button"
                                onClick={handleCloseModal}
                            >
                                Cerrar
                            </button>
                            <button
                                className={`text-base font-medium p-1.5 px-5 rounded-[20px] ease-in duration-300 ${isValid ? "bg-blue-500 text-white hover:bg-[#0cbeff]" : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    }`}
                                type="submit"
                                disabled={!isValid}
                                onClick={handleEnviarModal}
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

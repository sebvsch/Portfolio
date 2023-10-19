import React, { createContext, useState } from "react";
import Swal from 'sweetalert2'

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const [mostrarModal, setMostrarModal] = useState(false)

    const monstrarAlert = () => {
        Swal.fire({
            title: 'Enviado',
            text: 'Su mensaje se ha enviado exitosamente',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
        });

        resetForm();
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const nombreInput = e.target.elements.nombreApellido.value;
        const celularInput = e.target.elements.celular.value;
        const emailInput = e.target.elements.email.value;
        const mensajeInput = e.target.elements.mensaje.value;

        if (
            nombreInput.trim() === "" ||
            celularInput.trim() === "" ||
            emailInput.trim() === "" ||
            mensajeInput.trim() === ""
        ) {
            Swal.fire({
                title: "Error",
                text: "Por favor, complete todos los campos",
                icon: "error",
            });
        } else {
            monstrarAlert();
        }
    };

    const resetForm = () => {
        const form = document.getElementById("contactForm");
        form.reset();
    }

    return (
        <AppContext.Provider value={{
            monstrarAlert,
            mostrarModal,
            setMostrarModal,
            handleSubmit
        }}>
            {children}
        </AppContext.Provider>
    );
}

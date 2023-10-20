import React, { createContext, useState, useRef } from "react";
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const [mostrarModal, setMostrarModal] = useState(false)

    const [form, setForm] = useState({
        nombre: "",
        celular: "",
        email: "",
        mensaje: ""
    })


    const successAlert = () => {
        Swal.fire({
            title: 'Enviado',
            text: 'Su mensaje se ha enviado exitosamente',
            icon: 'success',
            showConfirmButton: false,
            timer: 2200
        });
    }

    const handleForm = (e) => {
        setForm(e.target.value)
    }

    const enviarForm = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_a8vs3xg', 'template_3me1ol6', enviarForm.current, 'SoC0OlJj2_DXiyOQG')

        successAlert();
        setForm({
            nombre: "",
            celular: "",
            email: "",
            mensaje: ""
        });

    }

    return (
        <AppContext.Provider value={{
            enviarForm,
            handleForm,
            form,
            setForm,
            mostrarModal,
            setMostrarModal,
            handleSubmit
        }}>
            {children}
        </AppContext.Provider>
    );
}

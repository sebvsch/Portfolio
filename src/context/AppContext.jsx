import React, { createContext, useState, useRef } from "react";
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';
import { PhoneNumberUtil } from 'google-libphonenumber';


export const AppContext = createContext();

//Validacion del Numero Telefonico

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (number) => {
    try {
        return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(number));
    } catch (error) {
        return false;
    }
};

export const AppContextProvider = ({ children }) => {

    const [mostrarModal, setMostrarModal] = useState(false)
    const [number, setNumber] = useState("")
    const [form, setForm] = useState({
        nombre: "",
        email: "",
        mensaje: ""
    })

    //Validacion del Numero Telefonico

    const isValid = isPhoneValid(number);

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
            email: "",
            mensaje: ""

        });

        setNumber("")
    }

    const handleCloseModal = () => {
        setNumber('');
        setMostrarModal(false);
    };


    return (
        <AppContext.Provider value={{
            number,
            setNumber,
            enviarForm,
            handleForm,
            form,
            setForm,
            mostrarModal,
            setMostrarModal,
            handleSubmit,
            isValid,
            handleCloseModal,
        }}>
            {children}
        </AppContext.Provider>
    );
}

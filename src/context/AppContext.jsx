import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const [mostrarModal, setMostrarModal] = useState(false)

    const MensajeEnPantalla = () => {
        console.log("Hola Mundo")
    }

    return (
        <AppContext.Provider value={{
            MensajeEnPantalla,
            mostrarModal,
            setMostrarModal
        }}>
            {children}
        </AppContext.Provider>
    );
}

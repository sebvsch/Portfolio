import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function ModalValidacion() {

    const {setMostrarModalValidacion} = useContext(AppContext)

    return (

        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-[1px] flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg justify-center items-center shadow-sm">
                <div className='w-96'>
                    <div className='flex items-center mb-2'>
                    <span className="material-symbols-outlined text-3xl text-blue-500 mr-1">task_alt</span>
                    <h1 className='text-xl font-semibold'>Valide su número telefónico</h1>
                    </div>
                    <p className='mb-3 text-black/70'>Para poder continuar con el envió del formulario asegúrese ingresar y validar su número telefónico correctamente.</p>
                    <div className='text-end'>
                    <button className="rounded-full text-sm font-medium bg-blue-500 text-white p-1.5 px-4 ease-in duration-300 hover:bg-[#0cbeff]" onClick={() => setMostrarModalValidacion(false)}>Cerrar</button>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default ModalValidacion
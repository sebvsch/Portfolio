import React from 'react';

function Home() {
    return (
        <div className="flex justify-center">
            <div className="inline-flex flex-col sm:flex-row justify-center items-center mt-[20vh]">
                <div className='sm:w-2/5'>
                    <div className=''>
                        <div className="gap-3 mb-3">
                            <h1 className='text-white text-5xl font-medium max-sm:text-6xl max-sm:text-center'>
                                Hola a <span className='text-blue-500 font-bold inline-flex items-center'> Tod@s!
                                    <div className='inline-block w-14 ml-3 max-sm:w-14'>
                                        <img src='./media/emojiMano.png' alt='Emoji de Mano' />
                                    </div>
                                </span>
                            </h1>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='mb-3 max-sm:w-[85%] max-sm:text-center'>
                            <p className='text-white text-[25px] max-sm:text-lg sm:w-10/12'>
                                Me gusta la programación, los videojuegos, la música,
                                pero sobre todo pasarla bien con lo que hago.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-1/4'>
                    <img className='border border-white/60 shadow-lg rounded-full max-sm:hidden max-md:hidden' src="./media/perfil2.png" alt="Foto personal de 'presentacion'" />
                </div>
            </div>
        </div>
    )
}

export default Home;

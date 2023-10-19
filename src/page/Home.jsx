import React from 'react';

function Home() {

    return (
        <div className="flex items-center justify-center gap-[80px] mt-[20vh] text-focus-in">
            <div className='w-[44%]'>
                <div className="flex gap-3 mb-2 inline">
                    <h1 className='text-white text-7xl font-medium inline'>Hola a <span className='text-blue-500 font-bold'>Tod@s!</span></h1>
                    <img className='w-[70px] h-[70px] inline' src="./media/emojiMano.png" alt="" />
                </div>
                <div className='mb-3'>
                    <p className='text-white text-[25px]'>Me gusta la programación, los videojuegos, la música, pero sobre todo pasarla bien con lo que hago.</p>
                </div>
            </div>
            <div className='w-[27%]'>
                <img className='rounded-full' src="./media/perfil.jpg" alt="" />
            </div>
        </div>
    )
}

export default Home;

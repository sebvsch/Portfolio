import React from 'react'

function MiniCard(props) {

    return (
        <div className=' mr-2 text-[16px] font-medium text-white rounded-lg p-1 px-3 border flex justify-center items-center bg-white/10 ease-in duration-200 hover:border-blue-500' style={{ display: 'inline-block' }}>
            {props.name}
        </div>
    )
}

export default MiniCard
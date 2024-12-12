import { FC } from 'react'

type MiniCardProps = {
    nombre: string;
}

const MiniCard: FC<MiniCardProps> = ({ nombre }) => {

    return (

        <div className='mr-[3px] mb-[3px] text-[16px] font-medium text-white rounded-lg p-1 px-3 border flex justify-center items-center bg-white/10 ease-in duration-200 hover:border-blue-500 max-sm:text-[13px]' style={{ display: 'inline-block' }}>
            {nombre}
        </div>
    )
}

export { MiniCard }
import { FC } from 'react'

type MiniCardProps = {
    icon: string;
    nombre: string;
    url: string;
    color: string;
}

const MiniCard: FC<MiniCardProps> = ({ nombre, icon, url, color }) => {

    return (
        <a href={url} target="_blank" title='⚠ Se direccionara a otra pagina'>
            <div className={`bg-white/10 hover:bg-white/20 ease-in duration-150 items-center justify-center inline-flex rounded-lg ${color} px-3 py-2 gap-1`}>
                <i className={icon}></i>
                <span className='font-medium'>{nombre}</span>
            </div>
        </a>
    )
}

export { MiniCard }
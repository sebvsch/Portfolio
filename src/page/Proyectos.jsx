import React from 'react'
import CardProject from '../components/CardProject'

function Proyectos() {

    const descripcion = [
        "Crud 'To do List' que permite Agregar, Editar y Eliminar tareas que las almacena utilizando ",
        <a href="https://pocketbase.io/" target="_blank">
            <strong className='text-blue-500 ease-in duration-300 hover:text-[#0cbeff]'>PocketBase</strong>
        </a>,
        " como BackEnd. Realizada con React, Typescript, Bootstrap."
    ]

    return (
        <div className="flex flex-wrap gap-5 justify-center items-center mt-16 mb-[5%]">

            <CardProject
                imagen="https://budibase.com/blog/crud-app/images/read.webp"
                titulo="To Do List"
                descripcion={descripcion}
                linkRepo="https://github.com/sebvsch"
                linkDeploy="https://tu-demo.com"/>

            <CardProject
                imagen="https://www.boostingfactory.com/application/files/thumbnails/news_gallery_single/3316/7835/7803/valorant-agents-real-names.jpg"
                titulo="Valorant"
                descripcion={descripcion}
                linkRepo="https://github.com/sebvsch"
                linkDeploy="https://tu-demo.com" />

            <CardProject
                imagen="https://images.contentstack.io/v3/assets/bltad9188aa9a70543a/bltee0947ea235d63dd/632140fd5a8acf5d92ccd8e0/W22_TEMPLATE_16x9_KV_GENERIC_PLAYINS.png?width=3200&height=1800"
                titulo="Valorant"
                descripcion={descripcion}
                linkRepo="https://github.com/sebvsch"
                linkDeploy="https://tu-demo.com" />

            <CardProject
                imagen="https://budibase.com/blog/crud-app/images/read.webp"
                titulo="To Do List"
                descripcion={descripcion}
                linkRepo="https://github.com/sebvsch"
                linkDeploy="https://tu-demo.com"
            />

            <CardProject
                imagen="https://cdn.sortiraparis.com/images/80/66131/899964-f1-manager-2023-gerez-votre-propre-equipe-de-f1-sur-pc-et-consoles-des-cet-ete.jpg"
                titulo="Valorant"
                descripcion={descripcion}
                linkRepo="https://github.com/sebvsch"
                linkDeploy="https://tu-demo.com" />
            
            <CardProject
                imagen="https://i0.wp.com/themes.svn.wordpress.org/ecommerce-solution/1.2.6/screenshot.png"
                titulo="Valorant"
                descripcion={descripcion}
                linkRepo="https://github.com/sebvsch"
                linkDeploy="https://tu-demo.com" />

        </div>
    )

}

export default Proyectos
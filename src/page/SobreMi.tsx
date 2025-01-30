import { FC } from "react";

const SobreMi: FC = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="mt-14 text-left w-[30%]">
          <div className="flex gap-3 items-center">
            <div>
              <div className="text-white font-semibold flex gap-2 text-3xl">
                <i className="fa-solid fa-user"></i>
                <h1>Sobre mi</h1>
              </div>
              <p className="text-white text-sm mt-3">

                23 años, estudiante de Ingeniería de Sistemas en Cartagena,
                diseñador freelance y desarrollador web fullstack.
                Enfocado en crecer personal y profesionalmente mientras
                aporto al éxito de mis proyectos.
              </p>
            </div>
          </div>
          <div className="mt-4 text-white">
            <div className="flex items-center gap-1 text-xl">
              <i className="fa-solid fa-address-book"></i>
              <h2 className="font-medium">Educacion:</h2>
            </div>
            <h2 className="font-normal text-lg">Fundación Universitaria Tecnológico Comfenalco:</h2>
            <h3 className="text-orange-500 text-base font-normal">Tecnologia en Desarrollo de Software</h3>
            <h4 className="text-sm font-medium">2018 - 2022</h4>
            <h3 className="text-orange-500 text-base font-normal">Ingenieria de Sistemas</h3>
            <h4 className="text-sm font-medium">2022 - Actualidad</h4>
          </div>
          <div className="mt-4 text-white">
            <div className="flex items-center gap-1 text-xl">
              <i className="fa-solid fa-laptop"></i>
              <h2 className="font-medium">Experiencia:</h2>
            </div>
            <h3 className="text-orange-500 text-sm font-normal">Desarrollador Front end</h3>
            <h4 className="text-[10px] font-medium">Septiembre 2023 - Febrero 2024</h4>
            <p className="text-sm mt-2">
              Desarrollador Frontend en COMFENALCO, encargado de crear interfaces,
              integrar APIs y resolver problemas en plataformas web.
            </p>
            <h3 className="text-sm font-normal mt-2">Herramientas utilizadas:</h3>
            <div className="flex gap-2 mt-1">
              <div className="flex gap-1 p-2 rounded-xl border-white border border-opacity-10 bg-blue-500/10 shadow-lg">
                <img src="/media/logos/typescript.png" className="w-4" alt="Logo TypeScript" />
                <span className="text-xs">TypeScript</span>
              </div>
              <div className="flex gap-1 p-2 rounded-xl border-white border border-opacity-10 bg-blue-300/10  shadow-lg">
                <img src="/media/logos/react.png" className="w-4" alt="Logo React" />
                <span className="text-xs">React</span>
              </div>
              <div className="flex gap-1 p-2 rounded-xl border-white border border-opacity-10 bg-orange-500/10  shadow-lg">
                <img src="/media/logos/git.png" className="w-4" alt="Logo Git" />
                <span className="text-xs">Git</span>
              </div>

              <div className="flex gap-1 p-2 rounded-xl border-white border border-opacity-10 bg-purple-500/10  shadow-lg">
                <img src="/media/logos/bootstrap.png" className="w-4" alt="Logo Bootstrap" />
                <span className="text-xs">Bootstrap</span>
              </div>
              <div className="flex gap-1 p-2 rounded-xl border-white border border-opacity-10 bg-orange-500/10  shadow-lg">
                <img src="/media/logos/postman.png" className="w-4" alt="Logo Postman" />
                <span className="text-xs">Postman</span>
              </div>
              <div className="flex gap-1 p-2 rounded-xl border-white border border-opacity-10 bg-black-500/10  shadow-lg">
                <img src="/media/logos/figma.png" className="w-4" alt="Logo Postman" />
                <span className="text-xs">Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { SobreMi };

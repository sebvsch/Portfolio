import { FC } from "react";
import { MiniCard } from "../components/MiniCard";

const Home: FC = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="mt-28">
                    <div className="flex gap-3 items-center justify-center">
                        <div>
                            <img src="../../public/media/perfil2.png" className="w-20 shadow-lg rounded-full"></img>
                        </div>
                        <div>
                            <div className="items-center text-3xl font-medium text-white">
                                <div>Sebastián A. Chico</div>
                            </div>
                            <div className="text-orange-500 font-normal">
                                {"<Web Developer />"}
                                <div>
                                    <p className="text-white font-extralight text-sm">
                                        Apasionado por la tecnologia, el diseño, <br />
                                        <span className="font-medium">lo simple y lo funcional.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-white font-semibold text-3xl mt-14 flex gap-1">
                        <span className="font-extralight">@</span>
                        <h1>Social</h1>
                        <i className="fa-solid fa-up-right-from-square text-xs align-top"></i>
                    </div>
                    <div className="flex gap-2 mt-3">
                        <MiniCard icon="fa-brands fa-x-twitter" nombre="Twitter" url="https://x.com/sebvsch" color="text-white" />
                        <MiniCard icon="fa-brands fa-github" nombre="GitHub" url="https://github.com/sebvsch" color="text-white" />
                        <MiniCard icon="fa-brands fa-linkedin" nombre="LinkedIn" url="https://linkedin.com/in/sebastianchico/" color="text-blue-400" />
                        <MiniCard icon="fa-brands fa-behance" nombre="Behance" url="https://behance.com/sebastianachico" color="text-white" />
                    </div>
                </div>
            </div>
        </>
    );
}

export { Home };

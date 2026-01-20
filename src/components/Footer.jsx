import { FaWhatsapp, FaFacebook } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="bg-[#101010] py-10 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-10 lg:gap-15">
            <div className="flex justify-center lg:block">
                <img src="/favicon.png" className="w-32 md:w-68" alt="Logo El Vikingo" />
            </div>
            <hr className="hidden lg:block text-white border-white border h-48 opacity-30"/>
            <div className="w-full lg:w-8xl text-white flex flex-col items-center justify-center my-auto">
                <p className="text-4xl font-jersey text-center">Contactanos</p>
                <div className="mt-6 flex flex-col md:flex-row gap-6 items-center">
                    <a className="flex items-center gap-3 hover:text-[#FF0000] transition-colors" 
                       href="https://api.whatsapp.com/send/?phone=573017380332&text=Hola,+Quiero+solicitar+una+cotización" 
                       target="_blank" rel="noreferrer"> 
                        <FaWhatsapp className="text-4xl"/> 
                        <div className="leading-none">
                            <p className="text-xl md:text-2xl font-jersey">
                                <span className="font-bold text-3xl">+</span>57 3017380332
                            </p>
                        </div>
                    </a>
                    <p className="hidden md:block text-4xl opacity-30">|</p>
                    <a className="flex items-center gap-4 hover:text-[#FF0000] transition-colors text-center md:text-left" 
                       href="https://www.facebook.com/people/El-Vikingo-Rodillos-y-Herramientas/61565746847894/" 
                       target="_blank" rel="noreferrer"> 
                        <FaFacebook className="text-4xl"/>
                        <p className="text-xl md:text-2xl font-jersey leading-tight">
                            El Vikingo <br className="md:hidden" /> Rodillos y Herramientas 
                        </p>
                    </a>
                </div>
            </div>
            <hr className="hidden lg:block text-white border-white border h-48 opacity-30"/>
            <div className="w-full lg:grow text-white flex flex-col items-center justify-center my-auto text-center">
                <div className="shrink-0">
                    <p className="text-4xl md:text-5xl font-jersey">
                        El Vikingo <span className="text-sm align-top">®</span>
                    </p>
                    <p className="text-3xl md:text-4xl font-yorkshire text-[#FF0000]">
                        Rodillos y Herramientas
                    </p>
                    <p className="text-sm md:text-lg mt-4 opacity-60">
                        {new Date().getFullYear()} | Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}
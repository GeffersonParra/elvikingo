import { FaWhatsapp, FaFacebook } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="bg-[#363636] py-10 px-48 flex gap-15">
            <img src="/favicon.png" className="w-40 col-span-2" alt="" />
            <hr className="text-white border-white border h-48"/>
            <div className="col-span-10 h-full w-fit text-white flex align-middle justify-center flex-col my-auto">
                <p className="text-4xl font-jersey">Siguenos</p>
                <div className="mt-4 flex gap-6 items-center">
                    <a className="flex items-center gap-2" href="https://api.whatsapp.com/send/?phone=573017380332&text=Hola,+Quiero+solicitar+una+cotización&type=phone_number&app_absent=0"> 
                        <FaWhatsapp className="text-5xl"/> 
                        <p className="text-3xl"><span className="font-bold text-4xl">+</span><span className="font-jersey">57 3017380332</span></p>
                    </a>
                    <p className="text-4xl">|</p>
                    <div className="flex items-center gap-4"> 
                        <FaFacebook className="text-5xl"/>
                        <p className="text-3xl font-jersey">El Vikingo Rodillos y Herramientas </p>
                    </div>
                </div>
            </div>
            <hr className="text-white border-white border h-48"/>
            <div className="col-span-10 h-full w-fit text-white flex align-middle justify-center flex-col my-auto">
                El Vikingo 
            </div>
        </footer>
    )
}
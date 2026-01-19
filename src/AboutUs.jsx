import { LuFlagTriangleLeft } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";

export const AboutUs = () => {
  return (
    <div className="flex flex-col px-30 py-12 min-h-screen">
      <div>
        <h1 className="text-5xl font-bold font-jersey text-[#FF0000]">
          Quienes somos
        </h1>
        <p className="italic text-5xl font-yorkshire mt-2">
          Una marca de excelencia!
        </p>
        <div className="flex flex-col">
          <div className=" gap-8 flex flex-col mt-6">
            <div className="flex">
              <div className="flex flex-col gap-8 w-1/2">
                <p className="text-3xl font-montserrat">
                  <b>Rodillos y herramientas el Vikingo</b> es una empresa con
                  sede en Bogotá D.C., Colombia, que opera dentro del sector de
                  la <b>construcción.</b>
                </p>
                <p className="text-3xl font-montserrat">
                  Somos una compañía que se dedica a la fabricación y
                  comercialización de rodillos para la aplicación de
                  recubrimientos para superficies
                </p>
                <h1 className="text-5xl font-bold font-jersey text-[#FF0000] flex items-center mb-2">
                  Mision
                </h1>
                <div className="flex w-full items-start">
                  <div className="min-w-[60px] flex justify-start">
                    <LuFlagTriangleLeft className="text-[#FF0000]" size={40} />
                  </div>
                  <p className="text-3xl font-montserrat">
                    Somos una empresa Colombiana enfocada en la fabricación de{" "}
                    <b>
                      herramientas de aplicación de recubrimientos para
                      superficies
                    </b>{" "}
                    con énfasis en la calidad y sostenibilidad dentro de todos
                    nuestros procesos.
                  </p>
                </div>
                <h1 className="text-5xl font-bold font-jersey text-[#FF0000] flex items-center mb-2">
                  Vision
                </h1>
                <div className="flex w-full items-start">
                  <div className="min-w-[60px] flex justify-start">
                    <TbTargetArrow className="text-[#FF0000]" size={40} />
                  </div>
                  <p className="text-3xl font-montserrat">
                    Establecer la marca de manera{" "}
                    <b>nacional e internacional</b> ofreciendo productos y
                    experiencia de servicio al cliente de alta calidad dentro
                    del ámbito de la construcción.
                  </p>
                </div>
              </div>
              <img src="/image3.png" alt="" className="w-135 mx-auto my-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

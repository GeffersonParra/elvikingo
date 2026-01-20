import { LuFlagTriangleLeft } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";
import { motion } from "framer-motion";
import { useEffect } from "react";

export const AboutUs = () => {
  useEffect(() => {
    document.title = "Nosotros | Rodillos Y Herramientas El Vikingo";
  }, []);

  return (
    <div className="flex flex-col px-6 md:px-12 lg:px-30 py-12 min-h-screen overflow-hidden">
      <div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-jersey text-[#FF0000]">
            Quienes somos
          </h1>
          <p className="italic text-4xl md:text-5xl font-yorkshire mt-2">
            Una marca de excelencia!
          </p>
        </motion.div>
        <div className="flex flex-col mt-6">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex flex-col gap-8 w-full lg:w-1/2 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              >
                <p className="text-2xl md:text-3xl font-montserrat">
                  <b>Rodillos y herramientas el Vikingo</b> es una empresa con
                  sede en Bogotá D.C., Colombia, que opera dentro del sector
                  de la <b>construcción.</b>
                </p>
                <p className="text-2xl md:text-3xl font-montserrat mt-4">
                  Somos una compañía que se dedica a la fabricación y
                  comercialización de rodillos para la aplicación de
                  recubrimientos para superficies
                </p>
              </motion.div>
              <div className="flex flex-col">
                <motion.div
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold font-jersey text-[#FF0000] flex items-center mb-2">
                    Mision
                  </h1>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                >
                  <div className="flex w-full items-start">
                    <div className="min-w-[50px] md:min-w-[60px] flex justify-start">
                      <LuFlagTriangleLeft className="text-[#FF0000]" size={40} />
                    </div>
                    <p className="text-2xl md:text-3xl font-montserrat">
                      Somos una empresa Colombiana enfocada en la fabricación de{" "}
                      <b>
                        herramientas de aplicación de recubrimientos para superficies
                      </b>{" "}
                      con énfasis en la calidad y sostenibilidad dentro de todos
                      nuestros procesos.
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="flex flex-col">
                <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold font-jersey text-[#FF0000] flex items-center mb-2">
                    Vision
                  </h1>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
                >
                  <div className="flex w-full items-start">
                    <div className="min-w-[50px] md:min-w-[60px] flex justify-start">
                      <TbTargetArrow className="text-[#FF0000]" size={40} />
                    </div>
                    <p className="text-2xl md:text-3xl font-montserrat">
                      Establecer la marca de manera{" "}
                      <b>nacional e internacional</b> ofreciendo productos y
                      experiencia de servicio al cliente de alta calidad dentro
                      del ámbito de la construcción.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.div
              className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <img 
                src="/image3.png" 
                alt="El Vikingo" 
                className="w-full max-w-[300px] md:max-w-[450px] lg:max-w-[500px] h-auto object-contain" 
              />
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};
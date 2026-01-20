import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    document.title = "Rodillos Y Herramientas El Vikingo";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-6 md:px-12 lg:px-30 min-h-[94vh] lg:h-[94vh] overflow-hidden">
      <div className="h-full w-full flex flex-col lg:flex-row justify-center items-center relative gap-8 lg:gap-0">
        <div className="text-center lg:text-left my-auto w-full lg:w-1/2">
          <motion.div
            className="flex flex-col gap-2 md:gap-4 justify-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-6xl md:text-8xl text-center lg:text-9xl font-jersey text-[#FF0000] leading-none">
              EL VIKINGO
            </p> 
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="font-yorkshire text-black text-center text-4xl md:text-6xl lg:text-8xl">
                Rodillos y Herramientas
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex flex-wrap gap-4 justify-center mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Link to="/products" className="btn-primary font-jersey text-2xl px-8 py-2">
              Catalogo
            </Link>
            <Link to="/contact" className="btn-secondary font-jersey text-2xl px-8 py-2">
              Contacto
            </Link>
          </motion.div>
        </div>
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img 
            src="/image2.png" 
            className="w-full mx-auto max-w-[20rem] md:max-w-[30rem] lg:max-w-[36rem] h-auto object-contain" 
            alt="Rodillos El Vikingo" 
          />
        </motion.div>
      </div>
    </div>
  );
};
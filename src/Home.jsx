import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center px-30 h-[94vh]">
      <div className="h-full w-full flex justify-center items-center relative">
        <div className="text-center my-auto ml-auto">
          <motion.div
            className="flex flex-col gap-4 justify-center btn-section"
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-9xl font-jersey text-[#FF0000]">EL VIKINGO</p>
            <motion.div
              className="flex flex-col gap-4 justify-center btn-section"
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <p className="font-yorkshire text-black text-8xl">
                Rodillos y Herramientas
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex gap-4 justify-center btn-section mt-4"
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Link to={"/products"} className="btn-primary mt-12 font-jersey">Catalogo</Link>
            <Link to={"/contact"} className="btn-secondary mt-12 font-jersey">
              Contacto
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src="/image2.png" className="w-[36rem] my-auto mr-auto" alt="" />
        </motion.div>
      </div>
    </div>
  );
};

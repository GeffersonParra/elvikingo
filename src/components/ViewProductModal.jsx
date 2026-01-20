import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { ImageGallery } from "./ImageGallery";
import { IoCloseOutline } from "react-icons/io5";
import { FaWeightHanging, FaPaintRoller, FaWhatsapp } from "react-icons/fa";
import { TbRulerMeasure, TbRulerMeasure2 } from "react-icons/tb";

export const ViewProductModal = ({
  selectedProduct,
  setSelectedProduct,
  origin,
}) => {
  const [quantity, setQuantity] = useState("");
  const getWhatsAppLink = (product) => {
    const phoneNumber = "573017380332";
    const message = `¡Hola! 👋 Vi esto en su catálogo y me interesa: ${product.name} ${product.reference}, y quisiera solicitar una cotización${quantity > 1 && ` para ${quantity} unidades`}. Gracias.`;
    return `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setQuantity(1);
      return;
    }
    const num = parseInt(value, 10);
    if (!isNaN(num)) {
      if (num > 300) {
        setQuantity(300);
      } else if (num < 1) {
        setQuantity(1);
      } else {
        setQuantity(num);
      }
    }
  };

  const categoryColors = {
    epoxico: "#FF6600",
    microfibra: "#092b4e",
    industrial: "#FF2F00",
    ovejero: "#ECE9D1",
    espuma: "#e5aeaf",
    premium: "#FFDD00",
    texturizado: "#B50000",
  };

  const categoryKey = String(selectedProduct.category).toLowerCase();
  const currentColor = categoryColors[categoryKey] || "#D60000";

  const modalContent = (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 md:p-8">
      <div
        className="absolute inset-0"
        onClick={() => setSelectedProduct(null)}
      ></div>
      <motion.div
        className="flex flex-col lg:flex-row bg-white relative rounded-2xl w-full max-w-6xl h-auto max-h-[85vh] overflow-y-auto shadow-2xl p-6 md:p-10 gap-6 lg:gap-12 z-10"
        initial={{
          opacity: 0,
          scale: 0,
          x: origin.x - window.innerWidth / 2,
          y: origin.y - window.innerHeight / 2,
        }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        exit={{
          opacity: 0,
          scale: 0,
          x: origin.x - window.innerWidth / 2,
          y: origin.y - window.innerHeight / 2,
        }}
        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        <button
          className="absolute right-4 top-4 text-4xl cursor-pointer hover:text-red-500 transition-colors z-20 bg-white/80 rounded-full lg:bg-transparent"
          onClick={() => setSelectedProduct(null)}
        >
          <IoCloseOutline />
        </button>
        <div className="w-full lg:w-5/12 lg:sticky h-fit top-10">
          <ImageGallery
            photos={selectedProduct.photos}
            name={selectedProduct.name}
            cover={false}
            className="w-full h-[400px] lg:h-[500px] rounded-xl overflow-hidden"
          />
        </div>
        <div className="flex flex-col w-full lg:w-7/12 mt-4 lg:mt-0 relative">
          <div className="border-b border-gray-100 pb-4">
            <div className="relative inline-block mt-2">
              <p
                className="font-jersey text-5xl text-white z-10 px-4 py-1 active-paint-title"
                style={{
                  "--color-text": currentColor,
                  color:
                    categoryKey === "ovejero" || categoryKey === "premium"
                      ? "black"
                      : "white",
                }}
              >
                {selectedProduct.name}
              </p>
              <p className="text-gray-400 font-montserrat mt-4">
                Referencia: {selectedProduct.reference}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-lg md:text-xl lg:text-2xl font-montserrat text-gray-700 leading-relaxed">
              {selectedProduct.description}
            </p>
          </div>
          <div className="mt-4 font-montserrat flex flex-col gap-2 text-xl mb-12">
            <p className="mb-2 font-jersey text-2xl">Especificaciones</p>
            {selectedProduct.weight && (
              <div className="flex items-center gap-2 text-gray-500">
                <FaWeightHanging className="text-gray-400" />
                <b>
                  Peso: <span>{selectedProduct.weight}</span>
                </b>
              </div>
            )}
            {selectedProduct.long && (
              <div className="flex items-center gap-2 text-gray-500">
                <TbRulerMeasure className="text-gray-400" />
                <b>
                  Largo: <span>{selectedProduct.long}</span>
                </b>
              </div>
            )}
            {selectedProduct.height && (
              <div className="flex items-center gap-2 text-gray-500">
                <TbRulerMeasure2 className="text-gray-400" />
                <b>
                  Alto: <span>{selectedProduct.height}</span>
                </b>
              </div>
            )}
            {selectedProduct.density && (
              <div className="flex items-center gap-2 text-gray-500">
                <FaPaintRoller className="text-gray-400" />
                <b>
                  Densidad de la felpa <span>{selectedProduct.density}</span>
                </b>
              </div>
            )}
            {selectedProduct.wire && (
              <div className="flex items-center gap-2 text-gray-500">
                <FaPaintRoller className="text-gray-400" />
                <b>
                  Calibre de la varilla: <span>{selectedProduct.wire}</span>
                </b>
              </div>
            )}
          </div>
          <div className="-bottom-4 sticky font-jersey flex gap-4 justify-center">
            <input
              type="number"
              className="w-56"
              placeholder="Cantidad a cotizar"
              value={quantity}
              onChange={(e) => handleChange(e)}
            />
            <a
              href={getWhatsAppLink(selectedProduct)}
              className="btn-primary shadow-[0_-10px_30px_-5px_rgba(0,0,0,0.3)] flex items-center gap-3"
            >
              <FaWhatsapp className="text-3xl" />
              Cotizar
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
  return ReactDOM.createPortal(modalContent, document.body);
};

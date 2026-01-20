import { DB } from "./products/products";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ImageGallery } from "./components/ImageGallery";
import { ViewProductModal } from "./components/ViewProductModal";

export const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = useMemo(() => {
    return DB.filter((product) => {
      const name = product.name.toLowerCase();
      const ref = product.reference.toLowerCase();
      const cat = product.category.toLowerCase();
      const search = searchTerm.toLowerCase();
      return name.includes(search) || ref.includes(search) || cat.includes(search);
    });
  }, [searchTerm]);

  const handleOpenModal = (e, product) => {
    setOrigin({ x: e.clientX, y: e.clientY });
    setSelectedProduct(product);
  };

  useEffect(() => {
    document.title = "Rodillos Y Herramientas El Vikingo";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-10 lg:px-30 min-h-screen py-8">
      {selectedProduct && (
        <ViewProductModal
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          origin={origin}
        />
      )}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full rounded-xl border border-gray-100 shadow-2xl flex flex-col lg:grid lg:grid-cols-12 p-4 md:p-8 gap-6 bg-white"
      >
        <div className="col-span-12 lg:col-span-3">
          <div className="lg:sticky lg:top-24 z-20">
            <input
              type="text"
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#FF0000] outline-none transition-all shadow-sm"
              placeholder="Filtra por nombre, ref o categoría..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
               <p className="text-xs text-gray-400 mt-2 ml-1">
                 Mostrando {filteredProducts.length} resultados
               </p>
            )}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, idx) => (
            <div
              key={idx}
              className={`card ${String(product.category).toLowerCase()} h-fit p-4 bg-white shadow-sm rounded-xl border border-gray-50 hover:shadow-md transition-shadow`}
            >
              <ImageGallery
                photos={product.photos}
                name={product.name}
                className="w-full h-100 md:h-64"
              />
              <div className="grid grid-cols-12 mt-3 items-center gap-2">
                <div className="col-span-8 md:col-span-9 flex flex-col justify-center">
                  <p className="font-montserrat font-bold text-gray-800 leading-tight text-sm md:text-base">
                    {product.name}{" "}
                    <span className="text-[#FF0000] text-xs block md:inline">
                      {product.reference}
                    </span>
                  </p>
                  <div className="mt-1">
                    <span
                      className={`font-montserrat text-[10px] md:text-xs badge-${String(product.category).toLowerCase()}`}
                    >
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="col-span-4 md:col-span-3 flex justify-end items-center">
                  <button
                    className="view-btn text-xs md:text-sm px-3 py-2"
                    onClick={(e) => handleOpenModal(e, product)}
                  >
                    Ver
                  </button>
                </div>
              </div>
            </div>
          ))
          ) : (
            <div className="col-span-full py-20 text-center text-gray-400 font-montserrat">
              No se encontraron productos que coincidan con "{searchTerm}"
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

import ReactDOM from 'react-dom';
import { ImageGallery } from './ImageGallery';
import { IoCloseOutline } from "react-icons/io5";

export const ViewProductModal = ({ selectedProduct, setSelectedProduct }) => {
    const modalContent = (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 md:p-8">
            <div className="absolute inset-0" onClick={() => setSelectedProduct(null)}></div>
            <div className="flex flex-col lg:flex-row bg-white relative rounded-2xl w-full max-w-6xl h-auto max-h-[90vh] overflow-y-auto shadow-2xl p-6 md:p-10 gap-6 lg:gap-12 z-10">
                <button 
                    className='absolute right-4 top-4 text-4xl cursor-pointer hover:text-red-500 transition-colors z-20 bg-white/80 rounded-full lg:bg-transparent'
                    onClick={() => setSelectedProduct(null)}
                >
                    <IoCloseOutline />
                </button>
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <ImageGallery 
                        photos={selectedProduct.photos} 
                        name={selectedProduct.name} 
                        cover={false}
                        className="w-full h-[400px] md:h-[400px] lg:h-[500px]"
                    />
                </div>
                <div className='flex flex-col w-full lg:w-7/12 mt-4 lg:mt-0'>
                    <div className="border-b border-gray-100 pb-4">
                        <p className='font-jersey text-4xl md:text-5xl lg:text-6xl text-red-500 leading-none'>
                            {selectedProduct.name}
                        </p>
                        <p className="text-gray-400 font-montserrat mt-2">Referencia: {selectedProduct.reference}</p>
                    </div>
                    <div className="mt-6">
                        <p className='text-lg md:text-xl lg:text-2xl font-montserrat text-gray-700 leading-relaxed'>
                            {selectedProduct.description}
                        </p>
                    </div>
                    <div className="h-8 lg:hidden"></div>
                </div>
            </div>
        </div>
    );
    return ReactDOM.createPortal(modalContent, document.body);
};
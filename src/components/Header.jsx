import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LuMenu, LuX } from "react-icons/lu";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `relative overflow-hidden px-6 py-2 transition-all duration-300 inline-block z-10 font-bold ${
      isActive ? "text-white active-paint" : "text-gray-700 hover:text-[#FF0000]"
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-[100]">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to={"/"} onClick={() => setIsOpen(false)}>
          <img src="/image1.png" className="w-20 md:w-24" alt="Logo" />
        </NavLink>
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <LuX size={30} /> : <LuMenu size={30} />}
          </button>
        </div>
        <div className="hidden lg:flex space-x-4">
          <NavLink to="/about" className={navClass}>Nosotros</NavLink>
          <NavLink to="/products" className={navClass}>Productos</NavLink>
          <NavLink to="/contact" className={navClass}>Contacto</NavLink>
        </div>
      </div>
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col items-center pb-6 space-y-4 bg-white border-t border-gray-100">
          <NavLink 
            to="/about" 
            className={navClass} 
          >
            Nosotros
          </NavLink>
          <NavLink 
            to="/products" 
            className={navClass} 
          >
            Productos
          </NavLink>
          <NavLink 
            to="/contact" 
            className={navClass} 
          >
            Contacto
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
import { NavLink } from "react-router-dom";

export const Header = () => {
  const navClass = ({ isActive }) => 
  `relative overflow-hidden px-6 py-2 transition-all duration-300 inline-block z-10 ${
    isActive ? "text-white active-paint" : "text-gray-700 hover:text-[#FF0000]"
  }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to={"/"}>
          <img src="/image1.png" className="w-24" alt="Logo" />
        </NavLink>
        <div className="space-x-6">
          <NavLink to="/about" className={navClass}>Nosotros</NavLink>
          <NavLink to="/products" className={navClass}>Productos</NavLink>
          <NavLink to="/contact" className={navClass}>Contacto</NavLink>
        </div>
      </div>
    </nav>
  );
};
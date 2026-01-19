export const Header = () => {
  return (
    <>
      <nav class="bg-white shadow-md sticky top-0 z-50">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
          <img src="/image1.png" className="w-24" alt="" />
          <div class="space-x-6">
            <a href="#productos" class="hover:text-blue-600">
              Productos
            </a>
            <a href="#contacto" class="hover:text-blue-600">
              Contacto
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

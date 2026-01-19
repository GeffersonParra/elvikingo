export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center px-30 h-[94vh]">
      <div className="h-full w-full flex justify-center items-center relative">
        <div className="text-center my-auto ml-auto">
          <p className="text-9xl font-jersey text-[#FF0000]">EL VIKINGO</p>
          <p className="font-yorkshire text-black text-8xl">
            Rodillos y Herramientas
          </p>
          <div className="flex gap-8 justify-center">
            <button className="btn-primary mt-12 font-jersey">Catalogo</button>
            <button className="btn-secondary mt-12 font-jersey">Contacto</button>
          </div>
        </div>
        <img src="/image2.png" className="w-[36rem] my-auto mr-auto" alt="" />
      </div>
    </div>
  );
};

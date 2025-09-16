import React from "react";
export default function Footer() {
  return (
    <div className=" flex justify-center items-center max-w-[1920px] bg-black px-2 py-2 w-full">
      <div className=" flex  justify-between  py-[8px] px-4  bg-gradient-to-r w-full from-footer via-purple-500 to-footerSky">
        <section className="text-textBase text-[14px] ">
          <h2 className="font-bold">Muestra de Spotify</h2>
          <p className=" font-semibold text-[16px] ">
            Regístrate para acceder a canciones y podcasts ilimitados con
            algunos anuncios. No necesitas tarjeta de crédito.
          </p>
        </section>
        <button className="  px-8 py-[9px] rounded-full bg-textBase text-black font-bold hover:bg-gray-200">
          Regístrate gratis
        </button>
      </div>
    </div>
  );
}

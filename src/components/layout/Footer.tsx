import React from "react";

export default function Footer() {
  return (
    <div className="bg-black w-full px-2 py-2 h-[15%]">
      <div className=" w-full py-[8px] flex items-center justify-between px-4 bg-gradient-to-r from-footer via-purple-500 to-footerSky">
        <div className="text-textBase text-[14px] ">
          <h2 className="font-bold">Muestra de Spotify</h2>
          <p className=" font-semibold text-[16px] ">
            Regístrate para acceder a canciones y podcasts ilimitados con
            algunos anuncios. No necesitas tarjeta de crédito.
          </p>
        </div>
        <button className=" flex justify-center items-center px-8 py-[9px] rounded-full  bg-textBase text-black font-bold hover:bg-gray-200">
          Regístrate gratis
        </button>
      </div>
    </div>
  );
}

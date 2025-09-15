import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-1/4 px-2 bg-black h-[85%]">
      <div className=" overflow-y-auto">
        <div className="bg-cardBaseContainer rounded-xl  flex flex-col">
          <div className="sticky top-0 z-10 bg-cardBaseContainer px-1 py-3 rounded-t-xl shadow-md">
            <span className="flex justify-between items-center px-4">
              <h2 className="font-bold text-white">Tu biblioteca</h2>
              <button
                className="text-house rounded-full hover:bg-hover px-2 py-2 transition-colors duration-200"
                aria-label="Crea una playlist o una carpeta"
              >
                <svg
                  viewBox="0 0 16 16"
                  height="18"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75" />
                </svg>
              </button>
            </span>
          </div>

          <div className="p-2 space-y-4">
            <section className="bg-fondoHouse px-5 py-3 rounded-xl">
              <h2 className="font-bold text-white">Crea tu primera playlist</h2>
              <h3 className="py-2 font-semibold text-white text-[16px]">
                ¡Es muy fácil! Te vamos a ayudar
              </h3>
              <button className="mt-2 mb-1 px-4 py-1 rounded-3xl bg-white text-black font-bold hover:bg-gray-200 transition-colors duration-200">
                Crear playlist
              </button>
            </section>

            <section className="bg-fondoHouse px-5 py-3 rounded-xl">
              <h2 className="font-bold text-white">
                Busquemos algunos podcasts para seguir
              </h2>
              <h3 className="py-2 font-semibold text-white text-[16px]">
                Te mantendremos al tanto de los nuevos episodios.
              </h3>
              <button className="mt-2 mb-1 px-4 py-1 rounded-3xl bg-white text-black font-bold hover:bg-gray-200 transition-colors duration-200">
                Explorar podcasts
              </button>
            </section>
          </div>
          <footer className="bg-cardBaseContainer backdrop-blur shadow-[0_-6px_16px_rgba(0,0,0,0.45)] px-4 py-5 rounded-b-xl">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[13px] text-white">
              <li>
                <a href="#" className="hover:underline">
                  Legal
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Seguridad y Centro de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sobre los anuncios
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Accesibilidad
                </a>
              </li>
            </ul>

            <button
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-hover px-4 py-2 text-sm font-semibold text-white hover:border-white transition"
              aria-label="Cambiar idioma"
            >
              <svg
                viewBox="0 0 16 16"
                className="w-4 h-4 fill-current"
                aria-hidden="true"
              >
                <path d="M8 0a8 8 0 108 8A8 8 0 008 0zm0 1.5a6.5 6.5 0 016.11 4H9.86A10.7 10.7 0 008 2.08 10.7 10.7 0 006.14 5.5H1.89A6.5 6.5 0 018 1.5zM5.86 7A12.7 12.7 0 016 5.5h4A12.7 12.7 0 0110.14 7zm0 2A12.7 12.7 0 016 10.5h4A12.7 12.7 0 0110.14 9zM1.89 6.5h4.25A12.2 12.2 0 016 8a12.2 12.2 0 01-.86 1.5H1.89A6.46 6.46 0 011.5 8a6.46 6.46 0 01.39-1.5zm12.22 0A6.46 6.46 0 0114.5 8a6.46 6.46 0 01-.39 1.5h-4.25A12.2 12.2 0 0010 8a12.2 12.2 0 00-.86-1.5zM8 14.5a6.5 6.5 0 01-6.11-4h4.25A10.7 10.7 0 008 13.92 10.7 10.7 0 009.86 10.5h4.25A6.5 6.5 0 018 14.5z" />
              </svg>
              Español de Latinoamérica
            </button>
          </footer>
        </div>
      </div>
    </aside>
  );
}

import CardPoster from "@/components/ui/CardPoster";
import MusicCarrusel from "@/components/ui/MusicCarrusel";
import React from "react";

export default function Home() {
  return (
    <div className="flex h-[555.600px] bg-black flex-1 w-fit md:w-full">
      <aside className="w-1/4 px-2 bg-black  flex flex-col flex-1 overflow-auto">
        <div className="bg-cardBaseContainer rounded-xl h-full flex flex-col">
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
                  <title>Crea una playlist o una carpeta</title>
                  <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75" />
                </svg>
              </button>
            </span>
          </div>

          <div className="p-2 space-y-4 overflow-auto h-[323px]">
            <section className="bg-fondoHouse px-5 py-3 rounded-xl">
              <h2 className="font-bold text-white">Crea tu primera playlist</h2>
              <h3 className="py-2 font-semibold text-white text-[16px]">
                ¡Es muy fácil! Te vamos a ayudar
              </h3>
              <button className="mt-2 mb-1 px-4 py-1 rounded-3xl bg-white text-black font-bold hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
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
              <button className=" cursor-pointer mt-2 mb-1 px-4 py-1 rounded-3xl bg-white text-black font-bold hover:bg-gray-200 transition-colors duration-200">
                Explorar podcasts
              </button>
            </section>
          </div>

          <footer className="bg-cardBaseContainer mt-auto backdrop-blur shadow-[0_-6px_16px_rgba(0,0,0,0.45)] px-4 pb-[25px] pt-[30px] rounded-b-xl ">
            <ul className="flex flex-wrap gap-x-6 gap-y-1 text-[13px] text-headerTexto">
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
              className="mt-5 inline-flex items-center  gap-2 rounded-full border border-hover px-4 py-2 text-sm font-bold text-white hover:border-white transition"
              aria-label="Cambiar idioma"
            >
              <svg
                viewBox="0 0 16 16"
                className="w-4 h-4 fill-current"
                aria-hidden="true"
              >
                <path d="M8.152 16H8a8 8 0 1 1 .152 0m-.41-14.202c-.226.273-.463.713-.677 1.323-.369 1.055-.626 2.496-.687 4.129h3.547c-.06-1.633-.318-3.074-.687-4.129-.213-.61-.45-1.05-.676-1.323-.194-.235-.326-.285-.385-.296h-.044c-.055.007-.19.052-.391.296M4.877 7.25c.062-1.771.34-3.386.773-4.624q.148-.427.329-.806a6.51 6.51 0 0 0-4.436 5.43zm-3.334 1.5a6.51 6.51 0 0 0 4.436 5.43 8 8 0 0 1-.33-.806c-.433-1.238-.71-2.853-.772-4.624zm4.835 0c.061 1.633.318 3.074.687 4.129.214.61.451 1.05.677 1.323.202.244.336.29.391.297l.044-.001c.06-.01.19-.061.385-.296.226-.273.463-.713.676-1.323.37-1.055.626-2.496.687-4.129zm5.048 0c-.061 1.771-.339 3.386-.772 4.624q-.123.353-.268.674a6.5 6.5 0 0 0 4.071-5.298zm3.031-1.5a6.51 6.51 0 0 0-4.071-5.298q.145.322.268.674c.433 1.238.711 2.853.772 4.624z"></path>
              </svg>
              Español de Latinoamérica
            </button>
          </footer>
        </div>
      </aside>

      <section className="px-7  mr-1 bg-gradient-to-b from-fondoHouse to-cardBaseContainer  w-3/4 rounded-xl h-[555.600px] overflow-auto">
        <div className="flex justify-between py-5">
          <button className="text-white hover:underline font-bold text-2xl cursor-pointer px-2">
            Canciones del momento
          </button>
          <button className="hover:underline text-house cursor-pointer font-bold">
            Mostrar todo
          </button>
        </div>
        <div className="flex flex-row pb-5">
          <MusicCarrusel
            title=""
            itemWidth={176}
            gap={16}
            slidesToShow={6}
            slidesToScroll={3}
          >
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757910978/xcwkkobv3t65phgkhudf.webp"
              typeCard="playlist"
              title="Shiny"
              description="Easy kid"
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757973629/rt0iwpdi6ixr7q9pbasi.webp"
              typeCard="playlist"
              title="YOGURCITO REMIX (feat.Kris R.,ROA)"
              description="Blessd, Anuel AA, Yan Block, Luar La L"
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757973991/wquapvg4supzawzowthx.webp"
              typeCard="playlist"
              title="TODO QUE VER"
              description="Jere Klein, Katteyes, Mateo on the Beatz"
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757959883/xk6q8wjqqq8t4tdjaj9f.webp"
              typeCard="playlist"
              title="GuabanSexxx"
              description="Raw Alejandro"
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757974029/rtl2fu3yasqs3qyv7tcr.webp"
              typeCard="playlist"
              title="QLOO*"
              description="Young Cister, Kreamly"
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757961714/aodpvbz3c97pyt9orzxc.webp"
              typeCard="playlist"
              title="Baile INoLVIDABLE"
              description="Bad Bunny"
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757974131/hvzr2t7kxwpwi3fhq1oe.webp"
              typeCard="playlist"
              title="ESTA ES TU CASA NENA"
              description="Kapo, Camilo"
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757974106/i8bxmgrqc74rjgkasuh6.webp"
              typeCard="playlist"
              title="COQUETA"
              description="Fuerza Regida, Grupo Frontera"
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
          </MusicCarrusel>
        </div>

        <div className="flex justify-between py-5">
          <button className="text-white hover:underline font-bold text-2xl cursor-pointer px-2">
            Artistas populares
          </button>
          <button className="hover:underline text-house cursor-pointer font-bold">
            Mostrar todo
          </button>
        </div>
        <div className="flex flex-row pb-5">
          <MusicCarrusel
            title=""
            itemWidth={176}
            gap={16}
            slidesToShow={6}
            slidesToScroll={3}
          >
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757972532/ixfhwnh6twahbqouixxx.webp"
              typeCard="artist"
              title="Bab Bunny"
              description="Artista"
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757972480/nxj59jkvg0ikvpknvr4t.webp"
              typeCard="artist"
              title="Karol G"
              description="Artista"
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757973106/qygkfjbcqhyucjsa6kas.webp"
              typeCard="artist"
              title="Raw Alejandro"
              description="Artista"
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757973201/avbmicuei1xmrbuzpfin.webp"
              typeCard="artist"
              title="J Balvin"
              description="Artista"
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757973263/yai6ff6nnbuygy0jbiz6.webp"
              typeCard="artist"
              title="Feid"
              description="Artista"
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757973363/jlvn0tx8v1qqxpesv8ai.webp"
              typeCard="artist"
              title="Danny Ocean"
              description="Artista"
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757973334/cqk2hg85dritxarxbfon.webp"
              typeCard="artist"
              title="Shakira"
              description="Artista"
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757973381/lizo6gdctce4qqyatzxa.webp"
              typeCard="artist"
              title="Beéle"
              description="Artista"
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
          </MusicCarrusel>
        </div>

        <div className="flex justify-between py-5">
          <button className="text-white hover:underline font-bold text-2xl cursor-pointer px-2">
            Álbumes y sencillos populares
          </button>
          <button className="hover:underline text-house cursor-pointer font-bold">
            Mostrar todo
          </button>
        </div>
        <div className="flex flex-row pb-5">
          <MusicCarrusel
            title=""
            itemWidth={176}
            gap={16}
            slidesToShow={6}
            slidesToScroll={3}
          >
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757961714/aodpvbz3c97pyt9orzxc.webp"
              typeCard="Playlist"
              title="DeBí TiRAR MáS FOToS"
              description="Bad Bunny"
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757972082/zatv97iknzhglapy1fgn.webp"
              typeCard="Playlist"
              title="Un Verano Sin ti"
              description="Bad Bunny"
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757967300/adccxreqp1t142blncyn.webp"
              typeCard="Playlist"
              title="BORONDO"
              description="Beéle"
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757974469/mu6ut5qn7vwzrggz38pe.webp"
              typeCard="Playlist"
              title="Cosa Nuestra"
              description="Raw Alejandro"
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757974492/osp6dvqvziznik3wfht4.webp"
              typeCard="Playlist"
              title="LO MISMO DE SIEMPRE"
              description="Mora"
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757974548/mzd95fu2xzmpxkzapi7k.webp"
              typeCard="Playlist"
              title="Homerun"
              description="Paulo Londra"
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757974526/zm8emxw6tu9smgm99pjw.webp"
              typeCard="Playlist"
              title="MAÑANA SERÁ BONITO"
              description="KAROL G"
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757974641/kjjrbhtpo6enaeshpetl.webp"
              typeCard="Playlist"
              title="LA CIUDAD"
              description="Alleh, Yorghaki"
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
          </MusicCarrusel>
        </div>
        <div className="flex justify-between py-5">
          <button className="text-white hover:underline font-bold text-2xl cursor-pointer px-2">
            Estaciones populares
          </button>
          <button className="hover:underline text-house cursor-pointer font-bold">
            Mostrar todo
          </button>
        </div>
        <div className="flex flex-row pb-5">
          <MusicCarrusel
            title=""
            itemWidth={176}
            gap={16}
            slidesToShow={6}
            slidesToScroll={3}
          >
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757974976/lb8czmsvgm9nwhb3xfbl.webp"
              typeCard="Playlist"
              title=""
              description="Con Puro Sentimiento, Pamela Franco, Los..."
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757975031/fp3yh8inhlruskdytb7w.webp"
              typeCard="Playlist"
              title=""
              description="Con Arena Hash, Los Mojarras, Nosequien y..."
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757975092/wuvy3o8bvggtdmcxhbe8.webp"
              typeCard="Playlist"
              title=""
              description="Con Bacilos, Vilma Palma e Vampiros, Sin Bander..."
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757975073/hpepcfuqu8s8kmshu0qs.webp"
              typeCard="Playlist"
              title=""
              description="Con Kapo, LAGOS, ELENA ROSE y más..."
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757962175/bzz4lc5qkokgkgbyebkn.webp"
              typeCard="Playlist"
              title=""
              description="Con KAROL G, Arcángel, Quevedo y más"
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757975055/nw0k5apccaaiaihtivbt.webp"
              typeCard="Playlist"
              title=""
              description="Con Feid, Manuel Turizo, Shakira y más"
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757975015/sswclyczb5m6bojhmrn0.webp"
              typeCard="Playlist"
              title=""
              description="Con Tego Calderón, Zion, Luny Tunes y más"
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757975460/ecsgbxadkbrsupnbnfbu.webp"
              typeCard="Playlist"
              title=""
              description="Con La Única Tropica, Gran Orquesta..."
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
          </MusicCarrusel>
        </div>
        <div className="flex justify-between py-5">
          <button className="text-white hover:underline font-bold text-2xl cursor-pointer px-2">
            Listas destacadas
          </button>
          <button className="hover:underline text-house cursor-pointer font-bold">
            Mostrar todo
          </button>
        </div>
        <div className="flex flex-row pb-5">
          <MusicCarrusel
            title=""
            itemWidth={176}
            gap={16}
            slidesToShow={6}
            slidesToScroll={3}
          >
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757962507/po5wsgkz3i4ofdver3ct.webp"
              typeCard="Playlist"
              title=""
              description="Tu actualización semanal de las canciones más..."
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757974310/xwpgwn6gihysl2fcoy3a.webp"
              typeCard="Playlist"
              title=""
              description="Tu actualización semanal de las canciones más..."
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757974361/zbo5rwqtg6d66pw4ujzy.webp"
              typeCard="Playlist"
              title=""
              description="Tu actualización diaria de las canciones más..."
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757974290/g3h15h7jpt7vu7renguc.webp"
              typeCard="Playlist"
              title=""
              description="Tu actualización diaria de las canciones más..."
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757974351/xj5vdoq358vayqr5jgud.webp"
              typeCard="Playlist"
              title=""
              description="Tu actualización diaria de las canciones más virale..."
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
            <CardPoster
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1757974301/s8om8hdzmq7kexpulxin.webp"
              typeCard="Playlist"
              title=""
              description="Tu actualización diaria de las canciones más virale..."
              alt="Fondo negro con una copa centrada que contiene un liquido azul y una cereza en su borde."
            />
          </MusicCarrusel>
        </div>
        <footer className="mt-10 border-t border-BarraFooter px-4 py-10 ">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between text-house text-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white font-bold mb-3 text-base">
                  Compañía
                </h3>
                <ul className="space-y-2 font-semibold">
                  <li>
                    <a href="#" className="hover:underline">
                      Acerca de
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Empleo
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      For the Record
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold mb-3 text-base">
                  Comunidades
                </h3>
                <ul className="space-y-2 font-semibold">
                  <li>
                    <a href="#" className="hover:underline">
                      Para artistas
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Desarrolladores
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Publicidad
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Inversionistas
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Proveedores
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold mb-3 text-base">
                  Enlaces útiles
                </h3>
                <ul className="space-y-2 font-semibold">
                  <li>
                    <a href="#" className="hover:underline">
                      Ayuda
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      App móvil gratis
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Contenido popular por país
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Import your music
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold mb-3 text-base">
                  Planes de Spotify
                </h3>
                <ul className="space-y-2 font-semibold">
                  <li>
                    <a href="#" className="hover:underline">
                      Premium Individual
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Premium Duo
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Premium Familiar
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Premium para Estudiantes
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Versión gratuita
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex space-x-4 mt-8 md:mt-0">
              <a
                href="#"
                className="group w-10 h-10 rounded-full bg-fondoHouse flex items-center justify-center transition-colors duration-200 hover:bg-Enlaces focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                title="Instagram"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 16 16"
                  className="w-5 h-5 text-white transition-colors duration-200 group-hover:text-white"
                  role="img"
                  aria-hidden="true"
                >
                  <title>Instagram</title>
                  <path
                    fill="currentColor"
                    d="M8 1.44c2.136 0 2.389.009 3.233.047.78.036 1.203.166 1.485.276.348.128.663.332.921.598.266.258.47.573.599.921.11.282.24.706.275 1.485.039.844.047 1.097.047 3.233s-.008 2.389-.047 3.232c-.035.78-.166 1.204-.275 1.486a2.65 2.65 0 0 1-1.518 1.518c-.282.11-.706.24-1.486.275-.843.039-1.097.047-3.233.047s-2.39-.008-3.232-.047c-.78-.035-1.204-.165-1.486-.275a2.5 2.5 0 0 1-.921-.599 2.5 2.5 0 0 1-.599-.92c-.11-.282-.24-.706-.275-1.486-.038-.844-.047-1.096-.047-3.232s.009-2.39.047-3.233c.036-.78.166-1.203.275-1.485.129-.348.333-.663.599-.921a2.5 2.5 0 0 1 .92-.599c.283-.11.707-.24 1.487-.275.843-.038 1.096-.047 3.232-.047L8 1.441zm.001-1.442c-2.172 0-2.445.01-3.298.048-.854.04-1.435.176-1.943.373a3.9 3.9 0 0 0-1.417.923c-.407.4-.722.883-.923 1.417-.198.508-.333 1.09-.372 1.942S0 5.826 0 8c0 2.172.01 2.445.048 3.298.04.853.174 1.433.372 1.941.2.534.516 1.017.923 1.417.4.407.883.722 1.417.923.508.198 1.09.333 1.942.372s1.126.048 3.299.048 2.445-.01 3.298-.048c.853-.04 1.433-.174 1.94-.372a4.1 4.1 0 0 0 2.34-2.34c.199-.508.334-1.09.373-1.942S16 10.172 16 7.999s-.01-2.445-.048-3.298c-.04-.853-.174-1.433-.372-1.94a3.9 3.9 0 0 0-.923-1.418A3.9 3.9 0 0 0 13.24.42c-.508-.197-1.09-.333-1.942-.371-.851-.041-1.125-.05-3.298-.05z"
                  />
                  <path
                    fill="currentColor"
                    d="M8 3.892a4.108 4.108 0 1 0 0 8.216 4.108 4.108 0 0 0 0-8.216m0 6.775a2.668 2.668 0 1 1 0-5.335 2.668 2.668 0 0 1 0 5.335m4.27-5.978a.96.96 0 1 0 0-1.92.96.96 0 0 0 0 1.92"
                  />
                </svg>
              </a>

              <a
                href="#"
                className="group w-10 h-10 rounded-full bg-fondoHouse flex items-center justify-center transition-colors duration-200 hover:bg-Enlaces focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                title="Twitter"
                aria-label="Twitter"
              >
                <svg
                  viewBox="0 0 16 16"
                  className="w-5 h-5 text-white transition-colors duration-200 group-hover:text-white"
                  role="img"
                  aria-hidden="true"
                >
                  <title>Twitter</title>
                  <path
                    fill="currentColor"
                    d="M13.54 3.889a2.97 2.97 0 0 0 1.333-1.683 6 6 0 0 1-1.929.738 3 3 0 0 0-.996-.706 3 3 0 0 0-1.218-.254 2.92 2.92 0 0 0-2.143.889 2.93 2.93 0 0 0-.889 2.15q0 .318.08.691a8.5 8.5 0 0 1-3.484-.932A8.5 8.5 0 0 1 1.532 2.54a3 3 0 0 0-.413 1.523q0 .778.361 1.445.36.668.988 1.08a2.9 2.9 0 0 1-1.373-.374v.04q0 1.088.69 1.92a2.97 2.97 0 0 0 1.739 1.048 2.94 2.94 0 0 1-1.365.056 2.94 2.94 0 0 0 1.063 1.5 2.95 2.95 0 0 0 1.77.603 5.94 5.94 0 0 1-3.77 1.302q-.365 0-.722-.048A8.4 8.4 0 0 0 5.15 14q1.358 0 2.572-.361 1.215-.36 2.147-.988a9 9 0 0 0 1.683-1.46q.75-.834 1.234-1.798a9.5 9.5 0 0 0 .738-1.988 8.4 8.4 0 0 0 .246-2.429 6.2 6.2 0 0 0 1.508-1.563q-.84.373-1.738.476"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="group w-10 h-10 rounded-full bg-fondoHouse flex items-center justify-center transition-colors duration-200 hover:bg-Enlaces focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                title="Facebook"
                aria-label="Facebook"
              >
                <svg
                  viewBox="0 0 16 16"
                  className="w-5 h-5 text-white transition-colors duration-200 group-hover:text-white"
                  role="img"
                  aria-hidden="true"
                >
                  <title>Facebook</title>
                  <path
                    fill="currentColor"
                    d="M16 8a8 8 0 1 0-9.25 7.903v-5.59H4.719V8H6.75V6.237c0-2.005 1.194-3.112 3.022-3.112.875 0 1.79.156 1.79.156V5.25h-1.008c-.994 0-1.304.617-1.304 1.25V8h2.219l-.355 2.313H9.25v5.59A8 8 0 0 0 16 8"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-10 border-t border-BarraFooter px-4 py-5 "></div>
          <div className="text-house text-sm  font-bold">© 2025 Spotify AB</div>
        </footer>
      </section>
    </div>
  );
}

export default function SearchBar() {
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full max-w-2xl pr-70 ">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-300">
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            fill="currentColor"
            className="text-house"
          >
            <path d="M10.533 1.2789C5.35215 1.2789 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0316 16.4762 17.6902L20.2071 21.4211C20.5264 21.7404 21.0639 21.7404 21.3832 21.4211C21.7025 21.1018 21.7025 20.5643 21.3832 20.245L17.6523 16.5141C18.9937 14.8614 19.799 12.8049 19.799 10.5709C19.799 5.43187 15.713 1.2789 10.533 1.2789ZM3.12598 10.5579C3.12598 6.51328 6.48834 3.15092 10.533 3.15092C14.5777 3.15092 17.9401 6.51328 17.9401 10.5579C17.9401 14.6026 14.5777 17.965 10.533 17.965C6.48834 17.965 3.12598 14.6026 3.12598 10.5579Z" />
          </svg>
        </span>

        <input
          type="text"
          placeholder="¿Qué quieres reproducir?"
          className=" flex items-center
            w-[450px] h-12 rounded-full 
            bg-fondoHouse text-house text-[17px] 
            pl-12 pr-24 placeholder-house
            outline-none focus:outline-none
            focus:ring-2 focus:ring-white
            hover:bg-black
            transition-all duration-300 font-semibold"
        />
      </div>
    </div>
  );
}

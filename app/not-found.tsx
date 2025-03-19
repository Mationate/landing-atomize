import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238] relative">
      <h1 className="text-[6rem] sm:text-[9rem] md:text-[12rem] font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-color3bs px-2 text-xs sm:text-sm rounded rotate-12 absolute">
        ¡Atrapados en un mal corte!
      </div>
      <button className="mt-5">
        <Link
          href="/"
          className="relative inline-block text-xs sm:text-sm font-medium text-color3bs group active:text-color3bs focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-color3bs group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="relative block px-6 py-3 sm:px-8 bg-[#1A2238] border border-current">
            Volvamos al inicio
          </span>
        </Link>
      </button>

      {/* Imagen en la esquina inferior derecha */}
      <img
        src="/images/404icon.png"
        alt="404 icon"
        className="absolute bottom-0 right-5 sm:right-10 md:right-20 m-5 w-[10rem] h-[15rem] sm:w-[15rem] sm:h-[20rem] md:w-[20rem] md:h-[35rem]"
      />
    </main>
  );
}

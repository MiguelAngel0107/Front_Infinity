import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section class="relative bg-[url('img/imgFondo.jpg')] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-6xl">
              Agencia Digital
              <span class="sm:block"> Own Infinity </span>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-violet-800 hover:border-violet-800 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                to="/servicios"
              >
                Agendar Reunion
              </Link>

              <Link
                class="block w-full rounded border border-violet-800 bg-violet-800 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 hover:border-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                to="/contacto"
              >
                Sobre Nosotros
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

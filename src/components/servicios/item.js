export const item = (href, name) => {
  return (
    <>
      <a href="#" class="relative block overflow-hidden group ">
        <button class="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900  transition hover:text-gray-900/75 ">
          <span class="sr-only">Wishlist</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        <img
          src={`https://maesdestokp.s3.amazonaws.com/${href}`}
          alt=""
          class="object-cover  w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72 "
        />

        <div class="relative p-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-teal-600">
          <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium dark:bg-teal-600">
            New
          </span>

          <h3 class="mt-4 text-lg font-medium text-gray-900 dark:text-white">
            {name}
          </h3>

          <p class="mt-1.5 text-sm text-gray-700 dark:text-white">$140.99</p>

          <form class="mt-4">
            <button class="block w-full p-4 text-sm font-medium transition bg-yellow-400 rounded dark:bg-teal-600 hover:scale-105">
              Add to Cart
            </button>
          </form>
        </div>
      </a>
    </>
  );
};

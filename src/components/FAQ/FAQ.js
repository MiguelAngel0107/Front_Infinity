export const FAQ = () => {
  const colotText = "font-medium text-gray-900 dark:text-white";
  const colotBg =
    "flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50 dark:bg-teal-600";
  const colotP =
    "px-4 mt-4 leading-relaxed text-gray-700 dark:text-white dark:bg-gray-900";

  return (
    <div class="space-y-4 pl-64 pr-64 bg-gray-900">
      <details class="group [&_summary::-webkit-details-marker]:hidden" open>
        <summary class={colotBg}>
          <h2 class={colotText}>
            Lorem ipsum dolor sit amet consectetur adipisicing?
          </h2>

          <svg
            class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p class={colotP}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          veritatis molestias culpa in, recusandae laboriosam neque aliquid
          libero nesciunt voluptate dicta quo officiis explicabo consequuntur
          distinctio corporis earum similique!
        </p>
      </details>

      <details class="group [&_summary::-webkit-details-marker]:hidden">
        <summary class={colotBg}>
          <h2 class={colotText}>
            Lorem ipsum dolor sit amet consectetur adipisicing?
          </h2>

          <svg
            class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p class={colotP}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          veritatis molestias culpa in, recusandae laboriosam neque aliquid
          libero nesciunt voluptate dicta quo officiis explicabo consequuntur
          distinctio corporis earum similique!
        </p>
      </details>
    </div>
  );
};

import React from "react";

export default function Header() {
  return (
    <header aria-label="Page Header" class="bg-gray-50 dark:bg-gray-900">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div class="flex items-center justify-end gap-4">
          <div class="flex items-center gap-4">
            <div class="relative">
              <label class="sr-only" for="search">
                {" "}
                Search{" "}
              </label>

              <input
                class="h-10 w-full rounded-full border-none bg-white dark:bg-gray-800 pl-4 pr-10 text-sm shadow-sm sm:w-56"
                id="search"
                type="search"
                placeholder="Search website..."
              />

              <button
                type="button"
                class="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-gray-50 dark:bg-gray-900 p-2 text-gray-600 transition hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
              >
                <span class="sr-only">Submut Search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            <a
              href="#"
              class="block shrink-0 rounded-full bg-white  dark:bg-gray-900 p-2.5 text-gray-600 shadow-sm hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
            >
              <span class="sr-only">Notifications</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </a>
          </div>

          <span
            aria-hidden="true"
            class="block h-6 w-px rounded-full bg-gray-200"
          ></span>

          <a href="#" class="block shrink-0">
            <span class="sr-only">Profile</span>
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              class="h-10 w-10 rounded-full object-cover"
            />
          </a>
        </div>

        <div class="mt-8">
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Welcome Back, Barry!
          </h1>

          <p class="mt-1.5 text-sm text-gray-500 dark:text-gray-50">
            Your website has seen a 52% increase in traffic in the last month.
            Keep it up! 🚀
          </p>
        </div>
      </div>
    </header>
  );
}

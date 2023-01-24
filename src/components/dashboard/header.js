import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import SubMenu from "./subMenu";
import SubMenu2 from "./subMenu2";
import { useState, useEffect } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({nameUser}) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const authLinks = (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-full  text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-black">
          <span className="inline-block h-11 w-11 rounded-full overflow-hidden bg-gray-900">
            <img
              alt=""
              src="https://maesdestokp.s3.amazonaws.com/backiee-130192.jpg"
              class="h-11 w-11 rounded-full object-cover"
            />
          </span>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Home
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );

  return (
    <header aria-label="Page Header" class="bg-gray-50 dark:bg-gray-900">
      <div class=" w-full px-4 py-8 sm:px-6 lg:px-8">
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

          {authLinks}
        </div>

        <div class="mt-8">
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Welcome Back, {nameUser}!
          </h1>

          <p class="mt-1.5 text-sm text-gray-500 dark:text-gray-50">
            Your website has seen a 52% increase in traffic in the last month.
            Keep it up! 🚀
          </p>
        </div>
      </div>
      {screenWidth >= 500 ? <SubMenu /> : <SubMenu2 />}
    </header>
  );
}

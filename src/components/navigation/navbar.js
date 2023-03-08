import { Link, Navigate, NavLink } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Menu, Transition } from "@headlessui/react";
import Alerts from "../alerts";
import { logout } from "../../Redux/actions/auth";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
//Estado del App con o sin Backend
import StateApp from "../../helpers/stateForApp";
//----//
import {
  EditActiveIcon,
  EditInactiveIcon,
  DuplicateActiveIcon,
  DuplicateInactiveIcon,
  ArchiveActiveIcon,
  ArchiveInactiveIcon,
  MoveActiveIcon,
  MoveInactiveIcon,
  DeleteActiveIcon,
  DeleteInactiveIcon,
} from "../../helpers/helpnavbar";

import Logo from '../../img/logoSVG2'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ isAuthenticated, user, logout, alert }) => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, [alert]);

  const logoutHandler = () => {
    logout();
    setRedirect(true);
  };

  if (redirect) {
    window.location.reload(false);
    return <Navigate to="/" />;
  }

  const authLinks = (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-full  text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-900">
            <svg
              className="h-full w-full text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
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
                  to="/dashboard"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Dashboard
                </Link>
              )}
            </Menu.Item>

            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={logoutHandler}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full text-left px-4 py-2 text-sm"
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );

  const guestLinks = (
    <div class="sm:flex sm:gap-4">
      <Link
        class="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
        to="/login"
      >
        Login
      </Link>
      <div class="hidden sm:flex">
        <Link
          class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
          to="/register"
        >
          Register
        </Link>
      </div>
    </div>
  );

  const notBack = (
    <div>
      <ul class="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
        <li>
          <a
            href="/"
            rel="noreferrer"
            target="_blank"
            class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
          >
            <span class="sr-only">Facebook</span>

            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="/"
            rel="noreferrer"
            target="_blank"
            class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
          >
            <span class="sr-only">Instagram</span>

            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="/"
            rel="noreferrer"
            target="_blank"
            class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
          >
            <span class="sr-only">GitHub</span>

            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );

  const options = (
    <div className="block md:hidden">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
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
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/servicios"
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <EditActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Servicios
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/productos"
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <DuplicateActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <DuplicateInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Productos
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/reserva"
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <ArchiveActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArchiveInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Reserva
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/proyectos"
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <MoveActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <MoveInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Proyectos
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <DeleteActiveIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <DeleteInactiveIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )}
                    Contacto
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );

  return (
    <>
      <header aria-label="Site Header" class="bg-white dark:bg-gray-900">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div class="md:flex md:items-center md:gap-12">
              <Link class="block text-teal-600 dark:text-teal-600" to="/">               
                {Logo}
              </Link>
            </div>
            

            <div class="hidden pl-18 md:block">
              <nav aria-label="Site Nav">
                <ul class="flex items-center gap-6 text-sm">
                  <li className="group">
                    <span class="absolute top-12 h-0 group-hover:h-0.5 w-9 bg-white"></span>
                    <Link
                      class="text-gray-500 font-semibold transition hover:text-gray-500/75 dark:text-white/75 dark:hover:text-white"
                      to="/"
                    >
                      Inicio
                    </Link>
                  </li>

                  <li className="group">
                    <span class="absolute top-12 h-0 group-hover:h-0.5 w-14 bg-white"></span>
                    <Link
                      class="text-gray-500 font-semibold  transition hover:text-gray-500/75 dark:text-white/75 dark:hover:text-white"
                      to="/servicios"
                    >
                      Servicios
                    </Link>
                  </li>

                  <li className="group">
                    <span class="absolute top-12 h-0 group-hover:h-0.5 w-16 bg-white"></span>
                    <Link
                      class="text-gray-500 font-semibold  transition hover:text-gray-500/75 dark:text-white/75 dark:hover:text-white"
                      to="/productos"
                    >
                      Productos
                    </Link>
                  </li>

                  {StateApp ? (
                    <li>
                      <Link
                        id="hover4"
                        class="text-gray-500 font-semibold  transition hover:text-gray-500/75 dark:text-white/75 dark:hover:text-white"
                        to="/reserva"
                      >
                        Reserva
                      </Link>
                    </li>
                  ) : (
                    <></>
                  )}

                  <li className="group">
                    <span class="absolute top-12 h-0 group-hover:h-0.5 w-16 bg-white"></span>
                    <Link
                      class="text-gray-500 font-semibold  transition hover:text-gray-500/75 dark:text-white/75 dark:hover:text-white"
                      to="/proyectos"
                    >
                      Proyectos
                    </Link>
                  </li>

                  <li className="group">
                    <span class="absolute top-12 h-0 group-hover:h-0.5 w-20 bg-white"></span>
                    <Link
                      class="text-gray-500 font-semibold  transition hover:text-gray-500/75 dark:text-white/75 dark:hover:text-white"
                      to="/contacto"
                    >
                      Contactenos
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {StateApp ? (
              <div class="flex items-center gap-4">
                {isAuthenticated ? authLinks : guestLinks}
                {options}
              </div>
            ) : (
              notBack
            )}
          </div>
        </div>
      </header>
      <Alerts />
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth.isAuthenticated,
  user: state.Auth.user,
  alert: state.Alert.alert,
});

export default connect(mapStateToProps, {
  logout,
})(Navbar);

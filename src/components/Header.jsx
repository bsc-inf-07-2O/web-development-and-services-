import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="w-full">
      <div className="bg-gray-700 py-1.5 px-4 sm:px-8 xl:px-10 2xl:px-14 text-sm text-white">
        <div className="flex items-center justify-between">
          <p>Free Delivery Over k10,000 & Free Return</p>

          <p>
            Mobile Line:
            <a className="text-white" href="+265 996467525">
              +265 883754245
            </a>
          </p>
        </div>
      </div>
      <div className="bg-gray-800 p-4 sm:px-8 xl:px-10 2xl:px-14 border-b border-gray-500">
        <div className="grid grid-cols-5 items-center">
          <div className="col-span-1">
            <Link to={"/"}>
              <img
                src={logo}
                alt="logo"
                className="w-[120px] h-[60px] px-3 rounded object-contain bg-yellow-500"
              />
            </Link>
          </div>
          <div className="col-span-2">
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 end-0 flex items-center px-3 pointer-events-none bg-yellow-500 rounded-r-lg">
                <svg
                  className="w-4 h-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full py-2.5 pl-2 pr-10 text-sm text-gray-900 outline-none border-2 border-gray-300 rounded-lg bg-gray-50 focus:ring-4 focus:ring-gray-500 focus:border-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Products Here..."
              />
            </div>
          </div>

          <div className="col-span-2 grid justify-items-center">
            <ul className="flex items-center gap-6 uppercase text-white leading-[14px] tracking-wide text-[14px] font-[400]">
              <li>
                <NavLink
                  to="/"
                  className="text-white hover:opacity-90 transition-all ease-linear"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-white hover:opacity-90 transition-all ease-linear"
                >
                  Our Store
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-white hover:opacity-90 transition-all ease-linear"
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  className="text-white hover:opacity-90 transition-all ease-linear"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

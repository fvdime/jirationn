import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex flex-col justify-start items-start">
            <span className="text-lg font-medium whitespace-nowrap">
              Hi USER!
            </span>
          </a>
          <div className="flex items-center md:order-2">
            <button
              type="button"
              className="relative flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 sm:mr-20 focus:ring-4 focus:ring-gray-300"
              onClick={() => setOpen(!open)}
            >
              <img
                className="w-8 h-8 rounded-full"
                src="/bg.png"
                alt=""
              />
            </button>
            {open && (
              <div className="absolute top-14 right-1 sm:right-20 z-50 my-4 text-base list-none bg-lime-300 divide-y divide-lime-100/50 rounded-lg shadow">
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 my-1">
                    Bonnie Green
                  </span>
                  <span className="block text-sm  text-gray-700 truncate">
                    name@flowbite.com
                  </span>
                </div>
                <ul className="py-2">
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-lime-500/50"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-lime-500/50"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-lime-500/50"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-lime-500/50"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

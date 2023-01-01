import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import {
  HiBars3BottomLeft,
  HiOutlineXMark,
  HiShoppingCart,
} from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import Button from "../componets/Button";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const handleActiveMenu = () => {
    setActive(!active);
  };
  return (
    <nav className="bg-secondary-color fixed top-0 w-full z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  relative z-30">
        <div className="relative h-16  flex items-center justify-center ">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            {!active && (
              <Button handler={handleActiveMenu}>
                <HiBars3BottomLeft className="text-xl"></HiBars3BottomLeft>
              </Button>
            )}
            {active && (
              <Button handler={handleActiveMenu}>
                <HiOutlineXMark className="text-xl"></HiOutlineXMark>
              </Button>
            )}
          </div>
          <div className="flex lg:flex-1">
            <img
              className="block h-8 w-auto lg:hidden"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
            <img
              className="hidden h-8 w-auto lg:block"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block ">
              <div className="flex space-x-4 justify-center items-center">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                {/* //! add active navlink */}
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? `shadow-nm hover:shadow-nm transition-all text-gray-800 px-3 py-2 rounded-md text-sm font-medium border border-zinc-300`
                      : "text-gray-500  transition-all  px-3 py-2 hover:text-gray-800 rounded-md text-sm font-medium border border-zinc-300"
                  }
                  //   className="text-gray-500 hover:shadow-nm transition-all hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium border border-zinc-300"
                >
                  Home
                </NavLink>
                <NavLink
                  to={"/services"}
                  className={({ isActive }) =>
                    isActive
                      ? `shadow-nm hover:shadow-nm transition-all text-gray-800 px-3 py-2 rounded-md text-sm font-medium border border-zinc-300`
                      : "text-gray-500  transition-all  px-3 py-2 hover:text-gray-800 rounded-md text-sm font-medium border border-zinc-300"
                  }
                >
                  Services
                </NavLink>
                <NavLink
                  to={"/addservice"}
                  className={({ isActive }) =>
                    isActive
                      ? ` shadow-nm hover:shadow-nm transition-all text-gray-800 px-3 py-2 rounded-md text-sm font-medium border border-zinc-300`
                      : "text-gray-500  transition-all  px-3 py-2 hover:text-gray-800 rounded-md text-sm font-medium border border-zinc-300"
                  }
                >
                  Add Service
                </NavLink>
                <NavLink
                  to={"/banner"}
                  className={({ isActive }) =>
                    isActive
                      ? ` shadow-nm hover:shadow-nm transition-all text-gray-800 px-3 py-2 rounded-md text-sm font-medium border border-zinc-300`
                      : "text-gray-500  transition-all  px-3 py-2 hover:text-gray-800 rounded-md text-sm font-medium border border-zinc-300"
                  }
                >
                  Banner
                </NavLink>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    isActive
                      ? ` shadow-nm hover:shadow-nm transition-all text-gray-800 px-3 py-2 rounded-md text-sm font-medium border border-zinc-300`
                      : "text-gray-500  transition-all  px-3 py-2 hover:text-gray-800 rounded-md text-sm font-medium border border-zinc-300"
                  }
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}

      <Transition
        show={active}
        enter="transition ease-out duration-500"
        enterFrom="transform opacity-0 -translate-y-24"
        enterTo="transform opacity-100 translate-y-0"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100 translate-y-0"
        leaveTo="transform opacity-0 scale-95 -translate-y-24"
      >
        {active ? (
          <div className="sm:hidden bg-secondary-color h-48 z-10">
            <div className="space-y-1 px-2 pt-2 pb-3 ">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? `bg-secondary-color text-gray-500 shadow-nm hover:shadow-nm transition-all hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium border border-zinc-300 block`
                    : "bg-secondary-color text-gray-500  transition-all hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium border border-zinc-300 block"
                }
              >
                Home
              </NavLink>
              <NavLink
                to={"/services"}
                className={({ isActive }) =>
                  isActive
                    ? `bg-secondary-color text-gray-500 shadow-nm hover:shadow-nm transition-all hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium border border-zinc-300 block`
                    : "bg-secondary-color text-gray-500  transition-all hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium border border-zinc-300 block"
                }
              >
                Services
              </NavLink>
              <NavLink
                to={"/addservice"}
                className={({ isActive }) =>
                  isActive
                    ? `bg-secondary-color text-gray-500 shadow-nm hover:shadow-nm transition-all hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium border border-zinc-300 block`
                    : "bg-secondary-color text-gray-500  transition-all hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium border border-zinc-300 block"
                }
              >
                Add Service
              </NavLink>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive
                    ? `bg-secondary-color text-gray-500 shadow-nm hover:shadow-nm transition-all hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium border border-zinc-300 block`
                    : "bg-secondary-color text-gray-500  transition-all hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium border border-zinc-300 block"
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        ) : (
          ""
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;

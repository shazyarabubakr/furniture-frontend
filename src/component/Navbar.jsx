import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//navlink bo away ka click y lekra state akay rangy bgore.

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { amount } = useSelector((state) => state.cart);
  const navItems = [
    {
      id: 1,
      name: "home",
      link: "/",
    },
    {
      id: 2,
      name: "product",
      link: "/product",
    },
    {
      id: 3,
      name: "service",
      link: "/service",
    },
    {
      id: 4,
      name: "about",
      link: "/about",
    },
  ];
  return (
    <>
      {/* BRAND NAME */}
      <nav className="flex justify-between items-center w-full h-14 px-4 text-white z-50 bg-gray-900 sticky top-0">
        <div>
          <h1 className="text-5xl font-signature ml-2 flex sm:justify-start text-white cursor-pointer">
            Diwaxan
          </h1>
        </div>

        {/* NAV ITEMS */}
        <ul className="hidden md:flex justify-center">
          {navItems.map(({ id, name, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer uppercase font-normal text-white  hover:border-b-[2px] border-b-beige hover:scale-105 duration-100"
            >
              <Link to={link}>{name}</Link>
            </li>
          ))}
        </ul>

        {/* ICONS */}

        <ul className="flex ">
          <li className="px-2 cursor-pointer">
            <Link to="/checkout">
              <i className="fi fi-rr-shopping-cart text-lg"></i>
              <div className="absolute w-4 h-4 rounded-full z-10  flex items-center justify-center top-6 right-[50px] text-[10px] bg-white text-gray-900">
                {amount}
              </div>
            </Link>
          </li>
          <li className="px-2 cursor-pointer">
            <i className="fi fi-rr-user text-lg"></i>
          </li>
          {/*RESPONSIVE NAVBAR*/}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer text-white pr-4 z-10 md:hidden "
          >
            {nav ? (
              <i className="fi fi-br-cross text-xl"></i>
            ) : (
              <i className="fi fi-rr-menu-burger text-xl"></i>
            )}
          </div>
        </ul>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-darkBlue text-white">
            {navItems.map(({ id, name, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer uppercase font-normal text-4xl py-6 text-white"
              >
                <Link
                  to={link}
                  smooth
                  duration={500}
                  onClick={() => setNav(!nav)}
                >
                  {name}
                </Link>
              </li>
            ))}
            {/* <li className="px-2 cursor-pointer">
              <i className="fi fi-bs-search text-lg"></i>
            </li> */}
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;

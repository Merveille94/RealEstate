import React from "react";
import Logo_1 from "../assets/Logo/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-slate-600">
      <div className="md:container md:mx-auto max-w-7xl px-2 sm:px:6 lg:px-8">
        <div className="flex h-20 items-center justify-between bg-black">
          <div className="flex flex-1 items-center md:items-stretch md:justify-start bg-white">
            <a
              href="/index.html"
              className="flex flex-shrink-0 items-center mr-4"
            >
              <img src={Logo_1} alt="logo" className="h-10 w-auto" />
              <span className="hidden md:block text-white text-sxl font-bold ml-2">ABISARB - RealEstate</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

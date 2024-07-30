import React, {useState} from "react";
import Logo_1 from "../assets/Logo/logo.png";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen) // !false = true
  }

  console.log(isMenuOpen);

  return (
    <nav className="bg-slate-600">
      <div className="md:container md:mx-auto max-w-7xl px-2 sm:px:6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center md:items-stretch md:justify-start">
            <a
              href="/index.html"
              className="flex flex-shrink-0 items-center mr-4"
            >
              <img src={Logo_1} alt="logo" className="h-9 w-auto" />
            </a>
            
            <div className="md:ml-auto">   
                <ul className="hidden md:flex space-x-2">
                  <li><a href="/index.html" className="text-white hover:text-lime-300 px-3 py-2">Home</a></li>
                  <li><a href="" className="text-white hover:text-lime-300 px-3 py-2">Agents</a></li>
                  <li><a href="" className="text-white hover:text-lime-300 px-3 py-2">Property</a></li>
                  <li><a href="" className="text-white hover:text-lime-300 px-3 py-2">About</a></li>
                  <li><a href="" className="text-white hover:text-lime-300 px-3 py-2">Blog</a></li>
                  <li><a href="" className="text-white hover:text-lime-300 px-3 py-2">Contact</a></li>
                </ul>
            </div>

            <div className="md:hidden ml-auto">
                 <button className="text-white" onClick={toggleMenu}><HiMenu className="text-2xl"/></button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

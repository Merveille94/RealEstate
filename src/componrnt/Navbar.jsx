import logo from "../assets/images/logo.png"

const Navbar = () => {
  return (
    <header className="p-4">
      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-between">
          <div className="pr-4 pl-4">
            <div className="text-xl font-bold">
              <a href="index.html" className="text-gray-800 hover:text-gray-600">AbiSarb</a>
            </div>
          </div>
          <div className=" text-right">
            <span className="md:hidden inline-block py-5">
              <a href="#" className="text-gray-800">
                <span className="icon-menu h3 text-gray-800"></span>
              </a>
            </span>
            <nav className="hidden md:block ">
              <ul className="flex space-x-4">
                <li className="active">
                  <a href="index.html" className="nav-link text-gray-800 hover:text-gray-600">Home</a>
                </li>
                <li>
                  <a href="agents.html" className="nav-link text-gray-800 hover:text-gray-600">Agents</a>
                </li>
                <li>
                  <a href="property.html" className="nav-link text-gray-800 hover:text-gray-600">Property</a>
                </li>
                <li>
                  <a href="about.html" className="nav-link text-gray-800 hover:text-gray-600">About</a>
                </li>
                <li>
                  <a href="blog.html" className="nav-link text-gray-800 hover:text-gray-600">Blog</a>
                </li>
                <li>
                  <a href="contact.html" className="nav-link text-gray-800 hover:text-gray-600">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
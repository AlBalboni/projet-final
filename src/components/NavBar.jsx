import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FaHome, FaBook, FaHeart, FaPlus } from "react-icons/fa";

const NavBar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <nav className="bg-blue-700 border-b border-blue-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <Link className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="Now" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                BookNow
              </span>
            </Link>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                  <FaHome className="inline-block ml-1 mr-1 mb-1" />
                </NavLink>
                <NavLink to="/books" className={linkClass}>
                  Books
                  <FaBook className="inline-block ml-1 mr-1 mb-1" />
                </NavLink>
                <NavLink to="/favorite-books" className={linkClass}>
                  Favorites
                  <FaHeart className="inline-block ml-1 mr-1 mb-1" />
                </NavLink>
                <NavLink to="/add-books" className={linkClass}>
                  Add books
                  <FaPlus className="inline-block ml-1 mr-1 mb-1" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

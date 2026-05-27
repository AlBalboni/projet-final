import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

{/*Footer is the same for every page*/}
const Footer = () => {

  return (
    <footer className="bg-blue-950 text-white mt-10">

      <div className="container mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-3">
            <img className="h-10 w-auto" src={logo} alt="BookNow" />

            <div>
              <h2 className="text-xl font-bold">
                BookNow
              </h2>

              <p className="text-gray-300 text-sm">
                Your virtual library.
              </p>
            </div>
          </div>

          {/* CENTER */}
          <div className="flex gap-6 text-sm">

            <Link
              to="/"
              className="hover:text-blue-400 transition"
            >
              Home
            </Link>

            <Link
              to="/books"
              className="hover:text-blue-400 transition"
            >
              Books
            </Link>

            <Link
              to="/favorite-books"
              className="hover:text-blue-400 transition"
            >
              Favorites
            </Link>

          </div>

          {/* RIGHT SIDE */}
          <div className="text-sm text-gray-300 text-center md:text-right">
            <p>
              © 2026 BookNow
            </p>

            <p>
              All rights reserved.
            </p>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
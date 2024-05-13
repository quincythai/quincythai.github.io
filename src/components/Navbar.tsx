import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="font-Lato">
      {/* Prevent from stretching too much */}
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            <div className="text-xl">quincy thai</div>
          </Link>

          {/* Links */}
          <div className="flex items-center space-x-4 ml-auto gap-4 font-Lato">
            <Link
              to="/"
              className=" text-black font-semibold hover:text-green-500 transition duration-300"
            >
              about
            </Link>
            {/* <Link
              to="/projects"
              className=" text-black font-semibold hover:text-green-500 transition duration-300"
            >
              projects
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/last.png";

const Navbar = () => {
  return (
    <>
      {/* Mobile Navbar */}
      <div className="ml-4 md:hidden"></div>
      {/* laptop view */}
      <div className="hidden md:block fixed top-0 w-full">
        <nav className=" hidden  justify-between items-center w-full h-16 relative p-2 mr-auto md:flex md:px-10 ">
          <div className="img w-12 h-8 flex items-center justify-center">
            <Link to="/" className="absolute w-16 logo-div ">
              <img src={logo} alt="" className="ml-8 img-logo " />
            </Link>
          </div>
          <ul
            className="links flex justify-between gap-4 mr-8  "
            data-aos="fade-up"
          >
            <li>
              <NavLink
                to="/"
                className={({isActive}) =>
                  isActive
                    ? "bg-baseColor-50 p-1 rounded text-white"
                    : "text-gray-500 "
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/projects"
                className={({isActive}) =>
                  isActive
                    ? "bg-baseColor-50 p-1 rounded text-white"
                    : "text-gray-500 "
                }
              >
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({isActive}) =>
                  isActive
                    ? "bg-baseColor-50 p-1 rounded text-white"
                    : "text-gray-500 "
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

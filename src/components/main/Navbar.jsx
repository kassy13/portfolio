import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/logo-rem.png";

const Navbar = () => {
  return (
    <>
      {/* Mobile Navbar */}
      <div className="ml-4 md:hidden"></div>
      {/* laptop view */}
      <div className="hidden md:block">
        {/* <nav className="flex bg-red-300 items-center px-6 py-2 ">
          <div className="w-16 ">
            <img src={logo} alt="" />
          </div>
          <ul className="flex justify-between ">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </nav> */}

        <nav className=" hidden  justify-between items-center w-full h-16 bg-black text-white relative p-2 mr-auto md:flex  ">
          <div className="img w-12 h-8 flex items-center justify-center">
            <Link to="/" className="absolute">
              <img src={logo} alt="" className="ml-8" />
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
                  isActive ? "bg-green-400 p-1 rounded" : "text-gray-500 "
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({isActive}) =>
                  isActive ? "bg-green-400 p-1 rounded" : "text-gray-500 "
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact-us"
                className={({isActive}) =>
                  isActive ? "bg-green-400 p-1 rounded" : "text-gray-500 "
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className={({isActive}) =>
                  isActive ? "bg-green-400 p-1 rounded" : "text-gray-500 "
                }
              >
                Signup
              </NavLink>
            </li>
            <li className="flex ">
              <NavLink
                to="/Login"
                className={({isActive}) =>
                  isActive ? "bg-green-400 p-1 rounded" : "text-gray-500 "
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

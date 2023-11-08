import { Link, useLocation, useNavigate } from "react-router-dom";
// import book from "/src/book.svg";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Log out Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch();
  };
  const navItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/addBlogs"}>Add Blog</Link>
      </li>
      <li>
        <Link to={"/allBlogs"}>All blogs</Link>
      </li>
      <li>
        <Link to={"/featuredBlogs"}>Featured Blogs</Link>
      </li>
      <li>
        <Link to={"/wishlist"}>Wishlist</Link>
      </li>
      {/* <li>
        <Link to={"/register"}>Register</Link>
      </li> */}
    </>
  );
  return (
    <motion.div
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        ease: "linear",
        duration: 2,
        x: { duration: 1 },
      }}
    >
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <img
            src="/book.svg"
            alt=""
            className="h-5 w-5 text-center lg:h-10 lg:w-10"
          />
          <a className="btn btn-ghost normal-case sm:text-xs lg:text-xl">
            Bytes of Thoughts
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div>
              {user ? (
                <p className="font-light text-xs w-10 lg:w-20">
                  {user.displayName}
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              {user ? (
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-5 lg:w-10 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </label>
              ) : (
                ""
              )}
            </div>
          </div>
          <div>
            {user ? (
              <button onClick={handleSignOut} className="btn">
                Log Out
              </button>
            ) : (
              <Link to="/login">
                <button className="btn">Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;

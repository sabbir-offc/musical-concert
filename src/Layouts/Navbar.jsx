import { Link, NavLink } from "react-router-dom";
import userDefaultImg from "/assets/images/user.png";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navLinks = (
    <>
      <li className="text-lg">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg">
        <NavLink to="/about">About</NavLink>
      </li>

      {user && (
        <>
          <li className="text-lg">
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li className="text-lg">
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log out SuccessFull", {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        });
      })
      .catch(() => {
        toast.error("Log out failed.", {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        });
      });
  };
  return (
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
            {navLinks}
          </ul>
        </div>
        <img src="/assets/images/logo.png" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">{navLinks}</ul>
      </div>
      <div className="navbar-end space-x-2">
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <p>{user?.displayName} </p>
                </li>
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={userDefaultImg} alt="" className="rounded-full" />
              </div>
            </label>
            <Link className="btn btn-primary" to="/login">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

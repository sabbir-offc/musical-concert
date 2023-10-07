import { BiShowAlt, BiHide } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Layouts/Navbar";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { useState } from "react";

const Register = () => {
  const { createUser, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [password, setPassword] = useState(true);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const image = form.get("image");
    const email = form.get("email");
    const password = form.get("password");
    if (!/^(?=.*[A-Z])(?=.*[@$!%*?&]).{6,}$/.test(password)) {
      return toast.error(
        "You should enter a password that includes one uppercase, one lowercase and a special characters."
      );
    }

    createUser(email, password)
      .then(() => {
        updateProfile(user, { displayName: name, photoURL: image })
          .then(() => toast.success("Your Profile also updated."))
          .catch(() => {
            "failed to update you profile";
          });

        toast.success("Registration Successfull.");
        // navigate(location.state)
      })
      .catch(() => {
        toast.error("Account Create Failed.");
      });
  };
  return (
    <div className="py-5">
      <Navbar></Navbar>
      <div className="flex flex-col-reverse md:flex-row w-full items-center justify-center h-register">
        <div className="card py-5 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name..."
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Enter Your Photo Url..."
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email..."
                className="input input-bordered"
                required
              />
            </div>
            <div className=" form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative w-full">
                <input
                  type={password ? "password" : "text"}
                  name="password"
                  placeholder="Enter Your password..."
                  className="input input-bordered w-full"
                  required
                />
                <span
                  className="absolute cursor-pointer right-2 top-3.5 text-xl"
                  onClick={() => setPassword(!password)}
                >
                  {password ? <BiHide></BiHide> : <BiShowAlt></BiShowAlt>}
                </span>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Register
              </button>
            </div>
            <div className="flex items-center justify-between mx-2">
              <p className="text-lg">Already have an account?</p>
              <Link to="/login" className="text-lg underline text-blue-700">
                Login
              </Link>
            </div>
          </form>
          <SocialLogin></SocialLogin>
        </div>
        <div>
          <img src="../../../public/assets/images/register.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;

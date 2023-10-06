import { Link } from "react-router-dom";
import Navbar from "../../Layouts/Navbar";
import SocialLogin from "./SocialLogin";

const Register = () => {
  return (
    <div className="py-5">
      <Navbar></Navbar>
      <div className="flex flex-col-reverse md:flex-row w-full items-center justify-center h-register">
        <div className="card py-5 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name..."
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
                placeholder="Enter Your Email..."
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Your password..."
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
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

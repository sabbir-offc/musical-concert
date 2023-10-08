import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Layouts/Navbar";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { loginUser } = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    loginUser(email, password)
      .then(() => {
        toast.success("Login successfull.");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error("Login Failed, Email or Password doesn't match");
        console.log(err);
      });
  };
  return (
    <div className="py-5">
      <Navbar></Navbar>
      <div className="flex flex-col-reverse md:flex-row w-full items-center justify-center">
        <div className="card flex-shrink-0 py-5 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email..."
                name="email"
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
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="flex items-center justify-between mx-2">
              <p className="text-lg">{`Don't have an account?`}</p>
              <Link to="/register" className="text-lg underline text-blue-700">
                Register
              </Link>
            </div>
          </form>
          <SocialLogin></SocialLogin>
        </div>
        <div>
          <img src="/assets/images/login.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;

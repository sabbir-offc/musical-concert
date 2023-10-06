import Navbar from "../../Layouts/Navbar";

const Login = () => {
  return (
    <div className="py-5">
      <Navbar></Navbar>
      <div className="flex flex-col-reverse md:flex-row w-full items-center justify-center h-fit  md:h-register">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
                placeholder="password"
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
          </form>
        </div>
        <div>
          <img src="../../../public/assets/images/login.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;

import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { googleSign } = useAuth();
  const navigate = useNavigate();
  const handleLogin = () => {
    googleSign()
      .then(() => {
        toast.success("Sign In Successfull.");
        navigate("/");
      })
      .catch(() => {
        toast.error("Sign in failed, Please try again.");
      });
  };
  return (
    <div className="text-center w-full px-8">
      <button
        onClick={handleLogin}
        className="btn hover:bg-gray-800 bg-neutral-700 w-full text-white font-semibold text-lg"
      >
        <FcGoogle></FcGoogle> Sign In With Google
      </button>
    </div>
  );
};

export default SocialLogin;

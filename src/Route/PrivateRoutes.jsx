import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
// import { Hourglass } from "joshk.react-spinners-css/hourglass";
import HashLoader from "react-spinners/HashLoader";
const PrivateRoutes = ({ children }) => {
  const location = useLocation();

  const { loading, user } = useAuth();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <HashLoader color="#36d7b7" />;
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname}></Navigate>;
};
PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoutes;

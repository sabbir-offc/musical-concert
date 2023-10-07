import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../Layouts/Footer";

const Root = () => {
  return (
    <div>
      <div className="max-w-6xl container mx-auto font-mukta my-5">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
};

export default Root;

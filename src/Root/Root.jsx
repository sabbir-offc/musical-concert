import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-6xl container mx-auto font-mukta">
      <Outlet></Outlet>
      <Toaster></Toaster>
    </div>
  );
};

export default Root;

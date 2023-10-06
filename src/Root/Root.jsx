import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-6xl container mx-auto font-mukta">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;

import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Layouts/Navbar";
import RightSiderBar from "../../Layouts/RightSideBar";

const EventDetails = () => {
  const { id } = useParams();
  const events = useLoaderData();

  const event = events?.find((item) => item.id === parseInt(id));
  const { image, title, details } = event;
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 mt-10 gap-3">
        <div className="col-span-3">
          <img src={image} className="w-full rounded-md" />
          <h1 className="text-2xl md:text-4xl font-bold mt-4">{title}</h1>
          <p className="text-gray-500 font-medium mt-3 text-base">{details}</p>
        </div>
        <RightSiderBar></RightSiderBar>
      </div>
    </div>
  );
};

export default EventDetails;

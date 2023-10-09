import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Layouts/Navbar";
import RightSiderBar from "../../Layouts/RightSideBar";
import { AiOutlineArrowRight } from "react-icons/ai";
import toast from "react-hot-toast";

const EventDetails = () => {
  const { id } = useParams();
  const events = useLoaderData();

  const event = events?.find((item) => item.id === parseInt(id));
  const { image, title, details } = event;
  const ticketSaved = () => {
    const saveItem = [];
    const storedItem = JSON.parse(localStorage.getItem("ticket"));
    if (!storedItem) {
      saveItem.push(event);
      localStorage.setItem("ticket", JSON.stringify(saveItem));
      toast.success("Your bought the ticket successfully");
    } else {
      const isExists = storedItem.find((card) => card.id === event.id);
      console.log(isExists);
      if (!isExists) {
        saveItem.push(...storedItem, event);
        localStorage.setItem("ticket", JSON.stringify(saveItem));
        toast.success("Your bought the ticket successfully");
      } else {
        return toast.error("You already booked this ticket.");
      }
    }
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 mt-10 gap-3">
        <div className="col-span-3">
          <img src={image} className="w-full rounded-md" />
          <h1 className="text-2xl md:text-4xl font-bold mt-4">{title}</h1>
          <p className="text-gray-500 font-medium mt-3 text-base">{details}</p>
          <button onClick={ticketSaved} className="btn btn-primary my-5">
            Get your Ticket <AiOutlineArrowRight></AiOutlineArrowRight>
          </button>
        </div>
        <RightSiderBar></RightSiderBar>
      </div>
    </div>
  );
};

export default EventDetails;

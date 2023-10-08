import { Link } from "react-router-dom";

const CreateEvent = () => {
  return (
    <div className="text-center space-y-3 my-10">
      <h1 className="text-2xl text-center font-semibold">
        CREATE YOUR OWN NEW EVENT
      </h1>
      <p>
        Bring people together, or turn your passion into a business. Eventbrite
        gives you everything you need to host your best event yet.
      </p>
      <Link to="/event-submit">
        <button className="btn btn-primary mt-3">Submit Your Event</button>
      </Link>
    </div>
  );
};

export default CreateEvent;

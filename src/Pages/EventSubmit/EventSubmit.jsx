import toast from "react-hot-toast";
import Navbar from "../../Layouts/Navbar";
import { useEffect } from "react";

const EventSubmit = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const details = form.get("details");
    if (details.length < 10) {
      return toast.error("Details must be at least 10+ characters.");
    }
    toast.success(
      "Thank For Submitting your Idea, We Will try to arrange an event for you."
    );
    e.target.reset();
  };
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Submit Your Event Idea</h1>
            <p className="py-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              ipsum omnis id repudiandae ea dolorem magnam perferendis non,
              possimus asperiores temporibus voluptate nostrum aliquam nobis,
              tempora, earum vitae! Deserunt, enim voluptates suscipit nam
              nostrum nobis. Deleniti sapiente dolor atque ipsum voluptates.
              Optio molestiae eligendi soluta ipsum! Adipisci amet veritatis
              nihil?
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter Your Event Idea."
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>

                <textarea
                  name="details"
                  id=""
                  cols="20"
                  rows="4"
                  placeholder="Enter Your Event Description"
                  className="textarea textarea-primary"
                  required
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSubmit;

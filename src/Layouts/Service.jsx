import PropTypes from "prop-types";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { id, image, title, details, concert_price } = service;
  return (
    <div
      data-aos="fade-down-right"
      className="relative my-3 flex flex-col w-full max-w-[48rem] md:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
    >
      <div className="relative m-0 w-full md:w-2/5 shrink-0 overflow-hidden rounded-t-xl md:rounded-l-xl  bg-white bg-clip-border text-gray-700">
        <img src={image} alt="image" className="w-full h-full" />
      </div>
      <div className="p-6">
        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h4>
        <h5 className="text-xl text-red-500 font-semibold">
          Tickets from ${concert_price}
        </h5>
        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          {details.slice(0, 150)}...
        </p>
        <Link to={`/events/${id}`} className="inline-block">
          <button
            className="flex border border-red-500 select-none items-center gap-2 roundedLg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 hover:duration-300 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Tickets & Details
          </button>
        </Link>
      </div>
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.object,
};

export default Service;

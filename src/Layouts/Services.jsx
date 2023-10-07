import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import Service from "./Service";

const Services = ({ services }) => {
  const [dataLength, setDataLength] = useState(4);

  const [artists, setArtists] = useState(null);
  useEffect(() => {
    fetch("/public/artist.json")
      .then((res) => res.json())
      .then((data) => setArtists(data));
  }, []);
  console.log(artists);
  return (
    <div>
      <div className="w-full bg-white mt-10 text-center">
        <ul className="flex gap-7 items-center justify-center">
          {artists?.map((artist) => (
            <li
              key={artist.artist_id}
              className="text-xl bg-gray-600 px-6 py-3 rounded text-white font-semibold hover:bg-red-400 hover:duration-500"
            >
              <Link to={`/artist/${artist.artist_id}`}>{artist.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className=" flex flex-col items-center">
        {services?.slice(0, dataLength).map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}

        <div className={dataLength > 4 && "hidden"}>
          <button
            onClick={() => setDataLength(services?.length)}
            className="text-xl bg-red-400 text-white font-semibold px-5 py-3 rounded-md mt-6 hover:bg-transparent hover:border-2 hover:border-red-500 hover:text-red-600 hover:duration-500"
          >
            See All Events
          </button>
        </div>
      </div>
    </div>
  );
};
Services.propTypes = {
  services: PropTypes.array,
};
export default Services;

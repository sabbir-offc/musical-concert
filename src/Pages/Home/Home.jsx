import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Layouts/Navbar";

import SimpleSlider from "../../Layouts/Slider";
import { useEffect, useState } from "react";
import Service from "../../Layouts/Service";
import Sponsor from "../../Layouts/Sponsor";
import CreateEvent from "../../Layouts/CreateEvent";
import UserReview from "../../Layouts/UserReview";

const Home = () => {
  const services = useLoaderData();
  const [dataLength, setDataLength] = useState(4);

  const [artists, setArtists] = useState(null);
  useEffect(() => {
    fetch("/artist.json")
      .then((res) => res.json())
      .then((data) => setArtists(data));
  }, []);
  const lgBtn = (
    <>
      {artists?.map((artist) => (
        <li
          key={artist.artist_id}
          className="text-xl bg-gray-600 px-6 py-3 rounded text-white font-semibold hover:bg-red-400 hover:duration-500"
        >
          <Link to={`/artist/${artist.artist_id}`}>{artist.name}</Link>
        </li>
      ))}
    </>
  );
  const smBtn = (
    <>
      <div className="dropdown">
        <label tabIndex={0} className="btn m-1">
          All Category
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            {artists?.map((artist) => (
              <Link
                key={artist.artist_id}
                className="text-xl my-1 bg-gray-600 px-6 py-3 rounded text-white font-semibold hover:bg-red-400 hover:duration-500"
                to={`/artist/${artist.artist_id}`}
              >
                {artist.name}
              </Link>
            ))}
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <div className="py-5">
      <Navbar></Navbar>
      <SimpleSlider></SimpleSlider>

      <div>
        <div className="w-full bg-white mt-10 text-center">
          <div className="hidden md:block">
            <ul className=" flex gap-7 items-center justify-center">{lgBtn}</ul>
          </div>
          <ul className="md:hidden">{smBtn}</ul>
        </div>
        <div className="mt-9 text-center">
          <div className="grid text-left lg:grid-cols-2 gap-3 place-items-center px-4 md:px-0">
            {services.slice(0, dataLength).map((service) => (
              <Service key={service.id} service={service}></Service>
            ))}
          </div>

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
      <Sponsor></Sponsor>
      <CreateEvent></CreateEvent>
      <UserReview></UserReview>
    </div>
  );
};

export default Home;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "./Service";

const Services = () => {
  const [dataLength, setDataLength] = useState(4);
  const [services, setServices] = useState(null);
  useEffect(() => {
    fetch("/public/data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="w-full bg-white mt-10 text-center">
        <ul className="flex gap-7 items-center justify-center">
          <li className="text-xl bg-gray-600 px-6 py-3 rounded text-white font-semibold hover:bg-red-400 hover:duration-500">
            <Link>All</Link>
          </li>
          <li className="text-xl bg-gray-600 px-6 py-3 rounded text-white font-semibold hover:bg-red-400 hover:duration-500">
            <Link>Arijit Singh</Link>
          </li>
          <li className="text-xl bg-gray-600 px-6 py-3 rounded text-white font-semibold hover:bg-red-400 hover:duration-500">
            <Link>Atif Aslam</Link>
          </li>
          <li className="text-xl bg-gray-600 px-6 py-3 rounded text-white font-semibold hover:bg-red-400 hover:duration-500">
            <Link>AR Rahman</Link>
          </li>
          <li className="text-xl bg-gray-600 px-6 py-3 rounded text-white font-semibold hover:bg-red-400 hover:duration-500">
            <Link>Armaan Malik</Link>
          </li>
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

export default Services;

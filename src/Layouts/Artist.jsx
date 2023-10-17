import { Link, useLoaderData, useParams } from "react-router-dom";
import LeftSideBar from "./LeftSideBar";
import Navbar from "./Navbar";
import { useEffect } from "react";

const Artist = () => {
  const { id } = useParams();
  const services = useLoaderData();
  // console.log(services);
  const service =
    services &&
    services.filter((service) => service.artist_id === parseInt(id));
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 gap-5">
        <LeftSideBar></LeftSideBar>
        <div className="col-span-3 place-items-center">
          {service.length < 1 ? (
            <>
              {services.map((item) => (
                <div
                  key={item.id}
                  data-aos="fade-left"
                  className="px-4 md:px-0 my-5 flex flex-col lg:flex-row  bg-white rounded-lg shadow"
                >
                  <img
                    className="rounded-t-lg lg:rounded-l-lg  "
                    src={item.image}
                    alt=""
                  />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      {item.title}
                    </h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.details.slice(0, 120)}...
                    </p>
                    <Link
                      to={`/events/${item.id}`}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Ticket & Details
                      <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {service.map((item) => (
                <div
                  key={item.id}
                  data-aos="fade-left"
                  className="px-4 md:px-0 flex flex-col lg:flex-row my-5 bg-white rounded-lg shadow"
                >
                  <img
                    className="rounded-t-lg lg:rounded-l-lg"
                    src={item.image}
                  />

                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      {item.title}
                    </h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.details.slice(0, 120)}...
                    </p>
                    <Link
                      to={`/events/${item.id}`}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Ticket & Details
                      <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Artist;

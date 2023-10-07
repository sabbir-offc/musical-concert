import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideBar = () => {
  const [artists, setArtists] = useState(null);
  useEffect(() => {
    fetch("/artist.json")
      .then((res) => res.json())
      .then((data) => setArtists(data));
  }, []);

  return (
    <div className="mt-5">
      <div className="dropdown md:hidden">
        <label tabIndex={0} className="btn m-1">
          All Category
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            {artists?.map((artist) => (
              <NavLink
                key={artist.id}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "block text-lg py-3 px-7 w-full text-[#9F9F9F]"
                    : isActive
                    ? " bg-gray-700 text-white py-3 px-7 w-full rounded"
                    : "block text-lg w-full py-3 px-7 text-[#9F9F9F] my-5 hover:bg-gray-600 hover:text-white  hover:duration-1000"
                }
                to={`/artist/${artist?.artist_id}`}
              >
                {artist.name}
              </NavLink>
            ))}
          </li>
        </ul>
      </div>
      <div className="hidden md:block">
        {artists?.map((artist) => (
          <NavLink
            key={artist.id}
            className={({ isActive, isPending }) =>
              isPending
                ? "block text-lg py-3 px-7 w-full text-[#9F9F9F]"
                : isActive
                ? " bg-gray-700 text-white py-3 px-7 w-full rounded"
                : "block text-lg w-full py-3 px-7 text-[#9F9F9F] my-5 hover:bg-gray-600 hover:text-white  hover:duration-1000"
            }
            to={`/artist/${artist?.artist_id}`}
          >
            {artist.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideBar = () => {
  const [artists, setArtists] = useState(null);
  useEffect(() => {
    fetch("/public/artist.json")
      .then((res) => res.json())
      .then((data) => setArtists(data));
  }, []);

  return (
    <div className="mt-5">
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
  );
};

export default LeftSideBar;

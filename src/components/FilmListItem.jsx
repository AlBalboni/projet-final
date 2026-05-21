import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FilmListItem = ({ film }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);

  let description = film.description;
  if (!showFullDesc) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{film.genre}</div>
          <h3 className="text-xl font-bold">{film.title}</h3>
        </div>

        <div className="mb-5">{description}</div>
        <button
          className="text-red-500 mb-2 mr-2 hover:text-red-900 cursor-pointer"
          onClick={() => setShowFullDesc(() => !showFullDesc)}
        >
          {showFullDesc ? "Moins" : "Plus"}
        </button>

        <h3 className="text-red-500 mb-2">{film.boxOffice} / an</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaLocationDot className="inline mb-1 mr-1" />
            {film.location}
          </div>
          <Link
            to={`/films/${film.id}`}
            className="h-[36px] bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Lire plus
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FilmListItem;

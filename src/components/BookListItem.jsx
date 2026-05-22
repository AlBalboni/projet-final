import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BookListItem = ({ book }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);

  let description = book.description;
  if (!showFullDesc) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{book.genre}</div>
          <h3 className="text-xl font-bold">{book.title}</h3>
          <h4 className="text-gray-500 mb-2">Published by {book.author} in the {book.century}</h4>
        </div>

        <div className="mb-5">{description}</div>
        <button
          className="text-blue-500 mb-2 mr-2 hover:text-blue-900 cursor-pointer"
          onClick={() => setShowFullDesc(() => !showFullDesc)}
        >
          {showFullDesc ? "Show less" : "Show more"}
        </button> 

        <h3 className="text-blue-500 mb-2">{book.pageCount} pages</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaLocationDot className="inline mb-1 mr-1" />
            {book.language}
          </div>
          <Link
            to={`/books/${book.id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookListItem;

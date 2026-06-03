{/*BookListItem is responsible for displaying the books*/}
import { useState } from "react";
import { MdLanguage } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

const BookListItem = ({ book }) => {

  const [showFullDesc, setShowFullDesc] = useState(false);

  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    return favorites.includes(book.id.toString());
  });

{/*toggle favorite has the function to add/remove books from favorites*/}
const toggleFavorite = () => {
  const favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

  let updatedFavorites;

  if (isFavorite) {
    updatedFavorites = favorites.filter(
      (id) => id !== book.id.toString()
    );

    setIsFavorite(false);
  } else {
    updatedFavorites = [
      ...favorites,
      book.id.toString(),
    ];

    setIsFavorite(true);
  }

  localStorage.setItem(
    "favorites",
    JSON.stringify(updatedFavorites)
  );
};

  let description = book.description || "";
  if (!showFullDesc && description.length > 40) {
    description = description.substring(0, 40) + "...";
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <button
        onClick={toggleFavorite}
        className="absolute top-4 right-4 text-red-500 text-2xl cursor-pointer">
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </button>
      <div className="p-4">
        <div className="mb-6">
          <div className="text-blue-800 my-2 font-semibold">
            {/* i converted genres to array to allow multiple genres. so if there are multiple it will print a comma between.*/}
              {Array.isArray(book.genre) 
              ? book.genre.join(", ") 
              : book.genre}
            </div>
          <h3 className="text-xl font-bold">{book.title}</h3>
          <h4 className="text-gray-700 mb-2">Published by {book.author} in the {book.century} Century</h4>
        </div>

        <div className="mb-5">{description}</div>
        <button
          className="text-blue-500 mb-2 mr-2 hover:text-blue-900 cursor-pointer"
          onClick={() => setShowFullDesc(() => !showFullDesc)}
        >
          {showFullDesc ? "Show less" : "Show more"}
        </button> 

        <h3 className="text-gray-800 mb-2">{book.pageCount} pages</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <MdLanguage className="inline mb-1 mr-1" />
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

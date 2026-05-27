import BookList from "../components/BookList";
import { useState, useEffect } from "react";
{/*toasts*/ }
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const BookPage = () => {
  {/*for searching bar*/ }
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  {/*for sorting genre filter*/ }
  const [sortGenre, setSortGenre] = useState("");
  {/*for sorting by alphabetical order and page Count*/ }
  const [sortOption, setSortOption] = useState("");
  const [showOption, setShowOption] = useState(false);

  useEffect(() => {
  const message = searchParams.get("toast");
  const type = searchParams.get("type");

  if (message) {
    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    } else if (type === "info") {
      toast.info(message);
    } else if (type === "warning") {
      toast.warning(message);
    }

    setSearchParams({});
  }
 }, []);

  return (

    <>
<div className="flex items-center justify-between gap-4 px-6 py-6 bg-white flex-wrap">

  {/* SORTING ICON */}
  <div className="relative">
    <button
      onClick={() => setShowOption(!showOption)}
      className="border rounded-lg p-3 hover:bg-gray-100"
    >
      <FaBars />
    </button>

    {showOption && (
      <div className="absolute top-14 left-0 bg-white border rounded-lg shadow-md p-3 flex flex-col gap-2 z-10">
        <button
          onClick={() => {
            setSortOption("az");
            setShowOption(false);
          }}
          className="hover:text-blue-500 text-left"
        >
          Alphabetical (A-Z)
        </button>

        <button
          onClick={() => {
            setSortOption("pagesAsc");
            setShowOption(false);
          }}
          className="hover:text-blue-500 text-left"
        >
          Pages (Low to High)
        </button>

        <button
          onClick={() => {
            setSortOption("pagesDesc");
            setShowOption(false);
          }}
          className="hover:text-blue-500 text-left"
        >
          Pages (High to Low)
        </button>
      </div>
    )}
  </div>

  {/* SEARCH BAR */}
  <input
    type="text"
    placeholder="Search for book or author..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="flex-1 max-w-xl border rounded-lg py-2 px-4 focus:outline-none focus:ring-3 focus:ring-blue-500"
  />

  {/* GENRE FILTER */}
  <select
    value={sortGenre}
    onChange={(e) => setSortGenre(e.target.value)}
    className="border rounded-lg py-2 px-4"
  >
    <option value="">All genres</option>
    <option value="Adventure">Adventure</option>
    <option value="Biography">Biography</option>
    <option value="Classic">Classic</option>
    <option value="Comedy">Comedy</option>
    <option value="Crime">Crime</option>
    <option value="Dystopian">Dystopian</option>
    <option value="Epic">Epic</option>
    <option value="Essay">Essay</option>
    <option value="Fantasy">Fantasy</option>
    <option value="Fiction">Fiction</option>
    <option value="Graphic Novel">Graphic Novel</option>
    <option value="Historical">Historical</option>
    <option value="Historical Fiction">Historical Fiction</option>
    <option value="Horror">Horror</option>
    <option value="Mystery">Mystery</option>
    <option value="Philosophical">Philosophical</option>
    <option value="Poetry">Poetry</option>
    <option value="Psychological">Psychological</option>
    <option value="Religious">Religious</option>
    <option value="Realism">Realism</option>
    <option value="Romance">Romance</option>
    <option value="Satire">Satire</option>
    <option value="Social Criticism">Social Criticism</option>
    <option value="Science Fiction">Science Fiction</option>
    <option value="Theatrical">Theatrical</option>
    <option value="Thriller">Thriller</option>
  </select>

</div>
  <BookList 
    search={search}
    sortGenre={sortGenre}
    sortOption={sortOption}
  />
  </>
  );
};

export default BookPage;

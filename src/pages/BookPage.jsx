{/*Page with all the books, so the one thats next to the homepage*/}
import BookList from "../components/BookList";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
{/*toasts*/ }
import { toast } from "react-toastify";

const BookPage = () => {
  {/*for sorting by alphabetical order and page Count*/ }
  const [sortOption, setSortOption] = useState("");
  const [showOption, setShowOption] = useState(false);
  {/*for searching bar*/ }
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  {/*for sorting genre filter*/ }
  const [sortGenre, setSortGenre] = useState("");
  const [genreBooks, setGenreBooks] = useState([]);

  useEffect(() => {

    const fetchBooks = async () => {
      const BASE_URL = import.meta.env.VITE_API_URL;

      const response = await fetch(`${BASE_URL}/books`);
      const data = await response.json();
      setGenreBooks(data);
    };
    fetchBooks();
{/*Alerts for the toasts i think warning is not used but may be used in the future*/}
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

{/*Counts the number of books for each genre and displays the count to the right*/ }
 const genreCounts = {
    Adventure: 0,
    Biography: 0,
    Classic: 0,
    Comedy: 0,
    Crime: 0,
    Dystopian: 0,
    Economic: 0,
    Epic: 0,
    Essay: 0,
    Fantasy: 0,
    Fiction: 0,
    "Graphic Novel": 0,
    Historical: 0,
    "Historical Fiction": 0,
    Horror: 0,
    Mystery: 0,
    Philosophical: 0,
    Poetry: 0,
    Political: 0,
    Psychological: 0,
    Religious: 0,
    Realism: 0,
    Romance: 0,
    Satire: 0,
    "Science Fiction": 0,
    Scientific: 0,
    "Social Criticism": 0,
    Theater: 0,
    Thriller: 0,
  };

  genreBooks.forEach((book) => {
    if (Array.isArray(book.genre)) {

      book.genre.forEach((g) => {
        if (genreCounts[g] !== undefined) {
          genreCounts[g]++;
        }
      });

    } else {
      if (genreCounts[book.genre] !== undefined) {
        genreCounts[book.genre]++;
      }
    }
  });

  return (
    <>
<div className="flex items-center justify-between gap-4 px-6 py-6 bg-white flex-wrap">

  {/* SORTING ICON click on it to show options */}
  <div className="relative">
    <button
      onClick={() => setShowOption(!showOption)}
      className="border rounded-lg p-3 hover:bg-gray-100"
    >
      <FaBars/>
    </button>
{/*sort by alphabetical order*/}
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
{/*Sort by number of pages ascending*/}
        <button
          onClick={() => {
            setSortOption("pagesAsc");
            setShowOption(false);
          }}
          className="hover:text-blue-500 text-left"
        >
          Pages (Low to High)
        </button>
{/*Sort by number of pages descending*/}
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

  {/* SEARCH BAR for books and authors*/}
  <div className="relative flex-1 max-w-xl">
    <input
      type="text"
      placeholder="Search for book or author..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full border rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-3 focus:ring-blue-500">
    </input>
   <FaSearch className="absolute left-3 top-3 text-gray-400" />
  </div>

  {/* GENRE FILTER */}
  <select
    value={sortGenre}
    onChange={(e) => setSortGenre(e.target.value)}
    className="border rounded-lg py-2 px-4"
  >
    <option value="">All genres</option>
    <option value="Adventure">Adventure ({genreCounts.Adventure})</option>
    <option value="Biography">Biography ({genreCounts.Biography})</option>
    <option value="Classic">Classic ({genreCounts.Classic})</option>
    <option value="Comedy">Comedy ({genreCounts.Comedy})</option>
    <option value="Crime">Crime ({genreCounts.Crime})</option>
    <option value="Dystopian">Dystopian ({genreCounts.Dystopian})</option>
    <option value="Economic">Economic ({genreCounts.Economic})</option>
    <option value="Epic">Epic ({genreCounts.Epic})</option>
    <option value="Essay">Essay ({genreCounts.Essay})</option>
    <option value="Fantasy">Fantasy ({genreCounts.Fantasy})</option>
    <option value="Fiction">Fiction ({genreCounts.Fiction})</option>
    <option value="Graphic Novel">Graphic Novel ({genreCounts["Graphic Novel"]})</option>
    <option value="Historical">Historical ({genreCounts.Historical})</option>
    <option value="Historical Fiction">Historical Fiction ({genreCounts["Historical Fiction"]})</option>
    <option value="Horror">Horror ({genreCounts.Horror})</option>
    <option value="Mystery">Mystery ({genreCounts.Mystery})</option>
    <option value="Philosophical">Philosophical ({genreCounts.Philosophical})</option>
    <option value="Poetry">Poetry ({genreCounts.Poetry})</option>
    <option value="Political">Political ({genreCounts.Political})</option>
    <option value="Psychological">Psychological ({genreCounts.Psychological})</option>
    <option value="Religious">Religious ({genreCounts.Religious})</option>
    <option value="Realism">Realism ({genreCounts.Realism})</option>
    <option value="Romance">Romance ({genreCounts.Romance})</option>
    <option value="Satire">Satire ({genreCounts.Satire})</option>
    <option value="Social Criticism">Social Criticism ({genreCounts["Social Criticism"]})</option>
    <option value="Scientific">Scientific ({genreCounts.Scientific})</option>
    <option value="Science Fiction">Science Fiction ({genreCounts["Science Fiction"]})</option>
    <option value="Theater">Theater ({genreCounts.Theater})</option>
    <option value="Thriller">Thriller ({genreCounts.Thriller})</option>
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
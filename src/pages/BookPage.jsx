import BookList from "../components/BookList";
import { useState, useEffect } from "react";
{/*toasts*/ }
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";

const BookPage = () => {
  {/*for searching bar*/ }
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  {/*for sorting genre*/ }
  const [sortGenre, setSortGenre] = useState("");

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
    <div className="flex justify-center px-4 py-6 bg-white">
      <input type="text" placeholder="Search for book or author..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full max-w-xl border rounded-lg py-2 px-4 focus:outline-none focus:ring-3 focus:ring-blue-500" />
    </div>
    <div className="flex justify-center pb-6 bg-white">
      <select
      value={sortGenre}
      onChange={(e) => setSortGenre(e.target.value)}
      className="border rounded-lg py-2 px-4"
      >
        <option value="">All genres</option>
              <option value="Adventure">
                Adventure
              </option>
              <option value="Biography">
                Biography
              </option>
              <option value="Classic">
                Classic
              </option>
              <option value="Comedy">
                Comedy
              </option>
              <option value="Crime">
                Crime
              </option>
              <option value="Dystopian">
                Dystopian
              </option>
              <option value="Epic">
                Epic
              </option>
              <option value="Fantasy">
                Fantasy
              </option>
              <option value="Fiction">
                Fiction
              </option>
              <option value="Graphic Novel">
                Graphic Novel
              </option>
              <option value="Historical">
                Historical
              </option>
              <option value="Historical Fiction">
                Historical Fiction
              </option>
              <option value="Horror">
                Horror
              </option>
              <option value="Mystery">
                Mystery
              </option>
              <option value="Philosophical">
                Philosophical
              </option>
              <option value="Poetry">
                Poetry
              </option>
              <option value="Psychological">
                Psychological
              </option>
              <option value="Religious">
                Religious
              </option>
              <option value="Realism">
                Realism
              </option>
              <option value="Romance">
                Romance
              </option>
              <option value="Satire">
                Satire
              </option>
              <option value="Science Fiction">
                Science Fiction
              </option>
              <option value="Thriller">
                Thriller
              </option>
      </select>
    </div>
  <BookList 
    search={search}
    sortGenre={sortGenre}
  />
  </>
  );
};

export default BookPage;

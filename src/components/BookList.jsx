import BookListItem from "./BookListItem";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const recupBooks = async ({ isHome }) => {
  const BASE_URL = import.meta.env.VITE_API_URL;

  const response = await fetch(`${BASE_URL}/books`);

  if (!response.ok) throw new Error("Server error...");

  const books = await response.json();

  // To  show the most recent books properly on netlify we have to use this
  //sort function to avoid server errors
  if (isHome) {
    return books.sort((a, b) => Number(b.id) - Number(a.id));
  }

  return books;
};

const BookList = ({ isHome = false, search="" }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    recupBooks({ isHome })
      .then(setData)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);
const filteredData = data.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()))
.slice(0, isHome ? 4 : data.length);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          {isHome ? "Recent Books" : "List of books"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-15">
          {loading && <Spinner loading={loading} />}
          {error && <p>Error: {error}</p>}
          {!error &&
            !loading &&
            filteredData.map((book) => <BookListItem key={book.id} book={book} />)}
        </div>
      </div>
    </section>
  );
};

export default BookList;

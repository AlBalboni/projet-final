import BookListItem from "./BookListItem";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const recupBooks = async ({ isHome }) => {
  const apiUrl = isHome
    ? "http://localhost:8000/books?_limit=3"
    : "http://localhost:8000/books";
  const response = await fetch(apiUrl);
  if (!response.ok) throw new Error("Serveur error...");
  return await response.json();
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
const filteredData = data.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()));
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          {isHome ? "Books récents" : "Liste des books"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading && <Spinner loading={loading} />}
          {error && <p>Erreur: {error}</p>}
          {!error &&
            !loading &&
            filteredData.map((book) => <BookListItem key={book.id} book={book} />)}
        </div>
      </div>
    </section>
  );
};

export default BookList;

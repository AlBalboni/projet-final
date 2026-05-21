import FilmListItem from "./FilmListItem";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const recupFilms = async ({ isHome }) => {
  const apiUrl = isHome
    ? "http://localhost:8000/films?_limit=3"
    : "http://localhost:8000/films";
  const response = await fetch(apiUrl);
  if (!response.ok) throw new Error("erreur réseau");
  return await response.json();
};

const FilmList = ({ isHome = false, search="" }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    recupFilms({ isHome })
      .then(setData)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);
const filteredData = data.filter((film) => film.title.toLowerCase().includes(search.toLowerCase()));
  return (
    <section className="bg-red-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">
          {isHome ? "Films récents" : "Liste des films"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading && <Spinner loading={loading} />}
          {error && <p>Erreur: {error}</p>}
          {!error &&
            !loading &&
            filteredData.map((film) => <FilmListItem key={film.id} film={film} />)}
        </div>
      </div>
    </section>
  );
};

export default FilmList;

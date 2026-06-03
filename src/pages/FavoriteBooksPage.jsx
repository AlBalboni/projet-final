{/*Page that handles with the favorites*/}
import { useEffect, useState } from "react";
import BookListItem from "../components/BookListItem";

const FavoriteBooksPage = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const BASE_URL = import.meta.env.VITE_API_URL;

      const response = await fetch(`${BASE_URL}/books`);
      const books = await response.json();
{/*books are saved inside a local storage (the favorites page)*/}
      const favorites =
        JSON.parse(localStorage.getItem("favorites")) || [];
{/*This line of code is so that the sorting doesnt reset when you put a book in favorites*/}
      const filteredBooks = books.filter((book) =>
        favorites.includes(book.id.toString())
      );

      setFavoriteBooks(filteredBooks);
    };

    fetchFavorites();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          Favorite Books
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-15">
          {favoriteBooks.map((book) => (
            <BookListItem key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavoriteBooksPage;
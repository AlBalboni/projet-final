import BookList from "../components/BookList";
import { useState } from "react";

const BookPage = () => {
  const [search, setSearch] = useState("");
  return (

    <>
    <div className="flex justify-center px-4 py-6 bg-white">
      <input type="text" placeholder="Rechercher un book..." 
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
  <BookList search={search} />
  </>
  );
};

export default BookPage;

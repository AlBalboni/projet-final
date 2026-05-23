import BookList from "../components/BookList";
import { useState, useEffect } from "react";
//toasts
import { toast } from "react-toastify";

const BookPage = () => {
  const [search, setSearch] = useState("");

useEffect(() => {
  const toastData = sessionStorage.getItem("toast");

  if (toastData) {
    const { message, type } = JSON.parse(toastData);

    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    }

    sessionStorage.removeItem("toast");
  }
}, []);

  return (

    <>
    <div className="flex justify-center px-4 py-6 bg-white">
      <input type="text" placeholder="Search for a book..." 
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
  <BookList search={search} />
  </>
  );
};

export default BookPage;

import BookList from "../components/BookList";
import { useState, useEffect } from "react";
{/*toasts*/ }
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";

const BookPage = () => {
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

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

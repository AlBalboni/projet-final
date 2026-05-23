import { redirect } from "react-router-dom";

const editBookAction = async ({ request, params }) => {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const formData = await request.formData();
  const updatedBook = {
    title: formData.get("title"),
    author: formData.get("author"),
    genre: formData.getAll("genre"),
    language: formData.get("language"),
    century: formData.get("century"),
    pageCount: formData.get("pageCount"),
    description: formData.get("description"),
  };

  await fetch(`${BASE_URL}/books/${params.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedBook),
  });

  sessionStorage.setItem("toast", "Book updated successfully!");
  return redirect("/books");
};

export default editBookAction;
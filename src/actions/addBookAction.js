import { redirect } from "react-router-dom";

const addBookAction = async ({ request }) => {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const formData = await request.formData();

  const errors = {};
  const genre = formData.getAll("genre");
  if (genre.length === 0) {
    errors.genre = "At least one genre must be selected.";
  }

  if (Object.keys(errors).length > 0) {
  return { errors };
  }

  const newBook = {
    title: formData.get("title"),
    author: formData.get("author"),
    genre: formData.getAll("genre"),
    language: formData.get("language"),
    century: formData.get("century"),
    pageCount: formData.get("pageCount"),
    description: formData.get("description"),
  };

  await fetch(`${BASE_URL}/books`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newBook),
  });

  sessionStorage.setItem(
    "toast",
    JSON.stringify({
      message: "Book added successfully!",
      type: "info",
    })
  );
  return redirect("/books");
};

export default addBookAction;
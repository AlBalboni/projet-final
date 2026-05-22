import { redirect } from "react-router-dom";

const addBookAction = async ({ request }) => {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const formData = await request.formData();

  const errors = {};
  const title = formData.get("title");
  if (!title || title.trim().length <3){
    errors.title ="Title must have at least 3 characters.";
  }

  if (Object.keys(errors).length > 0) {
  return { errors };
  }

  const newBook = {
    title: formData.get("title"),
    author: formData.get("author"),
    genre: formData.get("genre"),
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

  sessionStorage.setItem("toast", "Book added successfully!");
  return redirect("/books");
};

export default addBookAction;
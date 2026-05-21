import { redirect } from "react-router-dom";

const addBookAction = async ({ request }) => {
  const formData = await request.formData();
  const newBook = {
    title: formData.get("title"),
    description: formData.get("description"),
    BoxOffice: formData.get("BoxOffice"),
    Country: formData.get("Country"),
    Director: formData.get("Director"),
    Genre: formData.get("Genre"),
  };

  await fetch("http://localhost:8000/books/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newBook),
  });

  return redirect("/books");
};

export default addBookAction;
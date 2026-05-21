import { redirect } from "react-router-dom";

const editBookAction = async ({ request, params }) => {
  const formData = await request.formData();
  const updatedBook = {
    title: formData.get("title"),
    description: formData.get("description"),
    BoxOffice: formData.get("BoxOffice"),
    Country: formData.get("Country"),
    Director: formData.get("Director"),
    Genre: formData.get("Genre"),
  };

  await fetch(`http://localhost:8000/books/${params.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedBook),
  });

  return redirect("/books");
};

export default editBookAction;
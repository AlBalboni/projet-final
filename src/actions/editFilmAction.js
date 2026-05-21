import { redirect } from "react-router-dom";

const editFilmAction = async ({ request, params }) => {
  const formData = await request.formData();
  const updatedFilm = {
    title: formData.get("title"),
    description: formData.get("description"),
    BoxOffice: formData.get("BoxOffice"),
    Country: formData.get("Country"),
    Director: formData.get("Director"),
    Genre: formData.get("Genre"),
  };

  await fetch(`http://localhost:8000/films/${params.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedFilm),
  });

  return redirect("/films");
};

export default editFilmAction;
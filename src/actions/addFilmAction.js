import { redirect } from "react-router-dom";

const addFilmAction = async ({ request }) => {
  const formData = await request.formData();
  const newFilm = {
    title: formData.get("title"),
    description: formData.get("description"),
    BoxOffice: formData.get("BoxOffice"),
    Country: formData.get("Country"),
    Director: formData.get("Director"),
    Genre: formData.get("Genre"),
  };

  await fetch("http://localhost:8000/films/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newFilm),
  });

  return redirect("/films");
};

export default addFilmAction;
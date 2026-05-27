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

  {/*If the user choses AD the century is formatted as a number, ele it's formatted as BC th*/}
  const century = formData.get("century");
  const era = formData.get("era");

  const formattedCentury =
    era === "BC"
      ? `${century}th BC`
      : `${century}th`;

  const newBook = {
    title: formData.get("title"),
    author: formData.get("author"),
    genre: formData.getAll("genre"),
    language: formData.get("language"),
    century: formattedCentury,
    pageCount: formData.get("pageCount"),
    description: formData.get("description"),
  };

  await fetch(`${BASE_URL}/books`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newBook),
  });

return redirect(
  "/books?toast=Book added successfully!&type=success"
);

};

export default addBookAction;
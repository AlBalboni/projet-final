const bookLoader = async ({ params }) => {
  const BASE_URL = import.meta.env.VITE_API_URL;
{/*fixed bug with netlify deployment doesnt allow ?bookId*/}
  const response = await fetch(
    `${BASE_URL}/books/${params.id}`
  );

  if (!response.ok) {
    throw new Error("Book info not found");
  }

  return await response.json();
};

export default bookLoader;
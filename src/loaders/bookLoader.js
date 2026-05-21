const Loader = async ({ params }) => {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const response = await fetch(`${BASE_URL}/books/${params.id}`);
  if (!response.ok) throw new Error("Book info not found");
  return await response.json();
};

export default Loader;

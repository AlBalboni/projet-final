const Loader = async ({ params }) => {
  const response = await fetch(`http://localhost:8000/books/${params.id}`);
  if (!response.ok) throw new Error("Book info not found");
  return await response.json();
};

export default Loader;

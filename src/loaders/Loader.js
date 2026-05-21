const Loader = async ({ params }) => {
  const response = await fetch(`http://localhost:8000/jobs/${params.id}`);
  if (!response.ok) throw new Error("Objet introuvable");
  return await response.json();
};

export default Loader;

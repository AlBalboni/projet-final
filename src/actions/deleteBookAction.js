import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

const deleteBookAction = async ({ params }) => {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const confirm = window.confirm("Confirm deletion?");
  if (!confirm) return null;

  await fetch(`${BASE_URL}/books/${params.id}`, {
    method: "DELETE",
  });

 toast.warn("Book deleted");
 return redirect("/books");
};

export default deleteBookAction;

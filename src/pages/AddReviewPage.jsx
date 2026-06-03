import { Form } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const AddReviewPage = () => {
const data = useLoaderData();

return (
<>
  <section>
    <div className="container m-auto py-6 px-6">
      <Link
        to={`/books/${data.id}/reviews`}
        className="text-blue-500 hover:text-blue-600 flex items-center"
      >
        <FaArrowLeft className="mr-2" /> Get back to book
      </Link>
    </div>
  </section>
  <section className="bg-blue-50">
    <div className="container m-auto max-w-2xl py-24">
      <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <Form method="put">
            <h2 className="text-3xl text-center font-semibold mb-6">
              Add Review
            </h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Reviewer</label>
              <input
                type="text"
                id="reviewer"
                name="reviewer"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Reviewer name"
                required
                defaultValue={data.reviewer}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Rating</label>
              <input
                type="text"
                id="rating"
                name="rating"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Rating (1-5)"
                required
                defaultValue={data.rating}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Comment
              </label>
              <textarea
                id="comment"
                name="comment"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Your review..."
                defaultValue={data.comment}
              ></textarea>
            </div>     

            <div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Review
              </button>
            </div>
          </Form>
        </div>
      </div>
    </section>
</>
  );
};

export default AddReviewPage;

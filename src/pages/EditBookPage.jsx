import { Form } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const EditBookPage = () => {
const data = useLoaderData();
  return (
    <section className="bg-red-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <Form method="put">
            <h2 className="text-3xl text-center font-semibold mb-6">
              Modify Book
            </h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="ex: Dune..."
                required
                defaultValue={data.title}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Description of the book..."
                defaultValue={data.description}
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Language</label>
              <input
                type="text"
                id="language"
                name="language"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Original language of the book"
                required
                defaultValue={data.language}
              />
            </div>

            <div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Modify Book
              </button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default EditBookPage;

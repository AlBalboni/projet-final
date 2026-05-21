import { Form, Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft, FaLocationDot } from "react-icons/fa6";

const BookDetailPage = () => {
  const data = useLoaderData();
  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/books"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Get back to list of books
          </Link>
        </div>
      </section>
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{data.genre}</div>
                <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaLocationDot className="text-lg text-orange-700 mr-2" />
                  <p className="text-orange-700">{data.language}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-blue-800 text-lg font-bold mb-6">
                  Description
                </h3>

                <p className="mb-4">{data.description}</p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Gestion</h3>
                
                <Link to={`/edit-book/${data.id}`}
                  className="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit book
                </Link>
                <Form method="delete">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                  Delete book
                </button>
                </Form>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookDetailPage;

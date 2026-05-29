import { Form, Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";
import { MdEdit, MdDelete } from "react-icons/md";

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
          <div className="grid grid-cols-1 md:grid-cols-[70%_28%] gap-6 max-w-7xl mx-auto">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{data.genre.join(", ")}</div>
                <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
                <div className="text-orange-700 mb-3">
                  <MdLanguage className="inline mb-1 mr-1" />
                    {data.language}
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
                <h3 className="text-xl font-bold mb-6">Modify book</h3>
                
                <Link to={`/edit-book/${data.id}`}
                  className="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  <MdEdit className="inline mb-1 mr-1" />
                  Edit book
                </Link>
                <Link to={`/books/${data.id}/reviews`} 
                  className="bg-purple-500 hover:bg-purple-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Reviews
                </Link>
                <Form method="delete">
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                  <MdDelete className="inline mb-1 mr-1" />
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

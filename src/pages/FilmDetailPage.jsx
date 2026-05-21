import { Form, Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft, FaLocationDot } from "react-icons/fa6";

const FilmDetailPage = () => {
  const data = useLoaderData();
  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/films"
            className="text-red-500 hover:text-red-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Revenir à la liste des films
          </Link>
        </div>
      </section>
      <section className="bg-red-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{data.type}</div>
                <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaLocationDot className="text-lg text-orange-700 mr-2" />
                  <p className="text-orange-700">{data.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-red-800 text-lg font-bold mb-6">
                  Description
                </h3>

                <p className="mb-4">{data.description}</p>

                <h3 className="text-red-800 text-lg font-bold mb-2">Salaire</h3>

                <p className="mb-4">{data.salary} / an</p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Entreprise</h3>

                <h2 className="text-2xl">{data.company.name}</h2>

                <p className="my-2">{data.company.description}</p>

                <hr className="my-4" />

                <h3 className="text-xl">Email:</h3>

                <p className="my-2 bg-red-100 p-2 font-bold">
                  {data.company.contactEmail}
                </p>

                <h3 className="text-xl">Téléphone:</h3>

                <p className="my-2 bg-red-100 p-2 font-bold">
                  {data.company.contactPhone}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Gestion</h3>
                
                <Link to={`/edit-film/${data.id}`}
                  className="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Editer film
                </Link>
                <Form method="delete">
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                  Supprimer film
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

export default FilmDetailPage;

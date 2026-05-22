import { Link } from "react-router-dom";
import Card from "./Card";

const CardContainer = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">Look up your favorite books</h2>
            <p className="mt-2 mb-4">
              Analyze the most popular books and find your next book to read
            </p>
            <Link
              to="/books"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Books
            </Link>
          </Card>

          <Card bg="bg-blue-100">
            <h2 className="text-2xl font-bold">For editors</h2>
            <p className="mt-2 mb-4">
              Add the books you want to see and the
            </p>
            <Link
              to="/add-books"
              className="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
            >
              Add a book
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CardContainer;

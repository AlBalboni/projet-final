import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ReviewsPage = () => {

  const [reviews, setReviews] = useState([]);

  const [books, setBooks] = useState([]);

  const REVIEW_URL =
    import.meta.env.VITE_REVIEW_API_URL;

  const BOOK_URL =
    import.meta.env.VITE_API_URL;

  useEffect(() => {

    const fetchData = async () => {

      const reviewResponse =
        await fetch(REVIEW_URL);

      const reviewsData =
        await reviewResponse.json();

      const bookResponse =
        await fetch(`${BOOK_URL}/books`);

      const booksData =
        await bookResponse.json();

      setReviews(reviewsData);

      setBooks(booksData);
    };

    fetchData();

  }, [REVIEW_URL, BOOK_URL]);

  const getBook = (bookId) => {

    return books.find(
      (book) =>
        book.id.toString() === bookId.toString()
    );
  };

  return (

    <section className="bg-blue-50 min-h-screen py-10 px-6">

      <div className="container mx-auto max-w-4xl">

        <h1 className="text-4xl font-bold text-blue-500 mb-10">
          All Reviews
        </h1>

        <div className="space-y-6">

          {reviews.length > 0 ? (

            reviews.map((reviews) => {

              const book = getBook(reviews.bookId);

              return (

                <div
                  key={reviews.id}
                  className="bg-white rounded-xl shadow-md p-6"
                >

                  <Link
                    to={`/books/${reviews.bookId}`}
                    className="text-2xl font-bold hover:text-blue-500"
                  >
                    {book?.title || "Unknown Book"}
                  </Link>

                  <h3 className="text-blue-600 font-semibold mt-2">
                {reviews.reviewer}
            </h3>

            <p className="text-yellow-500 mt-1">
                {"⭐".repeat(Number(reviews.rating))}
            </p>

            <p className="mt-3 text-gray-700">
                {reviews.comment}
            </p>

                </div>
              );
            })

          ) : (

            <p className="text-gray-500">
              No reviews yet.
            </p>

          )}

        </div>

      </div>

    </section>
  );
};

export default ReviewsPage;
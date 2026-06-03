import { useLoaderData, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

const BookReviewsPage = () => {
  const book = useLoaderData();

  const [reviews, setReviews] = useState([]);

  const REVIEW_URL =
    import.meta.env.VITE_REVIEW_API_URL;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `${REVIEW_URL}?bookId=${book.id}`
        );

        const data = await response.json();

        setReviews(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setReviews([]);
      }
    };

    fetchReviews();
  }, [REVIEW_URL, book.id]);

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to={`/books/${book.id}`}
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Get back to book
          </Link>
        </div>
      </section>
    <section className="bg-blue-50 min-h-screen py-10 px-6">
      <div className="container max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h1 className="text-4xl font-bold text-blue-500 mb-2">
            {book.title}
          </h1>

          <p className="text-gray-500 mb-8">
            Reviews
          </p>

          <Link
            to={`/books/${book.id}/add-review`}
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mb-8"
          >
            Add Review
          </Link>

          <div className="space-y-4">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div
                  key={review.id}
                  className="border rounded-lg p-4"
                >
                  <h3 className="font-bold text-blue-600">
                    {review.reviewer}
                  </h3>

                  <p className="text-yellow-500 mt-1">
                    {"⭐".repeat(Number(review.rating || 0))}
                  </p>

                  <p className="mt-2 text-gray-700">
                    {review.comment}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">
                No reviews yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
</>
  );
};

export default BookReviewsPage;
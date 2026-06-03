{/*This page is exclusively to see the reviews ONLY of a individual book. SO when you click on read more of a book and then on reviews*/}
import { useLoaderData, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

const BookReviewsPage = () => {
  const book = useLoaderData();

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const REVIEW_URL =
    import.meta.env.VITE_REVIEW_API_URL;
{/*used a fetch request to get the reviews from the API*/}
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);

        const response = await fetch(REVIEW_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }

        const data = await response.json();

        const filteredReviews = Array.isArray(data)
          ? data.filter((review) => {
              if (!review.bookId) return false;

              return (
                String(review.bookId) ===
                String(book.id)
              );
            })
          : [];
{/*did this to filter the reviews for the specific book ONLY*/}
        setReviews(filteredReviews);
      } catch (error) {
        console.error(
          "Error fetching reviews:",
          error
        );

        setReviews([]);
      } finally {
        setLoading(false);
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
            <FaArrowLeft className="mr-2" />
            Get back to book
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
              {loading ? (
                <p className="text-gray-500">
                  Loading reviews...
                </p>
              ) : reviews.length > 0 ? (
                reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border rounded-lg p-4"
                  >
                    <h3 className="font-bold text-blue-600">
                      {review.reviewer}
                    </h3>
{/*Number of stars for a book maximum 5 minimum 0*/}
                    <p className="text-yellow-500 mt-1">
                      {"⭐".repeat(
                        Number(review.rating || 0)
                      )}
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
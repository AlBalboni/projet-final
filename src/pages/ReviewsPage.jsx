{/*Page where you see ALL the reviews. Only Reviewer rating and comments are showed, also a link to the book*/}
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
      try {
        const reviewResponse =
          await fetch(REVIEW_URL);

        const reviewsData =
          await reviewResponse.json();

        const bookResponse =
          await fetch(`${BOOK_URL}/books`);

        const booksData =
          await bookResponse.json();

        setReviews(
          Array.isArray(reviewsData)
            ? reviewsData
            : []
        );

        setBooks(
          Array.isArray(booksData)
            ? booksData
            : []
        );
      } catch (error) {
        console.error(
          "Error loading reviews:",
          error
        );
      }
    };

    fetchData();
  }, [REVIEW_URL, BOOK_URL]);

{/*used AI to fix a bug in the web, when a book hasnt got a review it throws an error */}
  const getBook = (bookId) => {
    if (!bookId) return undefined;

    return books.find((book) => {
      if (!book?.id) return false;
      return String(book.id) === String(bookId);
    });
  };

  return (
    <section className="bg-blue-50 min-h-screen py-10 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          All Reviews
        </h1>

        <div className="space-y-6">
          {reviews.length > 0 ? (
            reviews
              .filter((review) => review?.id) // remove corrupted reviews thanks AI
              .map((review) => {
                const book = getBook(review.bookId);

              return (
                <div
                  key={review.id}
                  className="bg-white rounded-xl shadow-md p-6"
                >
                  <Link
                    to={`/books/${review.bookId}`}
                    className="text-2xl font-bold hover:text-blue-500"
                  >
{/*handles when a book is deleted or not found, so that the review remains visible*/}
                    {book ? book.title : 
                    "Unknown Book (deleted or invalid)"}
                  </Link>

                  <h3 className="text-blue-600 font-semibold mt-2">
                    {review.reviewer}
                  </h3>

                  <p className="text-yellow-500 mt-1">
                    {"⭐".repeat(
                      Number(review.rating || 0)
                    )}
                  </p>

                  <p className="mt-3 text-gray-700">
                    {review.comment}
                  </p>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500 text-center">
              No reviews yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReviewsPage;
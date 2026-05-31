import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const BookReviewsPage = () => {
  const book = useLoaderData();

  const [reviews, setReviews] = useState([]);

  const [reviewer, setReviewer] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const REVIEW_URL =
    import.meta.env.VITE_REVIEW_API_URL;

  useEffect(() => {
    const fetchReviews = async () => {
        const response = await fetch(
          `${REVIEW_URL}?bookId=${book.id}`
        );

        const data = await response.json();

        setReviews(Array.isArray(data) ? data : []);
    };

    fetchReviews();
  }, [REVIEW_URL, book.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      bookId: book.id,
      reviewer,
      rating,
      comment,
    };

    try {
      const response = await fetch(REVIEW_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });

      const savedReview = await response.json();

      setReviews((prev) => [...prev, savedReview]);

      setReviewer("");
      setComment("");
      setRating("");
    } catch (error) {
      console.error("Error posting review:", error);
    }
  };

  return (
    <section className="bg-blue-50 min-h-screen py-10 px-6">
      <div className="container max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h1 className="text-4xl font-bold text-blue-500 mb-2">
            {book.title}
          </h1>

          <p className="text-gray-500 mb-8">
            Reviews
          </p>

          {/* REVIEW FORM */}

          <form
            onSubmit={handleSubmit}
            className="mb-10"
          >
            <input
              type="text"
              placeholder="Your name..."
              value={reviewer}
              onChange={(e) => setReviewer(e.target.value)}
              className="border rounded w-full py-2 px-3 mb-4"
              required
            />

            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="border rounded w-full py-2 px-3 mb-4"
              required
            >
              <option value="">
                Select rating
              </option>

              <option value="1">1 ⭐</option>
              <option value="2">2 ⭐⭐</option>
              <option value="3">3 ⭐⭐⭐</option>
              <option value="4">4 ⭐⭐⭐⭐</option>
              <option value="5">5 ⭐⭐⭐⭐⭐</option>
            </select>

            <textarea
              placeholder="Write your review..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows="4"
              className="border rounded w-full py-2 px-3 mb-4"
              required
            />

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
            >
              Post review
            </button>
          </form>

          {/* REVIEWS */}

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
  );
};

export default BookReviewsPage;
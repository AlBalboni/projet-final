const bookLoader = async ({ params }) => {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const REVIEW_URL = import.meta.env.VITE_REVIEW_API_URL;

  const reviewResponse = await fetch(`${REVIEW_URL}?bookId=${params.id}`);
  const response = await fetch(`${BASE_URL}/books/${params.id}`);
  if (!response.ok) throw new Error("Book info not found");
  if (!reviewResponse.ok) throw new Error("Reviews not found");
  const [bookData, reviewsData] = await Promise.all([
    response.json(),
    reviewResponse.json()
  ]);
  return { ...bookData, reviews: reviewsData };
};

export default bookLoader;

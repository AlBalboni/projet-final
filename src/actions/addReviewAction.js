import { redirect } from "react-router-dom";

const addReviewAction = async ({ request, params }) => {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const formData = await request.formData();

  const errors = {};

  const reviewer = formData.get("reviewer");
  const rating = formData.get("rating");
  const comment = formData.get("comment");

  if (!reviewer?.trim()) {
    errors.reviewer = "Reviewer name is required.";
  }

  if (!rating) {
    errors.rating = "Rating is required.";
  }

  if (!comment?.trim()) {
    errors.comment = "Review cannot be empty.";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const newReview = {
    reviewer,
    rating,
    comment,
  };

  await fetch(`${BASE_URL}/books/${params.id}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newReview),
  });

  return redirect(
    `/books/${params.id}/reviews?toast=Review added successfully!&type=success`
  );
};

export default addReviewAction;
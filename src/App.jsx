import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import BookPage from "./pages/BookPage";
import NotFoundPage from "./pages/NotFoundPage";
import BookDetailPage from "./pages/BookDetailPage";
import bookLoader from "./loaders/bookLoader";
import AddBookPage from "./pages/AddBookPage";
import addBookAction from "./actions/addBookAction";
import EditBookPage from "./pages/EditBookPage";
import editBookAction from "./actions/editBookAction";
import deleteBookAction from "./actions/deleteBookAction";
import ReviewsPage from "./pages/ReviewsPage";
import BookReviewsPage from "./pages/BookReviewsPage";
import FavoriteBooksPage from "./pages/FavoriteBooksPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/books" element={<BookPage />}/>
        <Route
         path="/books/:id"
         element={<BookDetailPage />}
         loader={bookLoader}
         errorElement={<NotFoundPage />}
         action={deleteBookAction}
        />
      <Route path="/add-books" element={<AddBookPage />} action={addBookAction} />
      <Route path="/favorite-books" element={<FavoriteBooksPage />} />
      <Route
        path="/edit-book/:id"
        element={<EditBookPage />}
        loader={bookLoader}
        errorElement={<NotFoundPage />}
        action={editBookAction}
      />
      <Route path="/reviews" element={<ReviewsPage />} />  
      <Route path="/books/:id/reviews" element={<BookReviewsPage />} loader={bookLoader} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App

import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import BookPage from "./pages/BookPage";
import AddBookPage from "./pages/AddBookPage";
import Loader  from "./loaders/bookLoader";
import EditBookPage from "./pages/EditBookPage";
import editBookAction from "./actions/editBookAction";
import addBookAction from "./actions/addBookAction";


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/books" element={<BookPage />}/>
        <Route
         path="/books/:id"
         loader={Loader}
         errorElement={<NotFoundPage />}
        />
      <Route path="/add-books" element={<AddBookPage />} action={addBookAction} />
      <Route
        path="/edit-books/:id"
        element={<EditBookPage />}
        loader={Loader}
        errorElement={<NotFoundPage />}
        action={editBookAction}
      />  
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App

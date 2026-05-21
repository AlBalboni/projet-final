import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import FilmPage from "./pages/FilmPage";
import AddFilmPage from "./pages/AddFilmPage";
import NavBar from "./components/NavBar";
import Loader  from "./loaders/Loader";
import EditFilmPage from "./pages/EditFilmPage";
import editFilmAction from "./actions/editFilmAction";
import addFilmAction from "./actions/addFilmAction";


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/films" element={<FilmPage />}/>
        <Route
         path="/films/:id"
         loader={Loader}
         errorElement={<NotFoundPage />}
        />
      <Route path="/add-film" element={<AddFilmPage />} action={addFilmAction} />
      <Route
        path="/edit-films/:id"
        element={<EditFilmPage />}
        loader={Loader}
        errorElement={<NotFoundPage />}
        action={editFilmAction}
      />  
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App

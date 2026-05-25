import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Spinner from "../components/Spinner";
{/*toasts*/ }
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
    <NavBar/>
    <ToastContainer position="top-right" autoClose={3000} />
    {isLoading ? <Spinner loading={isLoading} /> : <Outlet/>}

    </>
  );
};

export default MainLayout;
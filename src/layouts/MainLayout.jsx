import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Spinner from "../components/Spinner";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
    <NavBar/>
    <ToastContainer position="top-right" autoClose={3000}  />
    {isLoading ? <Spinner loading={isLoading} /> : <Outlet/>}

    </>
  );
};

export default MainLayout;
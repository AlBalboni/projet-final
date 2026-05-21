import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Spinner from "../components/Spinner";

const MainLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
    <NavBar/>
    {isLoading ? <Spinner loading={isLoading} /> : <Outlet/>}

    </>
  );
};

export default MainLayout;
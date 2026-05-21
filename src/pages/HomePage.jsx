import Hero from "../components/Hero";
import CardContainer from "../components/CardContainer";
import FilmList from "../components/FilmList";

const HomePage = () => {
  return (
    <>
      <Hero />
      <CardContainer />
      <FilmList isHome />
    </>
  );
};

export default HomePage;

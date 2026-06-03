{/*Home page shows the Hero, Card Container and the BookList*/}
import Hero from "../components/Hero";
import CardContainer from "../components/CardContainer";
import BookList from "../components/BookList";

const HomePage = () => {
  return (
    <>
      <Hero />
      <CardContainer />
      <BookList isHome />
    </>
  );
};

export default HomePage;

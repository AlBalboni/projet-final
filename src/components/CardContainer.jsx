import Card from "./Card";

const CardContainer = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">Regarder vos films preferes</h2>
            <p className="mt-2 mb-4">
              analyser les films les plus populaires et trouver votre prochain film à regarder
            </p>
            <a
              href="/films.html"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Parcourir films
            </a>
          </Card>

          <Card bg="bg-red-100">
            <h2 className="text-2xl font-bold">Pour les employeurs</h2>
            <p className="mt-2 mb-4">
              Ajouter les films que vous voulez voir et les
            </p>
            <a
              href="/add-film.html"
              className="inline-block bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600"
            >
              Ajouter un film
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CardContainer;

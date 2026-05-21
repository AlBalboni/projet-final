import Card from "./Card";

const CardContainer = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">Regarder vos books preferes</h2>
            <p className="mt-2 mb-4">
              analyser les books les plus populaires et trouver votre prochain Book à regarder
            </p>
            <a
              href="/books.html"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Parcourir books
            </a>
          </Card>

          <Card bg="bg-blue-100">
            <h2 className="text-2xl font-bold">Pour les employeurs</h2>
            <p className="mt-2 mb-4">
              Ajouter les books que vous voulez voir et les
            </p>
            <a
              href="/add-books.html"
              className="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
            >
              Ajouter un book
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CardContainer;

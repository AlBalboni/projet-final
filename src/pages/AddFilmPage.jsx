import { Form } from "react-router-dom";

const AddFilmPage = () => {
  return (
    <section className="bg-red-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <Form method="post">
            <h2 className="text-3xl text-center font-semibold mb-6">
              Ajouter un film
            </h2>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Type de film
              </label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
              >
                <option value="Temps-Plein">Temps plein</option>
                <option value="Mi-Temps">Mi-temps</option>
                <option value="Télétravail">Télétravail</option>
                <option value="Stage">Stage</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Titre
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="ex: Développeur..."
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="toute info relative au job..."
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Salaire
              </label>
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
              >
                <option value="Moins €50K">Moins de €50K</option>
                <option value="€50K - 60K">€50K - €60K</option>
                <option value="€60K - 70K">€60K - €70K</option>
                <option value="€70K - 80K">€70K - €80K</option>
                <option value="€80K - 90K">€80K - €90K</option>
                <option value="€90K - 100K">€90K - €100K</option>
                <option value="€100K - 125K">€100K - €125K</option>
                <option value="€125K - 150K">€125K - €150K</option>
                <option value="€150K - 175K">€150K - €175K</option>
                <option value="€175K - 200K">€175K - €200K</option>
                <option value="Plus €200K">Plus de €200K</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Lieu</label>
              <input
                type="text"
                id="location"
                name="location"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Emplacement Entreprise"
                required
              />
            </div>

            <h3 className="text-2xl mb-5">Information entreprise</h3>

            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-gray-700 font-bold mb-2"
              >
                Nom de l'entreprise
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="border rounded w-full py-2 px-3"
                placeholder="Nom de l'entreprise"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description de l'entreprise
              </label>
              <textarea
                id="company_description"
                name="company_description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Que fait l'entreprise?"
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email de contact
              </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="email"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Téléphone
              </label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="téléphone"
              />
            </div>

            <div>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Ajouter Job
              </button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default AddFilmPage;

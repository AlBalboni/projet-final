import { Form, useActionData } from "react-router-dom";
import { useState } from "react";

const AddBookPage = () => {
  const actionsData = useActionData();
  //this is used to make multiple genres inside the form.
  const [genres, setGenres] = useState([""]);
  const handleGenreChange = (index, value) => {
  const updatedGenres = [...genres];
  updatedGenres[index] = value;
  setGenres(updatedGenres);
  };

  const addGenreField = () => {
    setGenres([...genres, ""]);
  };

  const errors = actionsData?.error;
  return (
    <section className="bg-blue-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <Form method="post">
            <h2 className="text-3xl text-center font-semibold mb-6">
              Add a book
            </h2>

            <div className="mb-4">
              <label 
                htmlFor="title"
                className="block text-gray-700 font-bold mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="ex: Dune..."
                required
              />
              {errors?.title && <p className="text-red-500 text-sm">{errors.title}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Author</label>
              <input
                type="text"
                id="author"
                name="author"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Author of the book"
                required
              />
            </div>

            <div className="mb-4">

            <label className="block text-gray-700 font-bold mb-2">
               Genre
            </label>

            {genres.map((genre, index) => (
              <select
                key={index}
                name="genre"
                value={genre}
                onChange={(e) =>
                handleGenreChange(index, e.target.value)
               }
              className="border rounded w-full py-2 px-3 mb-2"
              required={index === 0}
              >
            <option value="">Select a genre</option>
              <option value="Adventure">
                Adventure
              </option>
              <option value="Biography">
                Biography
              </option>
              <option value="Classic">
                Classic
              </option>
              <option value="Comedy">
                Comedy
              </option>
              <option value="Crime">
                Crime
              </option>
              <option value="Dystopian">
                Dystopian
              </option>
              <option value="Epic">
                Epic
              </option>
              <option value="Fantasy">
                Fantasy
              </option>
              <option value="Fiction">
                Fiction
              </option>
              <option value="Graphic Novel">
                Graphic Novel
              </option>
              <option value="Historical">
                Historical
              </option>
              <option value="Historical Fiction">
                Historical Fiction
              </option>
              <option value="Horror">
                Horror
              </option>
              <option value="Mystery">
                Mystery
              </option>
              <option value="Philosophical">
                Philosophical
              </option>
              <option value="Poetry">
                Poetry
              </option>
              <option value="Religious">
                Religious
              </option>
              <option value="Realism">
                Realism
              </option>
              <option value="Romance">
                Romance
              </option>
              <option value="Satire">
                Satire
              </option>
              <option value="Science Fiction">
                Science Fiction
              </option>
              <option value="Thriller">
                Thriller
              </option>
          </select>
              ))}

              <button
                type="button"
                onClick={addGenreField}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                Add another genre
              </button>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Language</label>
              <input
                type="text"
                id="language"
                name="language"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Original language of the book"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Century</label>
              <input
                type="text"
                id="century"
                name="century"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Release century of the book"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Pages</label>
              <input
                type="number"
                id="pageCount"
                name="pageCount"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Number of pages"
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
                placeholder="Description of the book..."
              ></textarea>
            </div>     

            <div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add book
              </button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default AddBookPage;

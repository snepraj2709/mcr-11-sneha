import React, { useState } from "react";
import { useData } from "../context/DataContext";
import { RxCross2 } from "../utils/icons";

function AddMovieModal({ closeModal }) {
  const { state, dispatch } = useData();
  const [newMovie, setNewMovie] = useState({
    id: state?.allMovies?.length + 1,
    title: "",
    year: "",
    genre: "",
    rating: "",
    director: "",
    writer: "",
    cast: "",
    summary: "",
    imageURL: "",
  });
  const allGenre = state?.allMovies?.reduce(
    (acc, curr) =>
      curr.genre?.reduce(
        (acc, el) => (acc.includes(el) ? acc : [...acc, el]),
        acc
      ),
    []
  );

  function submitMovie() {
    const media = newMovie.imageURL;
    if (media === "") {
      dispatch({
        type: "ADD_NEW_MOVIE",
        payload: {
          ...newMovie,
          imageURL: "https://picsum.photos/id/237/200/300",
        },
      });
    } else {
      dispatch({ type: "ADD_NEW_MOVIE", payload: newMovie });
    }
    closeModal();
  }

  return (
    <div className="bg-slate-400 p-10 rounded-lg shadow-lg fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-80 z-10">
      <form className="space-y-2 bg-slate-200 dark:bg-slate-800 p-10 w-2/3 rounded-md">
        <div className="flex justify-between mb-5">
          <p className="font-bold text-xl">Add Movie</p>
          <RxCross2 className="w-6 h-6" onClick={() => closeModal()} />
        </div>
        <div className="flex flex-col gap-4">
          <label className="font-bold text-lg">Name</label>
          <input
            className="dark:bg-slate-700 dark:text-white bg-slate-100 border-slate-300 border h-8 rounded-sm"
            type="text"
            value={newMovie.title}
            onChange={(e) =>
              setNewMovie({ ...newMovie, title: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col">
          <label className="font-bold text-lg">year</label>
          <input
            className="dark:bg-slate-700 dark:text-white bg-slate-100 border-slate-300 border h-8 rounded-sm"
            type="number"
            value={newMovie.year}
            onChange={(e) => setNewMovie({ ...newMovie, year: e.target.value })}
          />
        </div>

        <div className="flex flex-col">
          <label className="font-bold text-lg">Genre</label>
          <select
            className="bg-inherit w-32"
            onChange={(e) =>
              setNewMovie({ ...newMovie, genre: e.target.value })
            }>
            {allGenre.map((genre, index) => (
              <option
                key={index}
                value={genre}
                className="dark:bg-slate-700 dark:text-white">
                {genre}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-bold text-lg">Rating</label>
          <input
            className="dark:bg-slate-700 dark:text-white bg-slate-100 border-slate-300 border h-8 rounded-sm"
            type="number"
            value={newMovie.rating}
            onChange={(e) =>
              setNewMovie({ ...newMovie, rating: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col">
          <label className="font-bold text-lg">Director</label>
          <input
            className="dark:bg-slate-700 dark:text-white bg-slate-100 border-slate-300 border h-8 rounded-sm"
            type="text"
            value={newMovie.director}
            onChange={(e) =>
              setNewMovie({ ...newMovie, director: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col">
          <label className="font-bold text-lg">Writer</label>
          <input
            className="dark:bg-slate-700 dark:text-white bg-slate-100 border-slate-300 border h-8 rounded-sm"
            type="text"
            value={newMovie.writer}
            onChange={(e) =>
              setNewMovie({ ...newMovie, writer: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col">
          <label className="font-bold text-lg">Cast</label>
          <input
            className="dark:bg-slate-700 dark:text-white bg-slate-100 border-slate-300 border h-8 rounded-sm"
            type="text"
            value={newMovie.cast}
            onChange={(e) => setNewMovie({ ...newMovie, cast: e.target.value })}
          />
        </div>

        <div className="flex flex-col">
          <label className="font-bold text-lg">Summary</label>
          <textarea
            className="dark:bg-slate-700 dark:text-white bg-slate-100 border-slate-300 border h-8 rounded-sm"
            value={newMovie.summary}
            onChange={(e) =>
              setNewMovie({ ...newMovie, summary: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col">
          <label className="font-bold text-lg">Image URL</label>
          <input
            className="dark:bg-slate-700 dark:text-white bg-slate-100 border-slate-300 border h-8 rounded-sm"
            type="text"
            value={newMovie.imageURL}
            onChange={(e) => {
              setNewMovie({ ...newMovie, imageURL: e.target.value });
            }}
          />
        </div>

        <button
          onClick={submitMovie}
          className="bg-blue-500 p-3 text-white rounded-md w-36 cursor-pointer">
          Add new Movie
        </button>
      </form>
    </div>
  );
}

export default AddMovieModal;

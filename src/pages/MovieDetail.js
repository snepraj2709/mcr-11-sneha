import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useData } from "../context/DataContext";

function MovieDetail() {
  const { movieId } = useParams();
  const { state } = useData();
  const currentMovie = state?.allMovies.find(
    (movie) => movie.id === parseInt(movieId)
  );
  const {
    title,
    year,
    genre,
    rating,
    director,
    writer,
    cast,
    summary,
    imageURL,
  } = currentMovie;
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="overflow-hidden flex flex-col lg:max-w-6xl grow mx-auto">
        <div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg mt-5 shadow-lg">
          <div>
            <img
              src={imageURL}
              alt={title}
              className="p-10 object-contain rounded-md"
            />
          </div>
          <div className="flex flex-col ml-4 space-y-5 py-10 px-2">
            <h2 className="font-bold text-3xl">{title}</h2>
            <p className="font-base text-lg">{summary}</p>
            <div className="text-lg flex space-x-2">
              <b>Year:</b>
              <p>{year}</p>
            </div>

            <div className="text-lg flex space-x-2">
              <b>Genre:</b>
              {genre.map((el, index) => (
                <p key={index}>{el},</p>
              ))}
            </div>

            <div className="text-lg flex space-x-2">
              <b>Rating:</b>
              <p>{rating}</p>
            </div>

            <div className="text-lg flex space-x-2">
              <b>Director:</b>
              <p>{director}</p>
            </div>

            <div className="text-lg flex space-x-2">
              <b>Writer:</b>
              <p>{writer}</p>
            </div>

            <div className="text-lg flex space-x-2">
              <b>Cast:</b>
              {cast?.map((el, index) => (
                <p key={index}>{el},</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}

export default MovieDetail;

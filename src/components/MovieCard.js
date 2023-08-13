import {
  MdWatchLater,
  MdOutlineWatchLater,
  AiFillStar,
  AiOutlineStar,
} from "../utils/icons";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

function MovieCard({ data }) {
  const { id, title, imageURL, summary, watchLater, starred } = data;
  const { addToWatchlist, removeFromWatchlist, removeStar, addStar } =
    useData();
  const navigate = useNavigate();
  // console.log(data);

  return (
    <div className="flex flex-col p-2 drop-shadow-md shadow-lg max-w-md rounded-lg overflow-hidden bg-slate-100 h-100 dark:bg-slate-800">
      <div
        className="relative group  text-center"
        onClick={() => navigate(`/movie/${id}`)}>
        <img
          src={imageURL}
          alt={title}
          className="object-contain rounded-lg w-full h-96 group-hover:scale-110 transition-transform duration-150 ease-in-out"
        />
        <p className="text-lg font-medium py-1 line-clamp-2">{title}</p>
        <p className="text-base font-light py-1 line-clamp-4">{summary}</p>
      </div>
      <div className="py-2 flex flex-row justify-evenly mt-3 cursor-pointer">
        <button
          className="flex cursor-pointer bg-blue-100 dark:bg-slate-900 rounded-full p-1"
          onClick={() =>
            watchLater ? removeFromWatchlist(data) : addToWatchlist(data)
          }>
          {watchLater ? (
            <MdWatchLater className="w-6 h-6 text-blue-700 dark:text-white cursor-pointer" />
          ) : (
            <MdOutlineWatchLater className="w-6 h-6 text-blue-700 dark:text-white cursor-pointer" />
          )}
          <p className="px-2">WatchLater</p>
        </button>
        <button
          className="flex cursor-pointer bg-blue-100 dark:bg-slate-900 rounded-full p-1"
          onClick={() => (starred ? removeStar(data) : addStar(data))}>
          {starred ? (
            <AiFillStar className="w-6 h-6 text-blue-700 dark:text-white cursor-pointer" />
          ) : (
            <AiOutlineStar className="w-6 h-6 text-blue-700 dark:text-white cursor-pointer" />
          )}
          <p className="px-2">Star</p>
        </button>
      </div>
    </div>
  );
}

export default MovieCard;

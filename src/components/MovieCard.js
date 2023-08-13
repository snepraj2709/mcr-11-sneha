import { MdWatchLater, MdOutlineWatchLater } from "../utils/icons";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

function MovieCard({ data }) {
  const { _id, title, views, thumbnail, creator, watchLater } = data;
  const { addToWatchlist, removeFromWatchlist } = useData();
  const navigate = useNavigate();
  console.log(data);

  return (
    <div className="flex flex-col p-2 drop-shadow-md shadow-lg max-w-md rounded-lg overflow-hidden dark:bg-slate-800">
      <div className="relative group aspect-w-16 aspect-h-9">
        <img
          src={thumbnail}
          alt={title}
          className="object-cover rounded-lg w-full group-hover:scale-110 transition-transform duration-150 ease-in-out"
        />
        <button
          className="absolute top-2 right-2 cursor-pointer bg-white dark:bg-slate-900 rounded-full p-1"
          onClick={() =>
            watchLater ? removeFromWatchlist(data) : addToWatchlist(data)
          }>
          {watchLater ? (
            <MdWatchLater className="w-6 h-6 text-blue-700 dark:text-white cursor-pointer" />
          ) : (
            <MdOutlineWatchLater className="w-6 h-6 text-blue-700 dark:text-white cursor-pointer" />
          )}
        </button>
      </div>
      <div
        className="flex flex-row justify-between mt-3 cursor-pointer"
        onClick={() => navigate(`/${_id}`)}>
        <div className="flex flex-col flex-grow justify-start">
          <h2 className="text-base font-medium pl-3 line-clamp-2">{title}</h2>
          <span className="flex text-sm font-medium text-gray-500 dark:text-gray-300 pl-3 line-clamp-1 space-x-1">
            <p className="line-clamp-1">{views} Views</p> |{" "}
            <p className="line-clamp-1">{creator}</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;

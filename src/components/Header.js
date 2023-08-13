import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useData } from "../context/DataContext";
import { MdSearch, FaSun, FaMoon, FaImdb } from "../utils/icons";

import { useTheme } from "../context/ThemeContext";

function Header() {
  const { darkTheme, setDarkTheme } = useTheme();
  const { state, dispatch } = useData();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  //   const filteredVideos = state?.allVideos.filter((video) =>
  //     video.title.toLowerCase().includes(input.toLowerCase())
  //   );

  function searchVideo(e) {
    setInput(e.target.value);
    e.target.value = ""
      ? dispatch({ type: "FilterMovie", payload: "" })
      : dispatch({ type: "FilterMovie", payload: [] });
  }

  return (
    <div className="dark:bg-slate-800">
      <div className="flex flex-row justify-between my-2 lg:max-w-6xl w-100 mx-auto">
        <div className="flex ml-3 md:ml-10" onClick={() => navigate("/")}>
          <FaImdb className="w-6 h-6 mx-1 my-auto text-red-600" />
          <h2 className="hidden md:inline-block my-auto font-sans text-lg font-bold">
            IMDB
          </h2>
        </div>

        <div className="flex border border-gray-200 shadow-lg h-7 rounded-full">
          <MdSearch className="w-6 h-6 mx-1 my-auto" />
          <input
            type="text"
            value={input}
            onClick={() =>
              location?.pathname !== "/explore" && navigate("/explore")
            }
            onChange={(e) => searchVideo(e)}
            className="bg-transparent outline-none"
          />
        </div>
        <div className="flex md:mr-10 justify-between space-x-4">
          <p>Movies</p>
          <p>Watchlist</p>
          <p>Starred</p>
          <button onClick={() => setDarkTheme(!darkTheme)}>
            {darkTheme ? (
              <FaSun className="w-5 h-5 mx-2 my-auto" />
            ) : (
              <FaMoon className="w-5 h-5 mx-2 my-auto" />
            )}
          </button>
        </div>
      </div>
      <hr className="border-gray-500" />
    </div>
  );
}

export default Header;

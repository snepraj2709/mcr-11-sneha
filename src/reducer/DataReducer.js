export const DataReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_INITIAL_DATA":
      return { ...payload };

    case "ADD_TO_WATCHLIST": {
      const updatedMovies = state?.allMovies.map((movie) =>
        movie.id === payload.id ? { ...payload, watchLater: true } : movie
      );
      return {
        ...state,
        allMovies: updatedMovies,
      };
    }

    case "REMOVE_FROM_WATCHLIST": {
      const updatedMovies = state?.allMovies.map((movie) =>
        movie.id === payload.id ? { ...payload, watchLater: false } : movie
      );
      return {
        ...state,
        allMovies: updatedMovies,
      };
    }

    case "ADD_STAR": {
      const updatedMovies = state?.allMovies.map((movie) =>
        movie.id === payload.id ? { ...payload, starred: true } : movie
      );
      return {
        ...state,
        allMovies: updatedMovies,
      };
    }

    case "REMOVE_STAR": {
      const updatedMovies = state?.allMovies.map((movie) =>
        movie.id === payload.id ? { ...payload, starred: false } : movie
      );
      return {
        ...state,
        allMovies: updatedMovies,
      };
    }
    case "SELECT_GENRE": {
      return { ...state, selectedGenre: payload };
    }
    case "SELECT_RELEASE_YEAR": {
      return { ...state, selectedYear: payload };
    }
    case "SELECT_RATING": {
      return { ...state, selectedRating: payload };
    }
    case "SEARCH_MOVIE": {
      return { ...state, searchInput: payload };
    }
    case "ADD_NEW_MOVIE": {
      return {
        ...state,
        allMovies: [...state.allMovies, payload],
      };
    }

    default:
      return state;
  }
};

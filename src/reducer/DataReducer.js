export const DataReducer = (state, { type, payload }) => {
  switch (type) {
    case "InitialDataFetch": {
      if (payload) {
        return {
          ...state,
          payload,
        };
      }
      break;
    }

    default:
      return state;
  }
};

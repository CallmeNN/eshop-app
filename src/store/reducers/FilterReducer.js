const initialState = {
  category: "ALL",
  sortBy: "default",
  search: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER_BY_CAT": {
      return {
        ...state,
        filters: {
          ...state.filters,
          category: action.filter,
        },
      };
    }

    case "SET_FILTER_TO_SORT": {
      return {
        ...state,
        filters: {
          ...state.filters,
          sortBy: action.filter,
        },
      };
    }
    case "CLEAR_FILTER": {
      return {
        ...state,
        filters: { ...initialState },
      };
    }

    default: {
      return state;
    }
  }
};

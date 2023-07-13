export const initialState = {
  allBooks: [],
};
export const bookReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_BOOK": {
      return {
        ...state,
        allBooks: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

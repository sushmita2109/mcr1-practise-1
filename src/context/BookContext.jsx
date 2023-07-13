import { createContext, useContext, useEffect, useReducer } from "react";
import { data } from "../data/data";
import { bookReducer, initialState } from "../reducer/bookReducer";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [bookStates, bookDispatch] = useReducer(bookReducer, initialState);

  const getData = () => {
    bookDispatch({ type: "GET_ALL_BOOK", payload: data });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <BookContext.Provider value={{ bookStates }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBook = () => useContext(BookContext);

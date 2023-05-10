import { CARBOOK } from "../constants";

const loadCarBook = (book) => ({
  type: CARBOOK.LOAD,
  book,
});

const setCarBook = (book) => ({
  type: CARBOOK.LOAD_SUCCESS,
  book,
});

const setError = (error) => ({
  type: CARBOOK.LOAD_FAIL,
  error,
});

export { loadCarBook, setCarBook, setError };

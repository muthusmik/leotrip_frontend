import { BUSBOOK } from "../constants";

const loadBusBook = (book) => ({
  type: BUSBOOK.LOAD,
  book,
});

const setBusBook = (book) => ({
  type: BUSBOOK.LOAD_SUCCESS,
  book,
});

const setError = (error) => ({
  type: BUSBOOK.LOAD_FAIL,
  error,
});

export { loadBusBook, setBusBook, setError };

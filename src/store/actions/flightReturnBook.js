import { FLIGHTRETURNBOOK } from "../constants";

const loadFlightReturnBook = (flight) => ({
  type: FLIGHTRETURNBOOK.LOAD,
  flight,
});

const setFlightReturnBook = (flight) => ({
  type: FLIGHTRETURNBOOK.LOAD_SUCCESS,
  flight,
});

const setError = (error) => ({
  type: FLIGHTRETURNBOOK.LOAD_FAIL,
  error,
});

export { loadFlightReturnBook, setFlightReturnBook, setError };

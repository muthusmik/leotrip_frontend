import { FLIGHTONEWAYBOOK } from "../constants";

const loadFlightOnewayBook = (flight) => ({
  type: FLIGHTONEWAYBOOK.LOAD,
  flight,
});

const setFlightOnewayBook = (flight) => ({
  type: FLIGHTONEWAYBOOK.LOAD_SUCCESS,
  flight,
});

const setError = (error) => ({
  type: FLIGHTONEWAYBOOK.LOAD_FAIL,
  error,
});

export { loadFlightOnewayBook, setFlightOnewayBook, setError };

import { FLIGHTONEWAY } from "../constants";

const loadFlightOneway = (flight) => ({
  type: FLIGHTONEWAY.LOAD,
  flight,
});

const setFlightOneway = (flight) => ({
  type: FLIGHTONEWAY.LOAD_SUCCESS,
  flight,
});

const setError = (error) => ({
  type: FLIGHTONEWAY.LOAD_FAIL,
  error,
});

export { loadFlightOneway, setFlightOneway, setError };

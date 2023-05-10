import { FLIGHT_SEARCH } from "../constants";

const loadFlightList = (flight) => ({
  type:FLIGHT_SEARCH.LOAD_SEARCH,
  flight,
});

const setFlightList = (flight) => ({
  type: FLIGHT_SEARCH.FLIGHTSEARCH_SUCCESS,
  flight,
});

const setError = (error) => ({
  type: FLIGHT_SEARCH.FLIGHTSEARCH_FAIL,
  error,
});

export { loadFlightList, setFlightList, setError };

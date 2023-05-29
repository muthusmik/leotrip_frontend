//action of flight booking return gds
import { FLIGHTRETURNBOOKGDS } from "../constants";

const loadFlightReturnBookGDS = (flight) => ({
  type: FLIGHTRETURNBOOKGDS.LOAD,
  flight,
});

const setFlightReturnBookGDS = (flight) => ({
  type: FLIGHTRETURNBOOKGDS.LOAD_SUCCESS,
  flight,
});

const setError = (error) => ({
  type: FLIGHTRETURNBOOKGDS.LOAD_FAIL,
  error,
});

export { loadFlightReturnBookGDS, setFlightReturnBookGDS, setError };

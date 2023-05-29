//action of flight return book hold gds
import { FLIGHTRETURNBOOKHOLDGDS } from "../constants";

const loadFlightReturnBookHOLDGDS = (flight) => ({
  type: FLIGHTRETURNBOOKHOLDGDS.LOAD,
  flight,
});

const setFlightReturnBookHOLDGDS = (flight) => ({
  type: FLIGHTRETURNBOOKHOLDGDS.LOAD_SUCCESS,
  flight,
});

const setError = (error) => ({
  type: FLIGHTRETURNBOOKHOLDGDS.LOAD_FAIL,
  error,
});

export { loadFlightReturnBookHOLDGDS, setFlightReturnBookHOLDGDS, setError };

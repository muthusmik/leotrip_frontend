import { AIRLINE } from "../constants";

const loadAirLine = (airline) => ({
  type: AIRLINE. LOAD_AIRLINE,
  airline,
});

const setAirLine = (airline) => ({
  type: AIRLINE.AIRLINE_SUCCESS,
  airline,
});

const setError = (error) => ({
  type: AIRLINE.AIRLINE_FAIL,
  error,
});

export { loadAirLine, setAirLine, setError };

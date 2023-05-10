import { FLIGHTONEWAYINFO } from "../constants";

const loadFlightOnewayInfo = (flight) => ({
  type: FLIGHTONEWAYINFO.LOAD,
  flight,
});

const setFlightOnewayInfo = (flight) => ({
  type: FLIGHTONEWAYINFO.LOAD_SUCCESS,
  flight,
});

const setError = (error) => ({
  type: FLIGHTONEWAYINFO.LOAD_FAIL,
  error,
});

export { loadFlightOnewayInfo, setFlightOnewayInfo, setError };

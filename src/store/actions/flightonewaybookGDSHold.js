//action of flight booking oneway hold gds
import { FLIGHTONEWAYBOOKHOLDGDS } from "../constants";

const loadFlightOnewayBookHOLDGDS = (flight) => ({
  type: FLIGHTONEWAYBOOKHOLDGDS.LOAD,
  flight,
});

const setFlightOnewayBookHOLDGDS = (flight) => ({
  type: FLIGHTONEWAYBOOKHOLDGDS.LOAD_SUCCESS,
  flight,
});

const setError = (error) => ({
  type: FLIGHTONEWAYBOOKHOLDGDS.LOAD_FAIL,
  error,
});

export { loadFlightOnewayBookHOLDGDS, setFlightOnewayBookHOLDGDS, setError };

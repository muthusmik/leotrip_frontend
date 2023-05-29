//action of flight oneway booking gds
import { FLIGHTONEWAYBOOKGDS } from "../constants";

const loadFlightOnewayBookGDS = (flight) => ({
  type: FLIGHTONEWAYBOOKGDS.LOAD,
  flight,
});

const setFlightOnewayBookGDS = (flight) => ({
  type: FLIGHTONEWAYBOOKGDS.LOAD_SUCCESS,
  flight,
});

const setError = (error) => ({
  type: FLIGHTONEWAYBOOKGDS.LOAD_FAIL,
  error,
});

export { loadFlightOnewayBookGDS, setFlightOnewayBookGDS, setError };

import { CAR } from "../constants";

const loadCarList = (car) => ({
  type: CAR.LOAD,
  car,
});

const setCarList = (car) => ({
  type: CAR.LOAD_SUCCESS,
  car,
});

const setError = (error) => ({
  type: CAR.LOAD_FAIL,
  error,
});

export { loadCarList, setCarList, setError };

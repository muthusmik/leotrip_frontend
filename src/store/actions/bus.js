import { BUS } from "../constants";

const loadBusList = (bus) => ({
  type: BUS.LOAD,
  bus,
});

const setBusList = (bus) => ({
  type: BUS.LOAD_SUCCESS,
  bus,
});

const setError = (error) => ({
  type: BUS.LOAD_FAIL,
  error,
});

export { loadBusList, setBusList, setError };

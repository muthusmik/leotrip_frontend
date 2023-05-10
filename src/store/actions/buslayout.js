import { BUSLAYOUT } from "../constants";

const loadBusLayout = (bus) => ({
  type: BUSLAYOUT.LOAD,
  bus,
});

const setBusLayout = (bus) => ({
  type: BUSLAYOUT.LOAD_SUCCESS,
  bus,
});

const setError = (error) => ({
  type: BUSLAYOUT.LOAD_FAIL,
  error,
});

export { loadBusLayout, setBusLayout, setError };

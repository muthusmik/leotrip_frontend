import { BUSCITYLIST } from "../constants";

const loadBusCityList = (bus) => ({
  type: BUSCITYLIST.LOAD,
  bus,
});

const setBusCityList = (bus) => ({
  type: BUSCITYLIST.LOAD_SUCCESS,
  bus,
});

const setError = (error) => ({
  type: BUSCITYLIST.LOAD_FAIL,
  error,
});

export { loadBusCityList, setBusCityList, setError };

import { BUSINFO } from "../constants";

const loadBusInfo = (bus) => ({
  type: BUSINFO.LOAD,
  bus,
});

const setBusInfo = (bus) => ({
  type: BUSINFO.LOAD_SUCCESS,
  bus,
});

const setError = (error) => ({
  type: BUSINFO.LOAD_FAIL,
  error,
});

export { loadBusInfo, setBusInfo, setError };

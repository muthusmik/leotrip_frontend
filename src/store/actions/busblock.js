import { BUSBLOCK } from "../constants";

const loadBusBlock = (bus) => ({
  type:BUSBLOCK.LOAD_BUSBLOCK,
  bus,
});

const setBusBlock = (bus) => ({
  type: BUSBLOCK.BUSBLOCK_SUCCESS,
  bus,
});

const setError = (error) => ({
  type: BUSBLOCK.BUSBLOCK_FAIL,
  error,
});

export { loadBusBlock, setBusBlock, setError };

import { CARCITYLIST } from "../constants";

const loadCarCityList = (carcitylist) => ({
  type: CARCITYLIST.LOAD_CARCITYLIST,
  carcitylist,
});

const setCarCityList = (carcitylist) => ({
  type: CARCITYLIST.CARCITYLIST_SUCCESS,
  carcitylist,
});

const setError = (error) => ({
  type: CARCITYLIST.CARCITYLIST_FAIL,
  error,
});

export { loadCarCityList, setCarCityList, setError };

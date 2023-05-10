import { AIRPORTCITYLIST } from "../constants";

const loadAirportCityList = (airport) => ({
  type: AIRPORTCITYLIST. LOAD_AIRPORTCITYLIST,
  airport,
});

const setAirportCityList = (airport) => ({
  type: AIRPORTCITYLIST.AIRPORTCITYLIST_SUCCESS,
  airport,
});

const setError = (error) => ({
  type: AIRPORTCITYLIST.AIRPORTCITYLIST_FAIL,
  error,
});

export { loadAirportCityList, setAirportCityList, setError };

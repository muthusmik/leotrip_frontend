import { HOTELCITYLIST } from "../constants";

const loadHotelCityList = (hotel) => ({
  type: HOTELCITYLIST. LOAD_HOTELCITYLIST,
  hotel,
});

const setHotelCityList = (hotel) => ({
  type: HOTELCITYLIST.HOTELCITYLIST_SUCCESS,
  hotel,
});

const setError = (error) => ({
  type: HOTELCITYLIST.HOTELCITYLIST_FAIL,
  error,
});

export { loadHotelCityList, setHotelCityList, setError };

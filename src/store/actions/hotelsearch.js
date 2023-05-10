import { HOTEL_SEARCH } from "../constants";

const loadHotelList = (hotel) => ({
  type:HOTEL_SEARCH.HOTEL_LOAD,
  hotel,
});

const setHotelList = (hotel) => ({
  type: HOTEL_SEARCH.HOTELSEARCH_SUCCESS,
  hotel,
});

const setError = (error) => ({
  type: HOTEL_SEARCH.HOTELSEARCH_FAIL,
  error,
});

export { loadHotelList, setHotelList, setError };

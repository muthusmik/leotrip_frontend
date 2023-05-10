import { HOTEL_INFO } from "../constants";

const loadHotelInfo = (hotelinfo) => ({
  type:HOTEL_INFO.LOAD_INFO,
  hotelinfo,
});

const setHotelInfo = (hotelinfo) => ({
  type: HOTEL_INFO.HOTELINFO_SUCCESS,
  hotelinfo,
});

const setError = (error) => ({
  type: HOTEL_INFO.HOTELINFO_FAIL,
  error,
});

export { loadHotelInfo, setHotelInfo, setError };

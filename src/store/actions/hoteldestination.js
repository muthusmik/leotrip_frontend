import { HOTEL_DESTINATION } from "../constants";

const loadHotelDestination = (hotelDestination) => ({
  type:HOTEL_DESTINATION.LOAD_HOTELDESTINATION,
  hotelDestination,
});


const setHotelDestination = (hotelDestination) => ({
    type: HOTEL_DESTINATION.HOTELDESTINATION_SUCCESS,
    hotelDestination,
  });

const setError = (error) => ({
  type: HOTEL_DESTINATION.HOTELDESTINATION_FAIL,
  error,
});

export { loadHotelDestination,setHotelDestination,setError };

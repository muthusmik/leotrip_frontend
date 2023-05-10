import { HOTEL_ROOM } from "../constants";

const loadHotelRoom = (hotelroom) => ({
  type:HOTEL_ROOM.LOAD_ROOM,
  hotelroom,
});

const setHotelRoom = (hotelroom) => ({
  type: HOTEL_ROOM.HOTELROOM_SUCCESS,
  hotelroom,
});

const setError = (error) => ({
  type: HOTEL_ROOM.HOTELROOM_FAIL,
  error,
});

export { loadHotelRoom, setHotelRoom, setError };

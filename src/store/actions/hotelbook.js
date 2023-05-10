import { HOTEL_BOOK } from "../constants";

const loadHotelBook = (hotelbook) => ({
  type:HOTEL_BOOK.LOAD_HOTELBOOK,
  hotelbook,
});

const setHotelBook = (hotelbook) => ({
  type: HOTEL_BOOK.HOTELBOOK_SUCCESS,
  hotelbook,
});

const setError = (error) => ({
  type: HOTEL_BOOK.HOTELBOOK_FAIL,
  error,
});

export { loadHotelBook, setHotelBook, setError };

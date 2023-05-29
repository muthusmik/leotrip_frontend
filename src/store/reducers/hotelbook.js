import {  HOTEL_BOOK } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  console.log("reducer case Load_hotelBook",action);
  switch (action.type) {
    case HOTEL_BOOK.LOAD_HOTELBOOK:
      return {
        loading: true,
        data: [],
      };
    case HOTEL_BOOK.HOTELBOOK_SUCCESS:
      console.log("reducer case HOTELBOOK_SUCCESS",action);
      return {
        loading: false,
        data: action.hotelbook,
        error: "",
      };
    case HOTEL_BOOK.HOTELBOOK_FAIL:
      console.log("reducer case HOTELBOOK_FAIL",action);
      return {
        loading: false,
        data: [],
        error: action.error,
      };
    default:
      return state;
  }
};
export default reducer;

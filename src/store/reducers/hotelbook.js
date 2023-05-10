import {  HOTEL_BOOK } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  //  console.log("iam in hotel book reducer",action)
  switch (action.type) {
    case HOTEL_BOOK.LOAD_HOTELBOOK:
      return {
        loading: true,
        data: [],
      };
    case HOTEL_BOOK.HOTELBOOK_SUCCESS:
      return {
        loading: false,
        data: action.hotelbook,
        error: "",
      };
    case HOTEL_BOOK.HOTELBOOK_FAIL:
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

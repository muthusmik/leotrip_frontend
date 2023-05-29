import { FLIGHTRETURNBOOKGDS } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "error_in_flight_return_book_GDS",
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case FLIGHTRETURNBOOKGDS.LOAD:
      return {
        loading: true,
        data: [],

      };
    case FLIGHTRETURNBOOKGDS.LOAD_SUCCESS:
      return {
        loading: false,
        data: action.flight,
        error: "",
      };
    case FLIGHTRETURNBOOKGDS.LOAD_FAIL:
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

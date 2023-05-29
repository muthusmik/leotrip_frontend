import { FLIGHTRETURNBOOKHOLDGDS } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "error_in_flight_return_book_GDS",
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case FLIGHTRETURNBOOKHOLDGDS.LOAD:
      return {
        loading: true,
        data: [],

      };
    case FLIGHTRETURNBOOKHOLDGDS.LOAD_SUCCESS:
      return {
        loading: false,
        data: action.flight,
        error: "",
      };
    case FLIGHTRETURNBOOKHOLDGDS.LOAD_FAIL:
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

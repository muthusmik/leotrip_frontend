import { FLIGHT_SEARCH } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
 
  switch (action.type) {
    case FLIGHT_SEARCH.LOAD_SEARCH:
      return {
        loading: true,
        data:[]
      };
    case FLIGHT_SEARCH.FLIGHTSEARCH_SUCCESS:
      return {
        loading: false,
        data: action.flight,
        error: "",
      };
    case FLIGHT_SEARCH.FLIGHTSEARCH_FAIL:
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

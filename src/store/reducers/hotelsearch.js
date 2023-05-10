import { HOTEL_SEARCH } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  // console.log("iam in HOTEL reducer",action)
  switch (action.type) {
    case HOTEL_SEARCH.HOTEL_LOAD:
      return {
        loading: true,
        data: [],
      };
    case HOTEL_SEARCH.HOTELSEARCH_SUCCESS:
      return {
        loading: false,
        data: action.hotel,
        error: "",
      };
    case HOTEL_SEARCH.HOTELSEARCH_FAIL:
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

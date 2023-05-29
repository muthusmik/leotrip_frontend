import { HOTELCITYLIST } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case HOTELCITYLIST.LOAD_HOTELCITYLIST:
      return {
        ...state,
        loading: true,
      };
    case HOTELCITYLIST.HOTELCITYLIST_SUCCESS:
      return {
        loading: false,
        data: action.hotel,
        error: "",
      };
    case HOTELCITYLIST.HOTELCITYLIST_FAIL:
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

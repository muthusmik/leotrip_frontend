import { HOTEL_DESTINATION } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
 
  switch (action.type) {
    case HOTEL_DESTINATION.LOAD_HOTELDESTINATION:
    return {
      loading: true,
        data: [],

    };
    case HOTEL_DESTINATION.HOTELDESTINATION_SUCCESS:
      return {
        loading: false,
        data: action.hotelDestination,
        error: "",
      };
    case HOTEL_DESTINATION.HOTELDESTINATION_FAIL:
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

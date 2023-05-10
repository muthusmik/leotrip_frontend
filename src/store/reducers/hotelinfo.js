import { HOTEL_INFO } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  // console.log("iam in HOTEL INFO reducer",action)
  switch (action.type) {
    case HOTEL_INFO.LOAD_INFO:
      return {
        loading: true,
        data: [],

      };
    case HOTEL_INFO.HOTELINFO_SUCCESS:
      return {
        loading: false,
        data: action.hotelinfo,
        error: "",
      };
    case HOTEL_INFO.HOTELINFO_FAIL:
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

import { FLIGHTRETURNINFO } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  //  console.log("iam in flightsss reducer",action)
  switch (action.type) {
    case FLIGHTRETURNINFO.LOAD:
      return {
        loading: true,
        data: [],

      };
    case FLIGHTRETURNINFO.LOAD_SUCCESS:
      return {
        loading: false,
        data: action.flight,
        error: "",
      };
    case FLIGHTRETURNINFO.LOAD_FAIL:
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

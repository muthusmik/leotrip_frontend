import { FLIGHTONEWAYINFO } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  //  console.log("iam in flightsss reducer",action)
  switch (action.type) {
    case FLIGHTONEWAYINFO.LOAD:
      return {
        loading: true,
        data: [],

      };
    case FLIGHTONEWAYINFO.LOAD_SUCCESS:
      return {
        loading: false,
        data: action.flight,
        error: "",
      };
    case FLIGHTONEWAYINFO.LOAD_FAIL:
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

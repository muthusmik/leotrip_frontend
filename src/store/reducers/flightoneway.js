import { FLIGHTONEWAY } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  //  console.log("iam in flightsss reducer",action)
  switch (action.type) {
    case FLIGHTONEWAY.LOAD:
      return {
        loading: true,
        data: [],

      };
    case FLIGHTONEWAY.LOAD_SUCCESS:
      return {
        loading: false,
        data: action.flight,
        error: "",
      };
    case FLIGHTONEWAY.LOAD_FAIL:
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

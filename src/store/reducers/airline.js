import { AIRLINE } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  //  console.log("iam in airlinecitylist reducer",action.type)
  switch (action.type) {
    case AIRLINE.LOAD_AIRLINE:
      return {
        ...state,
        loading: true,
      };
    case AIRLINE.AIRLINE_SUCCESS:
      return {
        loading: false,
        data: action.airline,
        error: "",
      };
    case AIRLINE.AIRLINE_FAIL:
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

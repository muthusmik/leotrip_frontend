import { FLIGHTONEWAYBOOKHOLDGDS } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case FLIGHTONEWAYBOOKHOLDGDS.LOAD:
      return {
        loading: true,
        data: [],
      };
    case FLIGHTONEWAYBOOKHOLDGDS.LOAD_SUCCESS:
      return {
        loading: false,
        data: action.flight,
        error: "",
      };
    case FLIGHTONEWAYBOOKHOLDGDS.LOAD_FAIL:
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

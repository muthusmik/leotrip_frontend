import { FLIGHTONEWAYBOOKGDS } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case FLIGHTONEWAYBOOKGDS.LOAD:
      return {
        loading: true,
        data: [],

      };
    case FLIGHTONEWAYBOOKGDS.LOAD_SUCCESS:
      return {
        loading: false,
        data: action.flight,
        error: "",
      };
    case FLIGHTONEWAYBOOKGDS.LOAD_FAIL:
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

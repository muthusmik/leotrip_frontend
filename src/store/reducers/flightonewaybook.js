import { FLIGHTONEWAYBOOK } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case FLIGHTONEWAYBOOK.LOAD:
      return {
        loading: true,
        data: [],

      };
    case FLIGHTONEWAYBOOK.LOAD_SUCCESS:
      return {
        loading: false,
        data: action.flight,
        error: "",
      };
    case FLIGHTONEWAYBOOK.LOAD_FAIL:
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

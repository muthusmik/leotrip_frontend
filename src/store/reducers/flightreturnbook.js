import { FLIGHTRETURNBOOK } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "csdfsdf",
};

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case FLIGHTRETURNBOOK.LOAD:
      return {
        loading: true,
        data: [],

      };
    case FLIGHTRETURNBOOK.LOAD_SUCCESS:
      return {
        loading: false,
        data: action.flight,
        error: "",
      };
    case FLIGHTRETURNBOOK.LOAD_FAIL:
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

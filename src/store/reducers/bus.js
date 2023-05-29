import { BUS } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
 
  switch (action.type) {
    case BUS.LOAD:
      return {
        loading: true,
        data: [],
      };
    case BUS.LOAD_SUCCESS:
      return {
        loading: false,
        data: action.bus,
        error: "",
      };
    case BUS.LOAD_FAIL:
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

import { CARBOOK } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case CARBOOK.LOAD:
      return {
        loading: true,
        data: [],

      };
    case CARBOOK.LOAD_SUCCESS:
      return {
        loading: false,
        data: action.book,
        error: "",
      };
    case CARBOOK.LOAD_FAIL:
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

import { CARCITYLIST } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case CARCITYLIST.LOAD_CARCITYLIST:
      return {
        ...state,
        loading: true,
      };
    case CARCITYLIST.CARCITYLIST_SUCCESS:
      return {
        loading: false,
        data: action.carcitylist.result, 
        error: "",
      };
    case CARCITYLIST.CARCITYLIST_FAIL:
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

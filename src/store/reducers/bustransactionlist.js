import { BUSBTNSLIST } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUSBTNSLIST.LOAD_BUSBTNSLIST:
      return {
        ...state,
        loading: true,
      };
    case BUSBTNSLIST.BUSBTNSLIST_SUCCESS:
      return {
        loading: false,
        data: action.bustnslist,
        error: "",
      };
    case BUSBTNSLIST.BUSBTNSLIST_FAIL:
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

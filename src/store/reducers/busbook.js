import { BUSBOOK } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  //  console.log("iam in bus book reducer",action)
  switch (action.type) {
    case BUSBOOK.LOAD:
      return {
        loading: true,
        data: [],
      };
    case BUSBOOK.LOAD_SUCCESS:
      return {
        loading: false,
        data: action.book,
        error: "",
      };
    case BUSBOOK.LOAD_FAIL:
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

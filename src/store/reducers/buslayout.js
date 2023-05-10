import { BUSLAYOUT } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  //  console.log("iam in bus layout reducer",action)
  switch (action.type) {
    case BUSLAYOUT.LOAD:
      return {
        loading: true,
        data: [],
      };
    case BUSLAYOUT.LOAD_SUCCESS:
      return {
        loading: false,
        data: action.bus,
        error: "",
      };
    case BUSLAYOUT.LOAD_FAIL:
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

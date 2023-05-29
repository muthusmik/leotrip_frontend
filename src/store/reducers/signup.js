import { SIGNUP } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case SIGNUP.LOAD_SIGNUP:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP.LOAD_SUCCESS:
      return {
        loading: false,
        data: action.signup,
        error: "",
      };
    case SIGNUP.LOAD_FAIL:
      return {
        loading: false,
        data: [],
        error: action.error,
      };
    case SIGNUP.LOAD_CLEARREDUCER:
      return {
        initialState
      };
    default:
      return state;
  }
};
export default reducer;

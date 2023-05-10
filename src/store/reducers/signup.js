import { SIGNUP } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  //  console.log("iam in airportcitylist reducer",action.type)
  switch (action.type) {
    case SIGNUP.LOAD_SIGNUP:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP.SIGNUP_SUCCESS:
      return {
        loading: false,
        data: action.signup,
        error: "",
      };
    case SIGNUP.SIGNUP_FAIL:
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

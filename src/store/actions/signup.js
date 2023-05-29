import { SIGNUP } from "../constants";

const loadSignup = (signup) => ({
  type:SIGNUP.LOAD_SIGNUP,
  signup,
});

const setSignup = (signup) => ({
  type:SIGNUP.LOAD_SUCCESS,
  signup,
});

const setError = (error) => ({
  type:SIGNUP.LOAD_FAIL,
  error,
});

const clearReducer = (clear) => ({
  type:SIGNUP.LOAD_CLEARREDUCER,
  clear
});

export { loadSignup, setSignup, setError,clearReducer };

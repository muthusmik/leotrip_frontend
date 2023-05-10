import { SIGNUP } from "../constants";

const loadSignup = (signup) => ({
  type: SIGNUP. LOAD_SIGNUP,
  signup,
});

const setSignup = (signup) => ({
  type: SIGNUP.SIGNUP_SUCCESS,
  signup,
});

const setError = (error) => ({
  type: SIGNUP.SIGNUP_FAIL,
  error,
});

export { loadSignup, setSignup, setError };

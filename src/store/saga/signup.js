import { put, call, takeEvery } from "redux-saga/effects";
import { setError, setSignup } from "../actions/signup";
import { SIGNUP } from "../constants";
import {signup} from "../services/signup";

export function* handleSignupLoad(action) {
  try {
     console.log("iam in the saga(signup...)",action);
    const signupdata = yield call(signup, action.signup);
    if (signupdata && signupdata.error) throw signupdata.error;
    yield put(setSignup(signupdata));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(SIGNUP.LOAD_SIGNUP, handleSignupLoad);
}

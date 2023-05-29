import { put, call, takeEvery } from "redux-saga/effects";

import { setError, setBusBoardingpoint } from "../actions/busboardingpointdetails";
import { BUSBOARDINGPOINT } from "../constants";
import {busBoardingpoint} from "../services/busboardingpoint";

export function* handleBusBoardingpoint(action) {
  try {
   console.log("busboarding saga",action)
    const searchData = yield call(busBoardingpoint, action.bus);
    if (searchData && searchData.error) throw searchData.error;
    yield put(setBusBoardingpoint(searchData));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(BUSBOARDINGPOINT.LOAD_BUSBOARDINGPOINT, handleBusBoardingpoint);
} 

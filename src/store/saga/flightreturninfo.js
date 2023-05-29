import { put, call, takeEvery } from "redux-saga/effects";

import { setError, setFlightReturnInfo } from "../actions/flightreturninfo";
import { FLIGHTRETURNINFO } from "../constants";
import { flightreturninfo } from "../services/flightreturninfo";

export function* handleflightreturninfo(action) {
  try {
    
    const flightreturninfodata = yield call(flightreturninfo, action.flight);
    if (flightreturninfodata && flightreturninfodata.error) throw flightreturninfodata.error;
    yield put(setFlightReturnInfo(flightreturninfodata));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(FLIGHTRETURNINFO.LOAD, handleflightreturninfo);
}

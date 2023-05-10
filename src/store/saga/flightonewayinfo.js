import { put, call, takeEvery } from "redux-saga/effects";

import { setError, setFlightOnewayInfo } from "../actions/flightonewayinfo";
import { FLIGHTONEWAYINFO } from "../constants";
import { flightonewayinfo } from "../services/flightonewayinfo";

export function* handleflightonewayinfo(action) {
  try {
    // console.log("iam in the saga(flightonewayinfo)",action);
    const flightonewayinfodata = yield call(flightonewayinfo, action.flight);
    if (flightonewayinfodata && flightonewayinfodata.error) throw flightonewayinfodata.error;
    yield put(setFlightOnewayInfo(flightonewayinfodata));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(FLIGHTONEWAYINFO.LOAD, handleflightonewayinfo);
}

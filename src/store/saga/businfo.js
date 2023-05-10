import { put, call, takeEvery } from "redux-saga/effects";

import { setError, setBusInfo } from "../actions/businfo";
import { BUSINFO } from "../constants";
import { businfo } from "../services/businfo";

export function* handleBusLoad(action) {
  try {
    // console.log("iam in the saga(bus)",action);
    const busdata = yield call(businfo, action.bus);
    if (busdata && busdata.error) throw busdata.error;
    yield put(setBusInfo(busdata));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(BUSINFO.LOAD, handleBusLoad);
}

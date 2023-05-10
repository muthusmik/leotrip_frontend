import { put, call, takeEvery } from "redux-saga/effects";

import { setError, setBusList } from "../actions/bus";
import { BUS } from "../constants";
import { buslist } from "../services/bus";

export function* handleBusLoad(action) {
  try {
    // console.log("iam in the saga(bus)",action);
    const busdata = yield call(buslist, action.bus);
    if (busdata && busdata.error) throw busdata.error;
    yield put(setBusList(busdata));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(BUS.LOAD, handleBusLoad);
}

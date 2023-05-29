import { put, call, takeEvery } from "redux-saga/effects";

import { setError, setBusLayout } from "../actions/buslayout";
import { BUSLAYOUT } from "../constants";
import { busSeatLayout } from "../services/buslayout";

export function* handleBusLayoutLoad(action) {
  try {
 
    const busdata = yield call(busSeatLayout, action.bus);
    if (busdata && busdata.error) throw busdata.error;
    yield put(setBusLayout(busdata));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(BUSLAYOUT.LOAD, handleBusLayoutLoad);
}

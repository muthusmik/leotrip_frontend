import { put, call, takeEvery } from "redux-saga/effects";

import { setError, setBusBook } from "../actions/busbook";
import { BUSBOOK } from "../constants";
import { busBook } from "../services/busbook";

export function* handleBusBookLoad(action) {
  try {
    //console.log("iam in the saga(bus book)",action); 
    const busdata = yield call(busBook, action.book);
    if (busdata && busdata.error) throw busdata.error;
    yield put(setBusBook(busdata));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(BUSBOOK.LOAD, handleBusBookLoad);
}

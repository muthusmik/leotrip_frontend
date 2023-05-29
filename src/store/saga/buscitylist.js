import { put, call, takeEvery } from "redux-saga/effects";

import { setError, setBusCityList } from "../actions/buscitylist";
import { BUSCITYLIST } from "../constants";
import { buscitylist } from "../services/buscitylist";

export function* handleBusLoad(action) {
  try {
   
    const busdata = yield call(buscitylist, action.bus);
    if (busdata && busdata.error) throw busdata.error;
    yield put(setBusCityList(busdata));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(BUSCITYLIST.LOAD, handleBusLoad);
}

import { put, call, takeEvery } from "redux-saga/effects";

import { setError, setCarBook } from "../actions/carbook";
import { CARBOOK } from "../constants";
import { carBook } from "../services/carbook";

export function* handleCarBookLoad(action) {
  try {
    
    const cardata = yield call(carBook, action.book);
    if (cardata && cardata.error) throw cardata.error;
    yield put(setCarBook(cardata));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(CARBOOK.LOAD, handleCarBookLoad);
}

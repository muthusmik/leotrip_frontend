import { put, call, takeEvery } from "redux-saga/effects";

import { setError, setCarList } from "../actions/car";
import { CAR } from "../constants";
import { carlist } from "../services/car";

export function* handleCarLoad(action) {
  try {
   
    const cardata = yield call(carlist, action.car);
    if (cardata && cardata.error) throw cardata.error;
    yield put(setCarList(cardata));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(CAR.LOAD, handleCarLoad);
}

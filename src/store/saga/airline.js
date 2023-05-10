import { put, call, takeEvery } from "redux-saga/effects";
import { setError, setAirLine } from "../actions/airline";
import { AIRLINE } from "../constants";
import { airline } from "../services/airline";

export function* handleAirlineLoad(action) {
  try {
    const airLinedata = yield call(airline, action.airLine);
    if (airLinedata && airLinedata.error) throw airLinedata.error;
    yield put(setAirLine(airLinedata));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(AIRLINE.LOAD_AIRLINE, handleAirlineLoad);
}

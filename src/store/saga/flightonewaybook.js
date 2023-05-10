import { put, call, takeEvery } from "redux-saga/effects";

import { setError, setFlightOnewayBook } from "../actions/flightonewaybook";
import { FLIGHTONEWAYBOOK } from "../constants";
import { flightonewaybook } from "../services/flightonewaybook";

export function* handleflightonewaybook(action) {
  try {
    // console.log("iam in the saga(flightoneway)",action);
    const flightonewaybookdata = yield call(flightonewaybook, action.flight);
    if (flightonewaybookdata && flightonewaybookdata.error) throw flightonewaybookdata.error;
    yield put(setFlightOnewayBook(flightonewaybookdata));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(FLIGHTONEWAYBOOK.LOAD, handleflightonewaybook);
}

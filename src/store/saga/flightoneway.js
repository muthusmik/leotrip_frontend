import { put, call, takeEvery } from "redux-saga/effects";

import { setError, setFlightOneway } from "../actions/flightoneway";
import { FLIGHTONEWAY } from "../constants";
import { flightoneway } from "../services/flightoneway";

export function* handleflightoneway(action) {
  try {
  
    const flightonewaydata = yield call(flightoneway, action.flight);
    if (flightonewaydata && flightonewaydata.error) throw flightonewaydata.error;
    yield put(setFlightOneway(flightonewaydata));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(FLIGHTONEWAY.LOAD, handleflightoneway);
}

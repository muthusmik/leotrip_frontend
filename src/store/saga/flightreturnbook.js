import { put, call, takeEvery } from "redux-saga/effects";
import { setFlightReturnBook,setError } from "../actions/flightReturnBook";



import { FLIGHTRETURNBOOK } from "../constants";
import { flightonewaybook } from "../services/flightonewaybook";

export function* handleflightreturnbook(action) {
  try {
    
    const flightreturnbookdata = yield call(flightonewaybook, action.flight);
    if (flightreturnbookdata && flightreturnbookdata.error) throw flightreturnbookdata.error;
    yield put(setFlightReturnBook(flightreturnbookdata));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(FLIGHTRETURNBOOK.LOAD, handleflightreturnbook);
}

import { put, call, takeEvery } from "redux-saga/effects";
import { setFlightReturnBookHOLDGDS, setError } from "../actions/flightReturnBookGDSHold";
import { FLIGHTRETURNBOOKHOLDGDS } from "../constants";
import { flightonewaybookHoldGDS } from "../services/flightonewaybookGDSHold";

export function* handleflightreturnbookHoldGds(action) {
  try {

    const flightreturnbookdataHoldGds = yield call(flightonewaybookHoldGDS, action.flight);
    if (flightreturnbookdataHoldGds && flightreturnbookdataHoldGds.error) throw flightreturnbookdataHoldGds.error;
    yield put(setFlightReturnBookHOLDGDS(flightreturnbookdataHoldGds));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(FLIGHTRETURNBOOKHOLDGDS.LOAD, handleflightreturnbookHoldGds);
}

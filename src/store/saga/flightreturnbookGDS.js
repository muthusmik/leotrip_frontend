import { put, call, takeEvery } from "redux-saga/effects";
import { setFlightReturnBookGDS,setError } from "../actions/flightReturnBookGDS";
import { FLIGHTRETURNBOOKGDS } from "../constants";
import { flightonewaybookGDS } from "../services/flightonewaybookGDS";

export function* handleflightreturnbookGDS(action) {
  try {
    
    const flightreturnbookdataGDS = yield call(flightonewaybookGDS, action.flight);
    if (flightreturnbookdataGDS && flightreturnbookdataGDS.error) throw flightreturnbookdataGDS.error;
    yield put(setFlightReturnBookGDS(flightreturnbookdataGDS));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(FLIGHTRETURNBOOKGDS.LOAD, handleflightreturnbookGDS);
}

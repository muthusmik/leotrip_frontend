import { put, call, takeEvery } from "redux-saga/effects";

import { setError, setFlightOnewayBookGDS } from "../actions/flightonewaybookGDS";
import { FLIGHTONEWAYBOOKGDS } from "../constants";
import { flightonewaybookGDS } from "../services/flightonewaybookGDS";

export function* handleflightonewaybookGDS(action) {
  try {
    
    const flightonewaybookdataGDS = yield call(flightonewaybookGDS, action.flight);
    if (flightonewaybookdataGDS && flightonewaybookdataGDS.error) throw flightonewaybookdataGDS.error;
    yield put(setFlightOnewayBookGDS(flightonewaybookdataGDS));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(FLIGHTONEWAYBOOKGDS.LOAD, handleflightonewaybookGDS);
}

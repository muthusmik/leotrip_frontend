import { put, call, takeEvery } from "redux-saga/effects";

import { setError, setFlightOnewayBookHOLDGDS } from "../actions/flightonewaybookGDSHold";
import { FLIGHTONEWAYBOOKHOLDGDS } from "../constants";
import { flightonewaybookHoldGDS } from "../services/flightonewaybookGDSHold";

export function* handleflightonewaybookholdGDS(action) {
  try {
    
    const flightonewaybookdataHoldGds = yield call(flightonewaybookHoldGDS, action.flight);
    if (flightonewaybookdataHoldGds && flightonewaybookdataHoldGds.error) throw flightonewaybookdataHoldGds.error;
    yield put(setFlightOnewayBookHOLDGDS(flightonewaybookdataHoldGds));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(FLIGHTONEWAYBOOKHOLDGDS.LOAD, handleflightonewaybookholdGDS);
}

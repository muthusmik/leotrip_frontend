import { put, call, takeEvery } from "redux-saga/effects";
import { setError, setBusBlock } from "../actions/busblock";
import { BUSBLOCK } from "../constants";
import { busblock } from "../services/busblock";

export function* handleBusBlock(action) {
  try {
   
    const busdata = yield call(busblock, action.bus);
    if (busdata && busdata.error) throw busdata.error;
    yield put(setBusBlock(busdata));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(BUSBLOCK.LOAD_BUSBLOCK, handleBusBlock);
}

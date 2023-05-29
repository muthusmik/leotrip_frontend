import { put, call, takeEvery } from "redux-saga/effects";
import { setError, setCarCityList } from "../actions/carcitylist";
import { CARCITYLIST } from "../constants";
import { Carcitylist } from "../services/carcitylist";

export function* handleCarCityLoad(action) {
  try {
   
    const carcitydata = yield call(Carcitylist, action.carcitylist);
    if (carcitydata && carcitydata.error) throw carcitydata.error;
    yield put(setCarCityList(carcitydata));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(CARCITYLIST.LOAD_CARCITYLIST, handleCarCityLoad);
}

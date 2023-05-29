import { put, call, takeEvery } from "redux-saga/effects";

import { setError, setHotelCityList } from "../actions/hotelcitylist";
import { HOTELCITYLIST } from "../constants";
import { hotelcitylist } from "../services/hotelcitylist";

export function* handleHotelLoad(action) {
  try {
   
    const hoteldata = yield call(hotelcitylist, action.hotel);
    if (hoteldata && hoteldata.error) throw hoteldata.error;
    yield put(setHotelCityList(hoteldata));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(HOTELCITYLIST.LOAD_HOTELCITYLIST, handleHotelLoad);
}

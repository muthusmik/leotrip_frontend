import { put, call, takeEvery } from "redux-saga/effects";

import { setError, setHotelInfo } from "../actions/hotelinfo";
import { HOTEL_INFO } from "../constants";
import { hotelInfo } from "../services/hotelinfo";

export function* handleHotelInfo(action) {
  try {
    // console.log("iam in the hotelInfosaga",action);
    const searchData = yield call(hotelInfo, action.hotelinfo);
    if (searchData && searchData.error) throw searchData.error;
    yield put(setHotelInfo(searchData));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(HOTEL_INFO.LOAD_INFO, handleHotelInfo);
}

import { put, call, takeEvery } from "redux-saga/effects";

import { setError, setHotelList } from "../actions/hotelsearch";
import { HOTEL_SEARCH } from "../constants";
import { hotelSearchList } from "../services/hotel";

export function* handleHotelSearch(action) {
  try {
    // console.log("iam in the flightsearchsaga",action);
    const searchData = yield call(hotelSearchList, action.hotel);
    if (searchData && searchData.error) throw searchData.error;
    yield put(setHotelList(searchData));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(HOTEL_SEARCH.HOTEL_LOAD, handleHotelSearch);
}
import { put, call, takeEvery } from "redux-saga/effects";

import { setError, setHotelBook } from "../actions/hotelbook";
import { HOTEL_BOOK } from "../constants";
import { HotelBook } from "../services/hotelbook";

export function* handleHotelBook(action) {
  try {
    //console.log("iam in the Hotelbook saga",action);
    const searchData = yield call(HotelBook,action.hotelbook);
    if (searchData && searchData.error) throw searchData.error;
    yield put(setHotelBook(searchData));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(HOTEL_BOOK.LOAD_HOTELBOOK, handleHotelBook);
} 

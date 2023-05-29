import { put, call, takeEvery } from "redux-saga/effects";

import { setError, setHotelBook } from "../actions/hotelbook";
import { HOTEL_BOOK } from "../constants";
import { HotelBook } from "../services/hotelbook";

export function* handleHotelBook(action) {
  console.log("action inside the hootel book saga ",action);
  try {

    const searchData = yield call(HotelBook,action.hotelbook);
    console.log("busdatabusdatabusdata",searchData);
    console.log("Busdata .errrrrrrrrrrrror", searchData?.error);
    // if (searchData && searchData.error) throw searchData.error;
    yield put(setHotelBook(searchData));
  } catch (error) {
    console.log("seterror inside the saga what wrong is ",error);
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(HOTEL_BOOK.LOAD_HOTELBOOK, handleHotelBook);
} 

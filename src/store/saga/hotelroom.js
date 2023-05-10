import { put, call, takeEvery } from "redux-saga/effects";

import { setError, setHotelRoom } from "../actions/hotelroom";
import { HOTEL_ROOM } from "../constants";
import { hotelRoom } from "../services/hotelroom";

export function* handleHotelRoom(action) {
  try {
    console.log("iam in the hotelRoom saga",action);
    const searchData = yield call(hotelRoom, action.hotelroom);
    if (searchData && searchData.error) throw searchData.error;
    yield put(setHotelRoom(searchData));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(HOTEL_ROOM.LOAD_ROOM, handleHotelRoom);
}

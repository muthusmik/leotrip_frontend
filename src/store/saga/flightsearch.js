import { put, call, takeEvery } from "redux-saga/effects";

import { setError, setFlightList } from "../actions/flightsearch";
import { FLIGHT_SEARCH } from "../constants";
import { flightSearchList } from "../services/flight";

export function* handleFlightSearch(action) {
  try {
    //  console.log("iam in the flightsearchsaga",action);
    const searchData = yield call(flightSearchList, action.flight);
    if (searchData && searchData.error) throw searchData.error;
    yield put(setFlightList(searchData));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(FLIGHT_SEARCH.LOAD_SEARCH, handleFlightSearch);
}

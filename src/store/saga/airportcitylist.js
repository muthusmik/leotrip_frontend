import { put, call, takeEvery } from "redux-saga/effects";
import { setError, setAirportCityList } from "../actions/airportlist";
import { AIRPORTCITYLIST } from "../constants";
import { airportcitylist } from "../services/airportcitylist";

export function* handleAirportLoad(action) {
  try {
    // console.log("iam in the saga(hotelcitylist)",action);
    const airportdata = yield call(airportcitylist, action.airport);
    if (airportdata && airportdata.error) throw airportdata.error;
    yield put(setAirportCityList(airportdata));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(AIRPORTCITYLIST.LOAD_AIRPORTCITYLIST, handleAirportLoad);
}

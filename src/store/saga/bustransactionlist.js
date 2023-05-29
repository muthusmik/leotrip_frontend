import { put, call, takeEvery } from "redux-saga/effects";
import { setError, setBustnslist} from "../actions/bustransactionlist";
import { BUSBTNSLIST } from "../constants";
import { bustransactionlist } from "../services/bustransactionlist";

export function* handleBustnslistLoad(action) {
  try {
    const Bustnslistdata = yield call(bustransactionlist, action.Bustnslist);
    if (Bustnslistdata && Bustnslistdata.error) throw Bustnslistdata.error;
    yield put(setBustnslist(Bustnslistdata));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(BUSBTNSLIST.LOAD_BUSBTNSLIST, handleBustnslistLoad);
}

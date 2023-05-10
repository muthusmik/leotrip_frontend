import { put, call, takeEvery } from "redux-saga/effects";

import { setError, setBlockRoom } from "../actions/blockroom";
import { BLOCK_ROOM } from "../constants";
import { blockRoom } from "../services/blockroom";

export function* handleBlockRoom(action) {
  try {
    // console.log("iam in the blockRoom saga",action);
    const searchData = yield call(blockRoom, action.blockroom);
    if (searchData && searchData.error) throw searchData.error;
    yield put(setBlockRoom(searchData));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchLoginLoad() {
  yield takeEvery(BLOCK_ROOM.LOAD_BLOCKROOM, handleBlockRoom);
} 

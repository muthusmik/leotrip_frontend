import { BLOCK_ROOM } from "../constants";

const loadBlockRoom = (blockroom) => ({
  type:BLOCK_ROOM.LOAD_BLOCKROOM,
  blockroom,
});

const setBlockRoom = (blockroom) => ({
  type: BLOCK_ROOM.BLOCKROOM_SUCCESS,
  blockroom,
});

const setError = (error) => ({
  type: BLOCK_ROOM.BLOCKROOM_FAIL,
  error,
});

export { loadBlockRoom, setBlockRoom, setError };

import { BLOCK_ROOM } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  //  console.log("iam in block Room reducer",action)
  switch (action.type) {
    case BLOCK_ROOM.LOAD_BLOCKROOM:
      return {
        loading: true,
        data: [],
      };
    case BLOCK_ROOM.BLOCKROOM_SUCCESS:
      return {
        loading: false,
        data: action.blockroom,
        error: "",
      };
    case BLOCK_ROOM.BLOCKROOM_FAIL:
      return {
        loading: false,
        data: [],
        error: action.error,
      };
    default:
      return state;
  }
};
export default reducer;

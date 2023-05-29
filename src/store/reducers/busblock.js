import { BUSBLOCK } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case BUSBLOCK.LOAD_BUSBLOCK:
      return {
        loading: true,
        data: [],

      };
    case BUSBLOCK.BUSBLOCK_SUCCESS:
      return {
        loading: false,
        data: action.bus,
        error: "",
      };
    case BUSBLOCK.BUSBLOCK_FAIL:
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

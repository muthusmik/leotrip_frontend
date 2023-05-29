import { HOTELGUESTINFO } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case HOTELGUESTINFO:
      return action;
    default:
      return state;
  }
};
export default reducer;

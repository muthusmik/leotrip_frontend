import { HOTEL_ROOM } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
   //console.log("iam in HOTEL Room reducer",action)
  switch (action.type) {
    case HOTEL_ROOM.LOAD_ROOM:
      return {
        loading: true,
        data: [],

      };
    case HOTEL_ROOM.HOTELROOM_SUCCESS:
      return {
        loading: false,
        data: action.hotelroom,
        error: "",
      };
    case HOTEL_ROOM.HOTELROOM_FAIL:
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

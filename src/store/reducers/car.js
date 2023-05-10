import { CAR } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  //  console.log("iam in carsss reducer",action)
  switch (action.type) {
    case CAR.LOAD:
      return {
        loading: true,
        data: [],

      };
    case CAR.LOAD_SUCCESS:
      return {
        loading: false,
        data: action.car,
        error: "",
      };
    case CAR.LOAD_FAIL:
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

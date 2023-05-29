import { AIRPORTCITYLIST } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case AIRPORTCITYLIST.LOAD_AIRPORTCITYLIST:
      return {
        ...state,
        loading: true,
      };
    case AIRPORTCITYLIST.AIRPORTCITYLIST_SUCCESS:
      return {
        loading: false,
        data: action.airport,
        error: "",
      };
    case AIRPORTCITYLIST.AIRPORTCITYLIST_FAIL:
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

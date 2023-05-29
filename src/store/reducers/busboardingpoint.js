import { BUSBOARDINGPOINT } from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case BUSBOARDINGPOINT.LOAD_BUSBOARDINGPOINT:
      return {
        loading: true,
        data: [],
      };
    case BUSBOARDINGPOINT.BUSBOARDINGPOINT_SUCCESS:
      return {
        loading: false,
        data:action.bus,
        error: "",
      };
    case BUSBOARDINGPOINT.BUSBOARDINGPOINT_FAIL:
      return {
        loading: false,
        data:[],
        error: action.error,
      };
    default:
      return state;
  }
};
export default reducer;

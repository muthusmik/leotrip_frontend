import axios from "axios";
import {

  flightSearchUrl,

} from "../../constants.js";
import moment from "moment";


const flightSearchList = async (flightsearch) => {
  //  console.log("flight search payload",flightsearch)
  const headers = {
    "Content-Type": "application/json",

  };

  //  console.log("ia m in the flightservice");
  try {
    const flightSearchData = await axios.post(
      flightSearchUrl,
      flightsearch,
      { headers: headers }
    );
   
    if (flightSearchData.data.result.errorCode) {
      console.log("flightsearchdata guru jiiiiii", flightSearchData.data.result.errorCode);
      return flightSearchData.data.result;
    }
    else {
      return flightSearchData.data.result[0];
    }
  } catch (error) {
    console.log(error, "got it ");
    return error.response.data
  }
};

export { flightSearchList }
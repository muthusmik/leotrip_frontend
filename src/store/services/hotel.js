import axios from "axios";
import {
   
  hotelSearchUrl,
  
} from "../../constants.js";



const hotelSearchList = async (hotelsearch) => {
  // console.log("hotel search payload",hotelsearch)
  const headers = {
    "Content-Type": "application/json",
   
  };
  
  // console.log("iam in the hotelservice");
 
  try {
    const hotelSearchData = await axios.post(
        hotelSearchUrl,
        hotelsearch,
      { headers: headers }
    );

    // console.log(hotelsearch,"baba")
    // console.log([hotelsearch, hotelSearchData.data.result.Results]);
    //  console.log("hotelSearchData....hijjjhi",hotelSearchData.data.result.TraceId);
    return [hotelsearch, hotelSearchData.data.result.Results,hotelSearchData.data.result.TraceId];
  } catch (error) {

    console.log("jk.....RK",error.response.data);
    return error.response.data

  }
};

export {hotelSearchList}
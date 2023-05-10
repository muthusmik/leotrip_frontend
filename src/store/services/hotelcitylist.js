import axios from "axios";
import {
   
  hotelcitylistUrl,
  
} from "../../constants.js";


const hotelcitylist = async (citylist) => {
 
  const headers = {
    "Content-Type": "application/json",
   
  };
  
  // console.log("ia m in the service");
  try {
    const hotelcitylistdata = await axios.get(
      hotelcitylistUrl,
      citylist,
      { headers: headers }
    );
    //  console.log("hotelcitylist customdata",hotelcitylistdata.data);
    return hotelcitylistdata.data;
  } catch (error) {
    // console.log(error);
  }
};

export {hotelcitylist}
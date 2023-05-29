import axios from "axios";
import {
   
  hotelcitylistUrl,
  
} from "../../constants.js";


const hotelcitylist = async (citylist) => {
 
  const headers = {
    "Content-Type": "application/json",
   
  };
  

  try {
    const hotelcitylistdata = await axios.get(
      hotelcitylistUrl,
      citylist,
      { headers: headers }
    );
   
    return hotelcitylistdata.data;
  } catch (error) {
  
  }
};

export {hotelcitylist}
import axios from "axios";
import {
  flightonewayinfoUrl,
} from "../../constants.js";


const flightreturninfo = async (user) => {
 
  const headers = {
    "Content-Type": "application/json",
   
  };
  
 
  try {
    const flightreturninfodata = await axios.post(
      flightonewayinfoUrl,
      user,
      { headers: headers }
    );
   
    return [flightreturninfodata.data.result];
  } catch (error) {
  
  }
};

export {flightreturninfo}
import axios from "axios";
import {
  flightonewayinfoUrl,
} from "../../constants.js";


const flightonewayinfo = async (user) => {
 
  const headers = {
    "Content-Type": "application/json",
   
  };
  
  
  try {
    const flightonewayinfodata = await axios.post(
      flightonewayinfoUrl,
      user,
      { headers: headers }
    );
   
    return [flightonewayinfodata.data.result];
  } catch (error) {
  
  }
};

export {flightonewayinfo}
import axios from "axios";
import {
  flightonewayUrl,
} from "../../constants.js";


const flightoneway = async (user) => {
  
  const headers = {
    "Content-Type": "application/json",
   
  };
  
 
  try {
    const flightonewaydata = await axios.post(
      flightonewayUrl,
      user,
      { headers: headers }
    );
    
    return [flightonewaydata.data];
  } catch (error) {
    return [error];

  }
};

export {flightoneway}
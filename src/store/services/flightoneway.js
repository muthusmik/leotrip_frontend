import axios from "axios";
import {
  flightonewayUrl,
} from "../../constants.js";


const flightoneway = async (user) => {
  // console.log("flightoneway service payload",user)
  const headers = {
    "Content-Type": "application/json",
   
  };
  
  // console.log("ia m in the service");
  try {
    const flightonewaydata = await axios.post(
      flightonewayUrl,
      user,
      { headers: headers }
    );
    //  console.log("flightoneway data ........data...",flightonewaydata.data);
    return [flightonewaydata.data];
  } catch (error) {
    console.log("error inservice",error);
    return [error];

  }
};

export {flightoneway}
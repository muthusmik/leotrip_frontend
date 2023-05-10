import axios from "axios";
import {
  flightonewayinfoUrl,
} from "../../constants.js";


const flightonewayinfo = async (user) => {
  // console.log("flightonewayinfo service payload",user)
  const headers = {
    "Content-Type": "application/json",
   
  };
  
  // console.log("ia m in the service");
  try {
    const flightonewayinfodata = await axios.post(
      flightonewayinfoUrl,
      user,
      { headers: headers }
    );
    //  console.log("flightonewayinfo data ........data...",flightonewayinfodata.data);
    return [flightonewayinfodata.data.result];
  } catch (error) {
    // console.log(error);
  }
};

export {flightonewayinfo}
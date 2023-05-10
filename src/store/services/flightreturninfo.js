import axios from "axios";
import {
  flightonewayinfoUrl,
} from "../../constants.js";


const flightreturninfo = async (user) => {
  // console.log("flightreturninfo service payload",user)
  const headers = {
    "Content-Type": "application/json",
   
  };
  
  // console.log("ia m in the service");
  try {
    const flightreturninfodata = await axios.post(
      flightonewayinfoUrl,
      user,
      { headers: headers }
    );
    //  console.log("flightreturninfo data ........data...",flightreturninfodata.data);
    return [flightreturninfodata.data.result];
  } catch (error) {
    // console.log(error);
  }
};

export {flightreturninfo}
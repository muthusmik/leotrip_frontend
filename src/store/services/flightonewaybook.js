import axios from "axios";
import {
  flightonewaybookUrl,
} from "../../constants.js";


const flightonewaybook = async (user) => {
  // console.log("flightonewaybook service payload",user)
  const headers = {
    "Content-Type": "application/json",
   
  };
  
  // console.log("ia m in the service");
  try {
    const flightonewaybookdata = await axios.post(
      flightonewaybookUrl,
      user[0],
      { headers: headers }
    );
    //  console.log("flightonewaybook data .I am..",flightonewaybookUrl,"payload data",user[0]);
    return [flightonewaybookdata.data];
  } catch (error) {
    // console.log(error);
  }
};

export {flightonewaybook}
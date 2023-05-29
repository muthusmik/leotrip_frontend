import axios from "axios";
import {
  flightonewaybookUrl,
} from "../../constants.js";
// import {
//    testfligtbookUrl,
//  } from "../../constants.js";

const flightonewaybook = async (user) => {
 
  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization':`Bearer ${usertoken}`
  };
  
 
  try {
    const flightonewaybookdata = await axios.post(
      flightonewaybookUrl,
      user[0],
      { headers: headers}
    );
  
    return flightonewaybookdata.data;
  } catch (error) {
    return error.response.data
  }
};

export {flightonewaybook}
import axios from "axios";
import {
  flightbookingHoldGDS_Url,
} from "../../constants.js";
// import {
//    testfligtbookUrl,
//  } from "../../constants.js";

const flightonewaybookHoldGDS = async (user) => {

  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization': `Bearer ${usertoken}`
  };


  try {
    const flightonewaybookdata = await axios.post(
      flightbookingHoldGDS_Url,
      user[0],
      { headers: headers }
    );

    return flightonewaybookdata.data;
  } catch (error) {
    return error.response.data
  }
};

export { flightonewaybookHoldGDS }
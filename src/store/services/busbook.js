import axios from "axios";
import {
    busBookUrl,
} from "../../constants.js"

const busBook= async (user) => {
  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization':`Bearer ${usertoken}`
  };
  

  try {
    const busdata = await axios.post(
        busBookUrl,
      user,
      { headers: headers }
    );

    return busdata.data.result.Result;
  } catch (error) {
  }
};

export {busBook}
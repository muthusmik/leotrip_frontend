import axios from "axios";
import {
    carBookUrl,
} from "../../constants.js";


const carBook = async (carbook) => {
  const usertoken = JSON.parse(localStorage.getItem('token'))
        console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization':`Bearer ${usertoken}`
  };
  

  try {
    const carBookdata = await axios.post(
        carBookUrl,
      carbook,
      { headers: headers }
    );
    return carBookdata.data.Result;
  } catch (error) {
    return error.response.data
  }
};

export {carBook}
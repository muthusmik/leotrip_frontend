import axios from "axios";
import {
   
    busblockUrl,
  
} from "../../constants.js";
// import moment from "moment";


const busblock = async (user) => {

  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization':`Bearer ${usertoken}`
  };
  
 
  try {
    const busblockdata = await axios.post(
        busblockUrl,
      user,
      { headers: headers }
    );
    
    return busblockdata.data;
  } catch (error) {
    return error.response.status;
  }
};

export {busblock}
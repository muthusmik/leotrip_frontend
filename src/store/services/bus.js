import axios from "axios";
import {
   
  busUrl,
  
} from "../../constants.js";
import moment from "moment";


const buslist = async (user) => {
  // console.log("bus service payload",user)
  const headers = {
    "Content-Type": "application/json",
   
  };
  
  // console.log("ia m in the service");
  try {
    const busdata = await axios.post(
      busUrl,
      user,
      { headers: headers }
    );
     console.log("bus data sai",busdata.data);
    return busdata.data;
  } catch (error) {
    console.log("error data",error);
    return error;
  }
};

export {buslist}
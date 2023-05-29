import axios from "axios";
import {
   
    carcitylistUrl,
  
} from "../../constants.js";


const Carcitylist = async (citylist) => {
 
  const headers = {
    "Content-Type": "application/json",
   
  };
  
 
  try {
    const carcitylistdata = await axios.get(
      carcitylistUrl,
      citylist,
      { headers: headers }
    );
   
    return carcitylistdata.data;
  } catch (error) {
   
  }
};

export {Carcitylist}
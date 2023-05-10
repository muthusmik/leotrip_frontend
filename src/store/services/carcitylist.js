import axios from "axios";
import {
   
    carcitylistUrl,
  
} from "../../constants.js";


const Carcitylist = async (citylist) => {
 
  const headers = {
    "Content-Type": "application/json",
   
  };
  
   console.log("ia m in the service carcitlisyyy",citylist);
  try {
    const carcitylistdata = await axios.get(
      carcitylistUrl,
      citylist,
      { headers: headers }
    );
     console.log("carcitylist customdata",carcitylistdata);
    return carcitylistdata.data;
  } catch (error) {
    // console.log(error);
  }
};

export {Carcitylist}
import axios from "axios";
import {
   
  buscitylistUrl,
  
} from "../../constants.js";


const buscitylist = async (user) => {
  // console.log("buscitylist service payload",user)
  const headers = {
    "Content-Type": "application/json",
   
  };
  
  // console.log("ia m in the service");
  try {
    const buscitylistdata = await axios.get(
      buscitylistUrl,
      user,
      { headers: headers }
    );
    //  console.log("buscitylist data",buscitylistdata.data);
    return buscitylistdata.data;
  } catch (error) {
    // console.log(error);
  }
};

export {buscitylist}
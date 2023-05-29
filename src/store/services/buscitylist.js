import axios from "axios";
import {
   
  buscitylistUrl,
  
} from "../../constants.js";


const buscitylist = async (user) => {
 
  const headers = {
    "Content-Type": "application/json",
   
  };
  
  
  try {
    const buscitylistdata = await axios.get(
      buscitylistUrl,
      user,
      { headers: headers }
    );
   
    return buscitylistdata.data;
  } catch (error) {
   
  }
};

export {buscitylist}
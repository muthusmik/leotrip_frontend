import axios from "axios";
import {
   
  businfoUrl,
  
} from "../../constants.js";


const businfo = async (user) => {
  // console.log("businfo service payload",user)
  const headers = {
    "Content-Type": "application/json",
   
  };
  
  // console.log("ia m in the service");
  try {
    const businfodata = await axios.post(
      businfoUrl,
      user,
      { headers: headers }
    );
    //  console.log("businfo data",businfodata.data);
    return businfodata.data;
  } catch (error) {
    // console.log(error);
  }
};

export {businfo}
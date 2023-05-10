import axios from "axios";
import {
   
  airlineUrl,
  
} from "../../constants.js";


const airline = async (airline) => {
 
  const headers = {
    "Content-Type": "application/json",
   
  };
  
  // console.log("ia m in the service");
  try {
    const airlinedata = await axios.get(
        airlineUrl,
        airline,
      { headers: headers }
    );
     console.log("airline data in service",airlinedata.data);
    return airlinedata.data;
  } catch (error) {
    // console.log(error);
  }
};

export {airline}
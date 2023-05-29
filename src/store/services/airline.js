import axios from "axios";
import {
   
  airlineUrl,
  
} from "../../constants.js";


const airline = async (airline) => {
 
  const headers = {
    "Content-Type": "application/json",
   
  };
  
  
  try {
    const airlinedata = await axios.get(
        airlineUrl,
        airline,
      { headers: headers }
    );
   
    return airlinedata.data;
  } catch (error) {
    
  }
};

export {airline}
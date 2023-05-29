import axios from "axios";
import {
   
  airportcitylistUrl,
  
} from "../../constants.js";


const airportcitylist = async (citylist) => {
 
  const headers = {
    "Content-Type": "application/json",
   
  };
  
  
  try {
    const airportcitylistdata = await axios.get(
      airportcitylistUrl,
      citylist,
      { headers: headers }
    );
    
    return airportcitylistdata.data;
  } catch (error) {
    
  }
};

export {airportcitylist}
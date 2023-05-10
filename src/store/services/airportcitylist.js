import axios from "axios";
import {
   
  airportcitylistUrl,
  
} from "../../constants.js";


const airportcitylist = async (citylist) => {
 
  const headers = {
    "Content-Type": "application/json",
   
  };
  
  // console.log("ia m in the service");
  try {
    const airportcitylistdata = await axios.get(
      airportcitylistUrl,
      citylist,
      { headers: headers }
    );
    //  console.log("hotelcitylist customdata",hotelcitylistdata.data);
    return airportcitylistdata.data;
  } catch (error) {
    // console.log(error);
  }
};

export {airportcitylist}
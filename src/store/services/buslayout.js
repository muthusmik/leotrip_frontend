import axios from "axios";
import {
    buslayoutUrl,
} from "../../constants.js"

const busSeatLayout= async (user) => {
 
  const headers = {
    "Content-Type": "application/json",
   
  };
  
  
  try {
    const busdata = await axios.post(
        buslayoutUrl,
      user,
      { headers: headers }
    );
   
    return busdata.data.Result.SeatLayout;
  } catch (error) {
  }
};

export {busSeatLayout}
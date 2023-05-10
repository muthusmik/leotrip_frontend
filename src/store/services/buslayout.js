import axios from "axios";
import {
    buslayoutUrl,
} from "../../constants.js"

const busSeatLayout= async (user) => {
  // console.log("bus service payload",user)
  const headers = {
    "Content-Type": "application/json",
   
  };
  
  // console.log("ia m in the service");
  try {
    const busdata = await axios.post(
        buslayoutUrl,
      user,
      { headers: headers }
    );
    // console.log("bus layout data",busdata.data.Result.SeatLayout);
    return busdata.data.Result.SeatLayout;
  } catch (error) {
    console.log(error);
  }
};

export {busSeatLayout}
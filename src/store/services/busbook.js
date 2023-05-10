import axios from "axios";
import {
    busBookUrl,
} from "../../constants.js"

const busBook= async (user) => {
  // console.log("bus book wdm service payload.......",user)
  const headers = {
    "Content-Type": "application/json",
   
  };
  
  // console.log("ia m in the service");
  try {
    const busdata = await axios.post(
        busBookUrl,
      user,
      { headers: headers }
    );
    // console.log("bus book data in service.........",busdata.data,user);
    return [user,busdata.data];
  } catch (error) {
    // console.log(error);
  }
};

export {busBook}
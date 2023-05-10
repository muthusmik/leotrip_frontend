import axios from "axios";
import {
  carUrl,
} from "../../constants.js";


const carlist = async (user) => {
  // console.log("car service payload",user)
  const headers = {
    "Content-Type": "application/json",
   
  };
  
  // console.log("i am in the service");
  try {
    const cardata = await axios.post(
      carUrl,
      user,
      { headers: headers }
    );
    console.log("car datatkkkkkkk.........",cardata.data.result);
    return cardata.data.result;
  } catch (error) {
   console.log(error.response.data.error,"got it ");
   return error.response.data.error
  }
};

export {carlist}
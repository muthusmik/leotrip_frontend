import axios from "axios";
import {
    carBookUrl,
} from "../../constants.js";


const carBook = async (carbook) => {
  //  console.log("car service payload",carbook)
  const headers = {
    "Content-Type": "application/json",
   
  };
  
  // console.log("i am in the service");
  try {
    const carBookdata = await axios.post(
        carBookUrl,
      carbook,
      { headers: headers }
    );
    //  console.log("car data baba",carBookdata.data.Result);
    return carBookdata.data.Result;
  } catch (error) {
    // console.log(error);
  }
};

export {carBook}
import axios from "axios";
import {
   
    HotelBookUrl,
  
} from "../../constants.js";



const HotelBook = async (hotelbook) => {
  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization':`Bearer ${usertoken}`
  };
  
  
  try {
    const hotelbookData = await axios.post(
        HotelBookUrl,
        hotelbook,
      { headers: headers }
    );
    return hotelbookData.data.BookResult;

  } catch (error) {
    return error.response.data
  }
  
};

export {HotelBook}
import axios from "axios";
import {
   
    HotelBookUrl,
  
} from "../../constants.js";



const HotelBook = async (hotelbook) => {
  //  console.log("hotelbook  payload",hotelbook)
  const headers = {
    "Content-Type": "application/json",
   
  };
  
  
  try {
    const hotelbookData = await axios.post(
        HotelBookUrl,
        hotelbook,
      { headers: headers }
    );

    
    //  console.log([hotelbookData.data]);
    // console.log("hotelbookData....hiji",hotelbookData.data.result.BookResult,hotelbook);
    return [hotelbook,hotelbookData.data.result.BookResult];

  } catch (error) {
    // console.log(error);
  }
  
};

export {HotelBook}
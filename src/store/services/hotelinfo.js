import axios from "axios";
import {
   
  hotelInfoUrl,
  
} from "../../constants.js";



const hotelInfo = async (hotelinfo) => {
  const headers = {
    "Content-Type": "application/json",
   
  };

 
  try {
    const hotelInfoData = await axios.post(
        hotelInfoUrl,
        hotelinfo,
      { headers: headers }
    );

    
   
    return [hotelInfoData.data.result.HotelInfoResult];

  } catch (error) {
    return(error)
  }
  
};

export {hotelInfo}
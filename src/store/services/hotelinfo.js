import axios from "axios";
import {
   
  hotelInfoUrl,
  
} from "../../constants.js";



const hotelInfo = async (hotelinfo) => {
  // console.log("hotelinfo  payload",hotelinfo)
  const headers = {
    "Content-Type": "application/json",
   
  };
  
  // console.log("iam in the hotelinfoservice");
 
  try {
    const hotelInfoData = await axios.post(
        hotelInfoUrl,
        hotelinfo,
      { headers: headers }
    );

    
    // console.log([hotelinfo, hotelInfoData.data.result.HotelInfoResult]);
    //  console.log("hotelInfoData....hiji",hotelInfoData.data.result.HotelInfoResult);
    return [hotelInfoData.data.result.HotelInfoResult];

  } catch (error) {
    console.log("uhhufh",error);
    return(error)
  }
  
};

export {hotelInfo}
import axios from "axios";
import {
   
  hotelRoomUrl,
  
} from "../../constants.js";



const hotelRoom = async (hotelroom) => {
 
  const headers = {
    "Content-Type": "application/json",
   
  };
  
  
 
  try {
    const hotelRoomData = await axios.post(
        hotelRoomUrl,
        hotelroom,
      { headers: headers }
    );

    
    
    return hotelRoomData.data.result.GetHotelRoomResult.HotelRoomsDetails;

  } catch (error) {
    return error;
    
  }
  
};

export {hotelRoom}
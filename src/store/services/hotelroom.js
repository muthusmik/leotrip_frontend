import axios from "axios";
import {
   
  hotelRoomUrl,
  
} from "../../constants.js";



const hotelRoom = async (hotelroom) => {
  //  console.log("hotelroom  payload",hotelroom)
  const headers = {
    "Content-Type": "application/json",
   
  };
  
  //  console.log("iam in the hotelroomservice");
 
  try {
    const hotelRoomData = await axios.post(
        hotelRoomUrl,
        hotelroom,
      { headers: headers }
    );

    
    // console.log([hotelinfo, hotelInfoData.data.result.HotelInfoResult]);
    return hotelRoomData.data.result.GetHotelRoomResult.HotelRoomsDetails;

  } catch (error) {
    return error;
    
  }
  
};

export {hotelRoom}
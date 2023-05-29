import axios from "axios";
import {
   
  blockRoomUrl,
  
} from "../../constants.js";



const blockRoom = async (blockroom) => {
  
  const headers = {
    "Content-Type": "application/json",
   
  };
  
 
 
  try {
    const blockRoomData = await axios.post(
        blockRoomUrl,
        blockroom,
      { headers: headers }
    );
   
    return [blockroom,blockRoomData.data.result.BlockRoomResult];

  } catch (error) {
  
  }
  
};

export {blockRoom}
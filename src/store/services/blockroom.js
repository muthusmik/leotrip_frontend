import axios from "axios";
import {
   
  blockRoomUrl,
  
} from "../../constants.js";



const blockRoom = async (blockroom) => {
  //  console.log("blockroom  payload",blockroom)
  const headers = {
    "Content-Type": "application/json",
   
  };
  
  //  console.log("iam in the blockroomservice");
 
  try {
    const blockRoomData = await axios.post(
        blockRoomUrl,
        blockroom,
      { headers: headers }
    );

    
    //  console.log([blockRoomData.data]);
    // console.log("blockRoomData....hiji",blockRoomData.data,blockroom);
    return [blockroom,blockRoomData.data.result];

  } catch (error) {
    // console.log(error);
  }
  
};

export {blockRoom}
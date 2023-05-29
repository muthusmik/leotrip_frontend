import axios from "axios";
import {
   
  busUrl,
  busGustUrl,
  busTransectionUrl,
  busBookingDetailsUrl,
  busbookingUrl,
  CancelBusbookingUrl,
} from "../../constants.js";
// import moment from "moment";


const buslist = async (user) => {

  const headers = {
    "Content-Type": "application/json",
   
  };
  
 
  try {
    const busdata = await axios.post(
      busUrl,
      user,
      { headers: headers }
    );
    
    return busdata.data;
  } catch (error) {
    return error.response.status;
  }
};



const busGustAdd = async (data) => {

  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization':`Bearer ${usertoken}`
  };
  
  console.log("Payload", data)
  try {
    const busGustData = await axios.post(busGustUrl,data,
      { headers: headers }
    );

   
    return busGustData;
  } catch (error) {

    return error.response.data

  }
};


const busTransectionDetails = async (data) => {

  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("userToken.....", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization':`Bearer ${usertoken}`
  };
  
  console.log("Payload......................In transaction", data)
  try {
    const busTransectionData = await axios.post(busTransectionUrl,data,
      { headers: headers }
    );

   
    return busTransectionData;
  } catch (error) {

    return error.response.data

  }
};

const busBookingDetails = async (data) => {

  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization':`Bearer ${usertoken}`
  };
  
  console.log("Payload", data)
  try {
    const busBookingData = await axios.post(busBookingDetailsUrl,data,
      { headers: headers }
    );
    return busBookingData;
  } catch (error) {

    return error.response.data

  }
};


const busBookinglist = async () => {

  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("qqq", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization':`Bearer ${usertoken}`
  };
  
  try {
    const busBookingData = await axios.get(busbookingUrl,
      { headers: headers }
    );
    return busBookingData.data;
  } catch (error) {

    return error.response.data

  }
};


const cancelbusBooking = async (data) => {

  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("qqq", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization':`Bearer ${usertoken}`
  };
  
  try {
    const cancelbusBookingData = await axios.post(CancelBusbookingUrl,data,
      {headers:headers}
    );
    return cancelbusBookingData;
  } catch (error) {

    return error.response.data

  }
};


export {buslist,busTransectionDetails,busGustAdd,busBookingDetails,busBookinglist,cancelbusBooking}
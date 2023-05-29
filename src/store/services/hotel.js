import axios from "axios";
import {
   
  hotelSearchUrl,
  hotelgustcreateurl,
  hotelTransectiondetailsUrl,
  hotelBookingDetailsUrl,
  hoteltransactionUrl,
  hotelbookingUrl,
  CancelHotelbookingUrl
} from "../../constants.js";



const hotelSearchList = async (hotelsearch) => {

  const headers = {
    "Content-Type": "application/json",
   
  };
  
  
 
  try {
    const hotelSearchData = await axios.post(
        hotelSearchUrl,
        hotelsearch,
      { headers: headers }
    );

   
    return [hotelsearch, hotelSearchData.data.result.Results,hotelSearchData.data.result.TraceId];
  } catch (error) {

    return error.response.data

  }
};



const hoteGustAdd = async (gust) => {

  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization':`Bearer ${usertoken}`
  };
  
  console.log("Payload", gust)
  try {
    const hotelGustData = await axios.post(hotelgustcreateurl,gust,
      { headers: headers }
    );

   
    return hotelGustData;
  } catch (error) {

    return error.response.data

  }
};

const hoteTransectionDetails = async (data) => {

  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization':`Bearer ${usertoken}`
  };
  
  console.log("Payload", data)
  try {
    const hotelTransectionData = await axios.post(hotelTransectiondetailsUrl,data,
      { headers: headers }
    );

   
    return hotelTransectionData;
  } catch (error) {

    return error.response.data

  }
};

const hotelBookingDetails = async (data) => {

  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization':`Bearer ${usertoken}`
  };
  
  console.log("Payload", data)
  try {
    const hotelBookingData = await axios.post(hotelBookingDetailsUrl,data,
      { headers: headers }
    );

   
    return hotelBookingData;
  } catch (error) {

    return error.response.data

  }
};

const hoteltransactionlist = async () => {

  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization':`Bearer ${usertoken}`
  };
  

  try {
    const hotelTransactionData = await axios.get(
      hoteltransactionUrl,
      { headers: headers }
    );

   
    return hotelTransactionData.data;
  } catch (error) {

    return error.response.data

  }
};

const hotelbookinglist = async () => {

  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization':`Bearer ${usertoken}`
  };
  

  try {
    const hotelBookingData = await axios.get(
      hotelbookingUrl,
      { headers: headers }
    );

   
    return hotelBookingData.data;
  } catch (error) {

    return error.response.data

  }
};


const cancelhotelbooking = async (data) => {

  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization':`Bearer ${usertoken}`
  };
  

  try {
    const cancelhotelBookingData = await axios.post(
      CancelHotelbookingUrl,
      data,
      { headers: headers }
    );

    console.log("Success...............",cancelhotelBookingData);
    return cancelhotelBookingData;

  } catch (error) {
    console.log("Failure...............",error.response.data);
    return error.response.data

  }
};



export {hotelSearchList,hoteGustAdd,hoteTransectionDetails,hotelBookingDetails,hoteltransactionlist,hotelbookinglist,cancelhotelbooking}
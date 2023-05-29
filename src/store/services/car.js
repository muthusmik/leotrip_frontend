import axios from "axios";
import {
  carUrl,
  carGustAddUrl,
  carTransectionDetailsUrl,
  carBookingDetailsUrl,
  cartransactionUrl,
  carbookingUrl
} from "../../constants.js";


const carlist = async (user) => {
 
  const headers = {
    "Content-Type": "application/json",
   
  };
  
  
  try {
    const cardata = await axios.post(
      carUrl,
      user,
      { headers: headers }
    );
   
    return cardata.data.result;
  } catch (error) {

   return error.response.status
  }
};


const carGustAdd = async (data) => {

  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization':`Bearer ${usertoken}`
  };
  
  console.log("Payload", data)
  try {
    const carGustAddData = await axios.post(carGustAddUrl,data,
      { headers: headers }
    );

   
    return carGustAddData;
  } catch (error) {

    return error.response.data

  }
};

const carTransectionDetails = async (data) => {

  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization':`Bearer ${usertoken}`
  };
  
  console.log("Payload", data)
  try {
    const carTransectionData = await axios.post(carTransectionDetailsUrl,data,
      { headers: headers }
    );

   
    return carTransectionData;
  } catch (error) {

    return error.response.data

  }
};

const CarBookingDetails = async (data) => {

  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization':`Bearer ${usertoken}`
  };
  
  console.log("Payload", data)
  try {
    const CarBookingData = await axios.post(carBookingDetailsUrl,data,
      { headers: headers }
    );

   
    return CarBookingData;
  } catch (error) {

    return error.response.data

  }
};

const cartransactionlist = async () => {

  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization':`Bearer ${usertoken}`
  };
  

  try {
    const carTransactionData = await axios.get(
      cartransactionUrl,
      { headers: headers }
    );

   
    return carTransactionData.data;
  } catch (error) {

    return error.response.data

  }
};

const carbookinglist = async () => {

  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization':`Bearer ${usertoken}`
  };
  

  try {
    const carBookingData = await axios.get(
      carbookingUrl,
      {headers: headers}
    );
    return carBookingData.data;

  } catch (error) {
    return error.response.data
  }
};

export {carlist,carGustAdd,carTransectionDetails,CarBookingDetails,cartransactionlist,carbookinglist}
import axios from "axios";
import {
  flightSearchUrl,
  flightGustAddUrl,
  flightTransectionDetailsUrl,
  flightBookingDetailsUrl,
  flighttransactionUrl,
  flightbookingUrl,
  flightCancellationUrl,
  hotelCancellationUrl
} from "../../constants.js";
const flightSearchList = async (flightsearch) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const flightSearchData = await axios.post(
      flightSearchUrl,
      flightsearch,
      { headers: headers }
    );
    if (flightSearchData.data.result.errorCode) {
      return flightSearchData.data.result;
    }
    else {
      return flightSearchData.data.result[0];
    }
  } catch (error) {
    return error.response.data
  }
};
const flightGustAdd = async (gust) => {
  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization': `Bearer ${usertoken}`
  };
  console.log("Payload", gust)
  try {
    const flightGustData = await axios.post(flightGustAddUrl, gust,
      { headers: headers }
    );
    return flightGustData;
  } catch (error) {
    return error.response.data
  }
};
const flightTransectionDetails = async (data) => {
  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization': `Bearer ${usertoken}`
  };
  console.log("Payload", data)
  try {
    const flightTransectionData = await axios.post(flightTransectionDetailsUrl, data,
      { headers: headers }
    );
    return flightTransectionData;
  } catch (error) {
    return error.response.data
  }
};
const flightBookingDetails = async (data) => {
  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization': `Bearer ${usertoken}`
  };
  console.log("Payload", data)
  try {
    const flightBookingData = await axios.post(flightBookingDetailsUrl, data,
      { headers: headers }
    );
    return flightBookingData;
  } catch (error) {
    return error.response.data
  }
};
const flighttransactionlist = async () => {
  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization': `Bearer ${usertoken}`
  };
  try {
    const flightTransactionData = await axios.get(
      flighttransactionUrl,
      { headers: headers }
    );
    return flightTransactionData.data;
  } catch (error) {
    return error.response.data
  }
};
const flightbookinglist = async () => {
  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization': `Bearer ${usertoken}`
  };
  try {
    const flightBookingData = await axios.get(
      flightbookingUrl,
      { headers: headers }
    );
    return flightBookingData.data;
  } catch (error) {
    return error.response.data
  }
};
const hotelCancellation = async (data) => {
  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization': `Bearer ${usertoken}`
  };
  console.log("Payload", data)
  try {
    const hotelCancelData = await axios.post(hotelCancellationUrl, data,
      { headers: headers }
    );
    return hotelCancelData;
  } catch (error) {
    return error.response.data
  }
};
const flightCancellation = async (data) => {
  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization': `Bearer ${usertoken}`
  };
  console.log("Payload", data)
  try {
    const flightCancelData = await axios.post(flightCancellationUrl, data,
      { headers: headers }
    );
    return flightCancelData;
  } catch (error) {
    return error.response.data
  }
};
export { flightSearchList, flightTransectionDetails, flightGustAdd, flightBookingDetails, flighttransactionlist, flightbookinglist, flightCancellation, hotelCancellation }
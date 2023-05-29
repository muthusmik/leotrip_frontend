import axios from "axios";
import {
    saveFlightBookingUrl,
    cancelFlightBookingUrl,
} from "../../constants.js";


const addBooking = async (airline) => {
    const usertoken = JSON.parse(localStorage.getItem('token'))
    console.log("cccb", usertoken)
    const headers = {
        "Content-Type": "application/json",
        'Authorization':`Bearer ${usertoken}`
    };


    try {
        const airlinedata = await axios.post(
            saveFlightBookingUrl,
            airline,
            { headers: headers }
        );
        return airlinedata;
    } catch (error) {

    }
};

const cancelBooking = async (airline) => {
    const usertoken = JSON.parse(localStorage.getItem('token'))
    console.log("cccb", usertoken)
    const headers = {
        "Content-Type": "application/json",
        'Authorization':`Bearer ${usertoken}`
    };


    try {
        const cancelairlinedata = await axios.post(
            cancelFlightBookingUrl,
            airline,
            { headers: headers }
        );
        console.log(cancelairlinedata);
        return cancelairlinedata;
    } catch (error) {
      return error
    }
};

export { addBooking,cancelBooking }
import axios from "axios";
import {
  bustransactionUrl
} from "../../constants.js";




const bustransactionlist = async () => {

    const usertoken = JSON.parse(localStorage.getItem('token'))
    console.log("cccb", usertoken)
    const headers = {
      "Content-Type": "application/json",
      'Authorization':`Bearer ${usertoken}`
    };
    
  
    try {
      const busTransactionData = await axios.get(
        bustransactionUrl,
        { headers: headers }
      );
  
     
      return busTransactionData.data;
    } catch (error) {
  
      return error.response.data
  
    }
  };
export  {bustransactionlist}
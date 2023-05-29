import axios from "axios";
import {
    busboardingpointUrl,
} from "../../constants.js";


const busBoardingpoint = async (user) => {
 
  const headers = {
    "Content-Type": "application/json",
   
  };
  
 
  try {
    const Busboarding = await axios.post(
        busboardingpointUrl,
      user,
      { headers: headers }
    );

    return Busboarding.data.result;
  } catch (error) {
    
    return error.response.status;

  }
};

export {busBoardingpoint}
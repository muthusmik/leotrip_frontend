import axios from "axios";
import {
   
    SignupUrl,
  
} from "../../constants.js";


const signup = async (signup) => {
 
  const headers = {
    "Content-Type": "application/json",
   
  };
  
  // console.log("ia m in the service");
  try {
    const signupdata = await axios.get(
        SignupUrl,
        signup,
      { headers: headers }
    );
     console.log("signup data in service",signupdata);
    return signupdata;
  } catch (error) {
     console.log("wrong turn",error);
  }
};

export {signup}
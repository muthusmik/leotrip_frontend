import axios from "axios";
import {
   
    SignupUrl,
    getprofileUrl,
    updateprofileUrl
} from "../../constants.js";


const signup = async (signup) => {
 
  const headers = {
    "Content-Type": "application/json",
   
  };
  
 
  try {
    const signupdetail = await axios.post(
        SignupUrl,
        signup,
      { headers: headers }
    );
    console.log("signupdetail",signupdetail)
     localStorage.setItem('token',JSON.stringify(signupdetail.data.result.token))
     localStorage.setItem('mobile',signup.mobileNumber)
    return signupdetail;
  } catch (error) {
    return error.response.data
  }
};

const Getprofiledetail = async () => {
 
  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization':`Bearer ${usertoken}`
  };
  
 
  try {
    const Profiledetail = await axios.get(
          getprofileUrl,
      { headers: headers }
    );
  
    return Profiledetail.data;
  } catch (error) {
    return error.response.data
  }
};

const Updateprofiledetail = async (data) => {
 
  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("cccb", usertoken)
  const headers = {
    "Content-Type": "application/json",
    'Authorization':`Bearer ${usertoken}`
  };
  
 
  try {
    const UpdateProfiledetail = await axios.put(
      updateprofileUrl,
      data,
      { headers: headers }
    );
  
    return UpdateProfiledetail.data;
  } catch (error) {
    return error.response.data
  }
};



export {signup,Getprofiledetail,Updateprofiledetail}
import React, { useEffect, useState } from 'react';
// import sha512 from "js-sha512";
import Button from 'react-bootstrap/Button';
import jsSHA from "jssha";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useStore, useDispatch } from "react-redux";
import { loadCarBook } from "../../../store/actions/carbook";
import { carTransectionDetails } from "../../../store/services/car";
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { useLocation } from "react-router-dom";


const CarPayUForm = ({ passanger }) => {

  const [customerDetails, setCustomerDetails] = useState({})

  useEffect(() => {
    generateTransactionId()
  }, [])
  const location = useLocation();
  const [traceid, setTraceid] = React.useState(location.state.state.TraceID)
  const [carfare, setCarfare] = React.useState(location.state.state.data)

  function generateTransactionId() {
    const min = 10000;
    const max = 99999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    // setTransactionId(randomNumber.toString());
    setCustomerDetails({
      name: passanger.name,
      email: passanger.email,
      phone: passanger.number,
      amount:carfare.Fare.TotalAmount,
      txnid: randomNumber.toString()
    });
  }

  const [paymentdetails, Setpaymentdetails] = useState()

  const dispatch = useDispatch();
  const history = useHistory();

  const redirectToPayU = (pd) => {
    //use window.bolt.launch if you face an error in bolt.launch

    window.bolt.launch(pd, {
      responseHandler: async function (response) {
        // your payment response Code goes here
        console.log("res", response)
        const element = document.getElementsByTagName("body");
        if (response) {
          element[0].style.overflow = "unset"
          if (response.response.status === "success") {
            // toast.dismiss();
            // toast("Your payment is successfull")

            element[0].style.overflow = "unset"
            const carBook = {
              "EndUserIp": "107.180.105.183",
              "ClientId": "180109",
              "UserName": "SKdigPa8",
              "Password": "A$JSkEf4#4",
              "SrdvIndex": carfare.SrdvIndex,
              "TraceID": traceid,
              "PickUpTime": passanger.enterTime,
              "DropUpTime": passanger.enterTime,
              "RefID": "77894",
              "CustomerName": passanger.name,
              "CustomerPhone": passanger.number,
              "CustomerEmail": passanger.email,
              "CustomerAddress": passanger.location
            }
            dispatch(loadCarBook(carBook));
            let transectionResponse = await carTransectionDetails(response.response)
            // alert("Your payment is successfull")
            console.log("car booking data in payu",carBook)
            alert("Your payment is successfull")
            history.push('/car/CarPayment', { state: { carfare } })
          }
          else if (response.response.status === "failure") {
            toast.dismiss();
            toast("Your payment is failed. Try after sometime!!")
          }
          else if (response.response.txnStatus === "CANCEL") {
            const element = document.getElementsByTagName("body");
            console.log("tee", element)
            element[0].style.overflow = "unset"
            toast.dismiss();
            toast("Your have cancelled payment. reason:" + response.response.txnMessage)
          }

        }

        Setpaymentdetails(response)
      },
      catchException: function (response) {
        // the code you use to handle the integration errors goes here
        // Make any UI changes to convey the error to the user
        console.log("papa", response)
        const element = document.getElementsByTagName("body");
        console.log("sss", element)
        if (response) {
          element[0].style.overflow = "unset"
          if (response) {
            const element = document.getElementsByTagName("body");
            console.log("tggee", element)
            element[0].style.overflow = "unset"
            toast.dismiss();
            toast(response.message + "Try after sometime!!")
          }
        }
      }
    });
  }

  const usertoken = JSON.parse(localStorage.getItem('token'))
  console.log("uuuu", usertoken)

  console.log("details", paymentdetails)
  useEffect(() => {
    generateHash(customerDetails)
  }, [])

  const handleInputChange = (event) => {
    setCustomerDetails({
      ...customerDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {

    // event.preventDefault();

    // Generate the hash using the PayU hash generator
    const hash = generateHash(customerDetails);

    var pd = {
      key: 'QCtX6F',
      txnid: customerDetails.txnid,
      amount: customerDetails.amount,
      firstname: customerDetails.name,
      email: customerDetails.email,
      phone: customerDetails.phone,
      productinfo: 'Car Booking',
      surl: 'http://localhost:3000/flight',
      furl: 'https://apiplayground-response.herokuapp.com/',
      hash: hash
    }

    redirectToPayU(pd);
  }
  return (

    <>
      <Button onClick={() => handleSubmit()}>Pay &amp; confirm now</Button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

function generateHash(customerDetails) {
  // Implement the hash generation logic using the PayU hash generator
  let hashString = 'QCtX6F' + "|" + customerDetails.txnid + "|" + customerDetails.amount + "|" + 'Car Booking' + "|" + customerDetails.name + "|" + customerDetails.email + '|' + "||||||||||" + 'buO0YtzyXVGrFBZaVT75AzMArZy6kphP';
  //   let hash = sha512.sha512(hashString);
  const shaObj = new jsSHA("SHA-512", "TEXT");
  shaObj.update(hashString)
  let hash = shaObj.getHash("HEX");

  return hash;
}

export default CarPayUForm;
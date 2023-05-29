import React, { useEffect, useState } from 'react';
// import sha512 from "js-sha512";
import Button from 'react-bootstrap/Button';
import jsSHA from "jssha";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useStore, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { loadBusBook } from '../../../store/actions/busbook';
import { busTransectionDetails } from '../../../store/services/bus';
import moment from 'moment';

const BusPayUForm = ({ busbookData, gustRes, busdata, PriceAmount }) => {

  const [paymentdetails, Setpaymentdetails] = useState()

  const [customerDetails, setCustomerDetails] = useState({
    name: busbookData.Passenger[0].FirstName,
    email: busbookData.Passenger[0].Email,
    phone: busbookData.Passenger[0].Phoneno,
    amount: 1,//PriceAmount,
    txnid: gustRes._id
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const redirectToPayU = (pd) => {
    //use window.bolt.launch if you face an error in bolt.launch

    window.bolt.launch(pd, {
      responseHandler: async function (response) {
        // your payment response Code goes here
        const element = document.getElementsByTagName("body");
        if (response) {
          element[0].style.overflow = "unset"
          if (response.response.txnStatus === "SUCCESS") {
            // toast.dismiss();
            // toast("Your payment is successfull")

            element[0].style.overflow = "unset"
            const Busbook = Object.assign(busbookData, { RefID: 1 })
            const transData={
              "result":response.response
            }
            let transectionResponse = await busTransectionDetails(transData)
            dispatch(loadBusBook(Busbook));
            // let transectionResponse = await busTransectionDetails(response.response)
            console.log("After bus booking payload..............", Busbook)
            // console.log("After Txnid.............", response.response.txnid,"          gustRes._id", gustRes._id);
            alert("Your payment is successfull")
            history.push({ pathname: '/bus/buspayment', state: { txnid: gustRes._id } });
            // history.push({ pathname: '/bus/buspayment', state: { txnid: response.response.txnid } });
          }
          else if (response.response.status === "failure") {
            toast.dismiss();
            toast("Your payment is failed. Try after sometime!!")
            history.push('/bus')
          }
          else if (response.response.txnStatus === "CANCEL") {
            toast.dismiss();
            toast("Your have cancelled payment. reason:" + response.response.txnMessage)
            history.push('/bus')
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
      amount: Math.round(customerDetails.amount),
      firstname: customerDetails.name,
      email: customerDetails.email,
      phone: customerDetails.phone,
      productinfo: 'Bus Booking',
      surl: 'http://localhost:3000/flight',
      furl: 'https://apiplayground-response.herokuapp.com/',
      hash: hash
    }

    redirectToPayU(pd);
  }
  return (

    <>
      <Button onClick={() => handleSubmit('')}>Pay &amp; confirm now</Button>
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
  let hashString = 'QCtX6F' + "|" + customerDetails.txnid + "|" + customerDetails.amount + "|" + 'Bus Booking' + "|" + customerDetails.name + "|" + customerDetails.email + '|' + "||||||||||" + 'buO0YtzyXVGrFBZaVT75AzMArZy6kphP';
  //   let hash = sha512.sha512(hashString);
  const shaObj = new jsSHA("SHA-512", "TEXT");
  shaObj.update(hashString)
  let hash = shaObj.getHash("HEX");
  console.log("rarara", hash)

  return hash;
}

export default BusPayUForm;
import React, { useEffect, useState } from 'react';
// import sha512 from "js-sha512";
import Button from 'react-bootstrap/Button';
import jsSHA from "jssha";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useStore, useDispatch } from "react-redux";
import { loadHotelBook } from "../../../store/actions/hotelbook";
import { hoteTransectionDetails } from "../../../store/services/hotel";
import { useHistory } from 'react-router-dom';
import moment from 'moment';

const HotelPayUForm = ({ guestdetails }) => {
  // console.log("Guest details............", guestdetails);
  const [customerDetails, setCustomerDetails] = useState({})
  const [passangers, setPassangers] = useState([])

  useEffect(() => {
    generateTransactionId()

    let userlist = guestdetails?.gustDetails?.userGuestDetails
    let passangerList = []
    if (userlist) {
      if (userlist?.Adults) {
        userlist?.Adults.map(item => {
          passangerList.push(Object.assign(item, {
            "MiddleName": null,
            "Phoneno": guestdetails?.phonenumber,
            "Email": guestdetails?.email,
            "PaxType": "1",
            "LeadPassenger": true,
            "PassportNo": null,
            "PassportIssueDate": null,
            "PassportExpDate": null
          }))
        })
      }
      if (userlist?.Childs) {
        userlist?.Childs.map(item => {
          passangerList.push(Object.assign(item, {
            "MiddleName": null,
            "Phoneno": guestdetails?.phonenumber,
            "Email": guestdetails?.email,
            "PaxType": "2",
            "LeadPassenger": false,
            "PassportNo": null,
            "PassportIssueDate": null,
            "PassportExpDate": null
          }))
        })
      }
    }
    setPassangers(passangerList)

  }, [])

  const [transactionId, setTransactionId] = useState('');
  const BlockRoomData = useSelector(state => state.BlockRoom)
  // useEffect(() => {
  //   console.log("aaa....", passangers)
  // }, [])


  function generateTransactionId() {
    const min = 10000;
    const max = 99999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    // setTransactionId(randomNumber.toString());
    const fullName = guestdetails?.gustDetails?.userGuestDetails?.Adults[0].FirstName + " " + guestdetails?.gustDetails?.userGuestDetails?.Adults[0].LastName;
    // console.log("Full name.........", BlockRoomData.data[1]?.HotelRoomsDetails[0]?.Price.PublishedPriceRoundedOff);
    setCustomerDetails({
      name: fullName,
      email: guestdetails?.email,
      phone: guestdetails?.phonenumber,
      amount:1,//BlockRoomData.data[1]?.HotelRoomsDetails[0]?.Price.PublishedPriceRoundedOff,
      txnid: guestdetails?.gustDetails._id
    });
  }

  const hotelguest = JSON.parse(localStorage.getItem('hotelguestdetail'));
  const [paymentdetails, Setpaymentdetails] = useState()
  const ArrivalDate = useSelector(state => state.HotelSearch)



  let datestr = (ArrivalDate?.data[0]?.CheckInDate).split('/')





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
          if (response.response.txnStatus === "SUCCESS") {
            // toast.dismiss();
            // toast("Your payment is successfull"
            element[0].style.overflow = "unset"
            const hotelBook = {
              "ResultIndex": BlockRoomData.data[0].ResultIndex,
              "HotelCode": BlockRoomData.data[0].HotelCode,
              "TraceId": BlockRoomData.data[0].TraceId,
              "HotelName": BlockRoomData.data[0].HotelName,
              "GuestNationality": BlockRoomData.data[0].GuestNationality,
              "NoOfRooms": BlockRoomData.data[0].NoOfRooms,
              "ClientReferenceNo": BlockRoomData.data[0].ClientReferenceNo,
              "IsVoucherBooking": BlockRoomData.data[0].IsVoucherBooking,
              "HotelRoomsDetails": [
                {
                  "ChildCount": BlockRoomData.data[1].HotelRoomsDetails[0].ChildCount,
                  "RequireAllPaxDetails": BlockRoomData.data[1].HotelRoomsDetails[0].RequireAllPaxDetails,
                  "RoomId": BlockRoomData.data[1].HotelRoomsDetails[0].RoomId,
                  "RoomStatus": BlockRoomData.data[1].HotelRoomsDetails[0].RoomStatus,
                  "RoomIndex": BlockRoomData.data[1].HotelRoomsDetails[0].RoomIndex,
                  "RoomTypeCode": BlockRoomData.data[1].HotelRoomsDetails[0].RoomTypeCode,
                  "RoomTypeName": BlockRoomData.data[1].HotelRoomsDetails[0].RoomTypeName,
                  "RatePlanCode": BlockRoomData.data[1].HotelRoomsDetails[0].RatePlanCode,
                  "RatePlan": BlockRoomData.data[1].HotelRoomsDetails[0].RatePlan,
                  "InfoSource": BlockRoomData.data[1].HotelRoomsDetails[0].InfoSource,
                  "SequenceNo": BlockRoomData.data[1].HotelRoomsDetails[0].SequenceNo,
                  "DayRates": BlockRoomData.data[1].HotelRoomsDetails[0].DayRates,
                  "SupplierPrice": BlockRoomData.data[1].HotelRoomsDetails[0].SupplierPrice,
                  "Price": BlockRoomData.data[1].HotelRoomsDetails[0].Price,
                  "HotelPassenger": passangers,
                  "RoomPromotion": BlockRoomData.data[1].HotelRoomsDetails[0].RoomPromotion,
                  "Amenities": BlockRoomData.data[1].HotelRoomsDetails[0].Amenities,
                  "Amenity": BlockRoomData.data[1].HotelRoomsDetails[0].Amenity,
                  "SmokingPreference": "0",
                  "BedTypes": BlockRoomData.data[1].HotelRoomsDetails[0].BedTypes,
                  "HotelSupplements": BlockRoomData.data[1].HotelRoomsDetails[0].HotelSupplements,
                  "LastCancellationDate": BlockRoomData.data[1].HotelRoomsDetails[0].LastCancellationDate,
                  "CancellationPolicies": BlockRoomData.data[1].HotelRoomsDetails[0].CancellationPolicies,
                  "CancellationPolicy": BlockRoomData.data[1].HotelRoomsDetails[0].CancellationPolicy,
                  "Inclusion": BlockRoomData.data[1].HotelRoomsDetails[0].Inclusion,
                  // "BedTypeCode": "13",
                  // "Supplements": null
                }
              ],
              // "ArrivalTime":datevalue,
              "ArrivalTime": moment(datestr[2] + '-' + datestr[1] + '-' + datestr[0]).format('YYYY-MM-DDT00:00:00'),
              "IsPackageFare": BlockRoomData.data[1].IsPackageFare
            }
            console.log("im the hotel booking payload data",hotelBook);
            const transData={
              "result":response.response
            }
            let transectionResponse = await hoteTransectionDetails(transData)
            dispatch(loadHotelBook(hotelBook));
            // alert("Your payment is successfull")
            // console.log("Hotel transaction details...........after api calling", transectionResponse)
            // toast.success("Your payment is successfull")
            alert("Your payment is successfull")
            history.push({ pathname: '/hotel/hotelpayment', state: { txnid: response.response.txnid, guestDetails: guestdetails } });
          }
          else if (response.response.status === "failure") {
            toast.dismiss();
            toast("Your payment is failed. Try after sometime!!")
          }
          else if (response.response.txnStatus === "CANCEL") {
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
          const element = document.getElementsByTagName("body");
          element[0].style.overflow = "unset"
          if (response) {
            const element = document.getElementsByTagName("body");
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
      productinfo: 'Hotel Booking',
      surl: 'http://localhost:3000/flight',
      furl: 'https://apiplayground-response.herokuapp.com/',
      hash: hash
    }
    // history.push("/hotel/hotelpayment")
    redirectToPayU(pd);
  }
  return (

    <>
      <Button onClick={() => handleSubmit('')}>Pay &amp; confirm now</Button>
    </>
  );
};

function generateHash(customerDetails) {
  // Implement the hash generation logic using the PayU hash generator
  let hashString = 'QCtX6F' + "|" + customerDetails.txnid + "|" + customerDetails.amount + "|" + 'Hotel Booking' + "|" + customerDetails.name + "|" + customerDetails.email + '|' + "||||||||||" + 'buO0YtzyXVGrFBZaVT75AzMArZy6kphP';
  //   let hash = sha512.sha512(hashString);
  const shaObj = new jsSHA("SHA-512", "TEXT");
  shaObj.update(hashString)
  let hash = shaObj.getHash("HEX");


  return hash;
}

export default HotelPayUForm;
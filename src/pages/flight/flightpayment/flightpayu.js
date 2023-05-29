import React, { useEffect, useState } from 'react';
// import sha512 from "js-sha512";
import Button from 'react-bootstrap/Button';
import jsSHA from "jssha";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useStore, useDispatch } from "react-redux";
import { loadHotelBook } from "../../../store/actions/hotelbook";
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { loadFlightOnewayBook } from '../../../store/actions/flightonewaybook';
import { loadFlightOnewayBookGDS } from '../../../store/actions/flightonewaybookGDS';
import { loadFlightOnewayBookHOLDGDS } from '../../../store/actions/flightonewaybookGDSHold';
import { loadFlightReturnBook } from '../../../store/actions/flightReturnBook';
import { loadFlightReturnBookGDS } from '../../../store/actions/flightReturnBookGDS';
import { loadFlightReturnBookHOLDGDS } from '../../../store/actions/flightReturnBookGDSHold';
import { flightTransectionDetails } from '../../../store/services/flight';
import { addBooking } from '../../../store/services/addBookingDetails';

const FlightPayUForm = ({ resData, booktype, mode }) => {
  console.log("FlightPayUForm", booktype, localStorage.getItem('JourneyTrip'))
  const triptype = localStorage.getItem('JourneyTrip');
  const [customerDetails, setCustomerDetails] = useState({})
  const [passangers, setPassangers] = useState([])
  const [returnpassangers, setReturnPassangers] = useState([])
  const flightinfo = useSelector(state => state.FlightOnewayInfo);
  const flightOneWayBookGdsHold = useSelector(state => state.flightOneWayBookGdsHold);
  const FlightBook = useSelector(state => state.FlightOneWayBook);
  const FlightReturnBook = useSelector(state => state.FlightReturnBook);
  const flightretun = useSelector(state => state.FlightReturnInfo);
  console.log("INSIDE OF triptype...........",triptype );

  useEffect(() => {
    return () => {
      console.log("INSIDE OF USEEFFECT...........", flightOneWayBookGdsHold);
    };
  }, [flightOneWayBookGdsHold])
  useEffect(() => {
    console.log("LccCheck..............", flightinfo.data[0].Results.IsLCC)
    generateTransactionId()
    let fare = {};
    let returnfare = {};
    if (triptype == 2) {
      if (flightretun.data != undefined) {
        returnfare = {
          "BaseFare": flightretun.data[0].Results.Fare.BaseFare,
          "Tax": flightretun.data[0].Results.Fare.Tax,
          "TransactionFee": "0",
          "YQTax": 0,
          "AdditionalTxnFeeOfrd": 0,
          "AdditionalTxnFeePub": 0,
          "AirTransFee": "0"
        }
      }
    }
    fare = {
      "BaseFare": flightinfo.data[0].Results.Fare.BaseFare,
      "Tax": flightinfo.data[0].Results.Fare.Tax,
      "TransactionFee": "0",
      "YQTax": 0,
      "AdditionalTxnFeeOfrd": 0,
      "AdditionalTxnFeePub": 0,
      "AirTransFee": "0"
    }

    let userlist = resData?.userGuestDetails


    if (userlist) {
      let len = booktype ? 2 : 1;
      for (let i = 0; i < len; i++) {
        let passangerList = []

        if (userlist?.Adult) {
          userlist?.Adult.map(item => {
            passangerList.push({
              "Title": item.title,
              "FirstName": item.firstName,
              "LastName": item.lastName,
              "PaxType": "1",
              "DateOfBirth": item.dateOfBirth,
              "Gender": item.gender,
              "PassportNo": item.passportNo,
              "PassportExpiry": item.passportExp,
              "AddressLine1": item.address,
              "City": item.city,
              "CountryCode": "IN",
              "CountryName": item.Nationality,
              "ContactNo": resData.mobileNumber,
              "Email": resData.email,
              "IsLeadPax": true,
              "Fare": i == 0 ? fare : returnfare
            })
          })
        }
        if (userlist?.child) {
          userlist?.child.map(item => {
            passangerList.push({
              "Title": item.title,
              "FirstName": item.firstName,
              "LastName": item.lastName,
              "PaxType": "2",
              "DateOfBirth": item.dateOfBirth,
              "Gender": item.gender,
              "PassportNo": item.passportNo,
              "PassportExpiry": item.passportExp,
              "AddressLine1": item.address,
              "City": item.city,
              "CountryCode": "IN",
              "CountryName": item.Nationality,
              "ContactNo": resData.mobileNumber,
              "Email": resData.email,
              "IsLeadPax": false,
              "Fare": i == 0 ? fare : returnfare
            })
          })
        }

        if (userlist?.child) {
          userlist?.child.map(item => {
            passangerList.push({
              "Title": item.title,
              "FirstName": item.firstName,
              "LastName": item.lastName,
              "PaxType": "3",
              "DateOfBirth": item.dateOfBirth,
              "Gender": item.gender,
              "PassportNo": item.passportNo,
              "PassportExpiry": item.passportExp,
              "AddressLine1": item.address,
              "City": item.city,
              "CountryCode": "IN",
              "CountryName": item.Nationality,
              "ContactNo": resData.mobileNumber,
              "Email": resData.email,
              "IsLeadPax": false,
              "Fare": i == 0 ? fare : returnfare
            })
          })
        }
        if (i == 0) {
          setPassangers(passangerList)
        }
        else {
          setReturnPassangers(passangerList)
        }
      }
    }

  }, [])


  console.log("saslk", passangers)

  function generateTransactionId() {
    const min = 10000;
    const max = 99999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    let bookingamount = flightinfo.data[0]?.Results.Fare.PublishedFare
    if (booktype) {
      bookingamount = bookingamount + flightretun.data[0]?.Results.Fare.PublishedFare
    }
    // setTransactionId(randomNumber.toString());
    // let fullName = passangers[0].FirstName + passangers[0].LastName
    // console.log("fullName................", fullName);
    setCustomerDetails({
      name: "Gust",
      email: resData.email,
      phone: resData.mobileNumber,
      amount: 1,// bookingamount,
      txnid: resData._id//randomNumber.toString()
    });
    // const flightonewaybook = [
    //   {
    //     "EndUserIp": "107.180.105.183",
    //     "ClientId": "180109",
    //     "UserName": "SKdigPa8",
    //     "Password": "A$JSkEf4#4",
    //     "SrdvType": "MixAPI",
    //     "SrdvIndex": flightinfo.data[0].Results.SrdvIndex,
    //     "TraceId": flightinfo.data[0].TraceId,
    //     "ResultIndex": flightinfo.data[0].Results.ResultIndex,
    //     "Passengers": passangers
    //   }
    // ]
    // if (flightinfo.data[0].Results.IsLCC) {
    //   dispatch(loadFlightOnewayBook(flightonewaybook));
    // }
    // else {
    //   console.log("..............Gds booking.............")
    //   dispatch(loadFlightOnewayBookHOLDGDS(flightonewaybook));
    //   console.log("..............Gds Middle.............")

    //   dispatch(loadFlightOnewayBookGDS(flightonewaybook));
    // }
  }

  const dispatch = useDispatch();
  const history = useHistory();

  const [paymentdetails, Setpaymentdetails] = useState()

  const redirectToPayU = (pd) => {
    //use window.bolt.launch if you face an error in bolt.launch

    window.bolt.launch(pd, {
      responseHandler: async function (response) {
        // your payment response Code goes here
        const element = document.getElementsByTagName("body");
        if (response) {
          element[0].style.overflow = "unset"
          console.log("looping doll");
          if (response.response.status === "success") {
            // toast.dismiss();
            // toast("Your payment is successfull")
            element[0].style.overflow = "unset"
            const flightonewaybook = [
              {
                "EndUserIp": "107.180.105.183",
                "ClientId": "180109",
                "UserName": "SKdigPa8",
                "Password": "A$JSkEf4#4",
                "SrdvType": "MixAPI",
                "SrdvIndex": flightinfo.data[0].Results.SrdvIndex,
                "TraceId": flightinfo.data[0].TraceId,
                "ResultIndex": flightinfo.data[0].Results.ResultIndex,
                "Passengers": passangers
              }
            ]
            if (flightinfo.data[0].Results.IsLCC) {
              console.log("Im inside the LCC first Flight Booking ")
              dispatch(loadFlightOnewayBook(flightonewaybook))
              // .then((response) => {
              //   console.log('Data fetched successfully..loadFlightOnewayBook', response);
              // })
              //   .catch((error) => {
              //     console.log("error in load flight oneway booking", error);
              //   })
            }
            else {
              console.log("Im inside the HOLD GDS first Flight Booking ")

              dispatch(loadFlightOnewayBookHOLDGDS(flightonewaybook))
              // .then(res => {
              //   console.log("Im inside the BOOK GDS first Flight Booking ")
              dispatch(loadFlightOnewayBookGDS(flightonewaybook))
              // })
              //   .catch((error) => {
              //     console.log("error in load flight oneway booking", error);
              //   })

            }
            if (triptype == 2) {
              if (flightretun.data != undefined) {
                console.log("22")
                const flightreturnbook = [
                  {
                    "EndUserIp": "107.180.105.183",
                    "ClientId": "180109",
                    "UserName": "SKdigPa8",
                    "Password": "A$JSkEf4#4",
                    "SrdvType": "MixAPI",
                    "SrdvIndex": flightretun.data[0].Results.SrdvIndex,
                    "TraceId": flightretun.data[0].TraceId,
                    "ResultIndex": flightretun.data[0].Results.ResultIndex,
                    "Passengers": returnpassangers
                  }
                ]
                if (flightretun.data[0].Results.IsLCC) {
                  console.log("Im inside the LCC Return Booking ")
                  dispatch(loadFlightReturnBook(flightreturnbook))
                  //.then((response) => {
                  //   console.log('Data fetched successfully..loadFlightReturnBook', response);
                  // })
                  //   .catch((error) => {
                  //     console.log("error inloadFlightReturnBook booking", error);
                  //   })
                }
                else {
                  console.log("Im inside the Hold GDS Return Booking ")
                  dispatch(loadFlightReturnBookHOLDGDS(flightreturnbook))
                  // .then(res => {
                  //   console.log("Im inside the BOOK GDS first Flight Booking ")
                  //   console.log("Im inside the BOOOK GDS Return Booking ")
                  dispatch(loadFlightReturnBookGDS(flightreturnbook))
                  // }
                  // )
                  // .catch((error) => {
                  //   console.log("error inloadFlightReturnBook booking", error);
                  // })
                }
              }
            }
            const transData={
              "result":response.response
            }
            let transectionResponse = await flightTransectionDetails(transData)
            // alert("Your payment is successfull")
            console.log(transectionResponse)

            // const bookingDetails = FlightBook?.data?.result?.Response;
            // delete bookingDetails.SrdvIndex;
            // let SaveBooking = await addBooking(bookingDetails)
            console.log("terty", FlightReturnBook)
            alert("Your payment is successfull")
            history.push("/flight/Flightpayment", { state: { booktype: booktype, txnid: response.response.txnid } })
          }
          else if (response.response.status === "failure") {
            toast.dismiss();
            toast("Your payment is failed. Try after sometime!!")
          }
          else if (response.response.txnStatus === "CANCEL") {
            toast.dismiss();
            // let Data = {
            //   "PNR": "CVIDGF",
            //   "BookingId": 23846929,
            //   "SSRDenied": "",
            //   "SSRMessage": "",
            //   "Status": "1",
            //   "IsPriceChanged": false,
            //   "IsTimeChanged": false,
            //   "TicketStatus": "1",
            //   "FlightItinerary": {
            //     "BookingId": 23846929,
            //     "IsManual": false,
            //     "PNR": "CVIDGF",
            //     "IsDomestic": "Not Set",
            //     "Source": "Publish",
            //     "Origin": "MAA",
            //     "Destination": "BLR",
            //     "AirlineCode": "I5",
            //     "LastTicketDate": "",
            //     "ValidatingAirlineCode": "",
            //     "AirlineRemark": [],
            //     "IsLCC": true,
            //     "NonRefundable": false,
            //     "FareType": "Publish",
            //     "CreditNoteNo": "",
            //     "Fare": {
            //       "Currency": "INR",
            //       "BaseFare": 1034,
            //       "Tax": 684,
            //       "YQTax": 0,
            //       "AdditionalTxnFeeOfrd": 0,
            //       "AdditionalTxnFeePub": 0,
            //       "PGCharge": 0,
            //       "OtherCharges": 0,
            //       "PublishedFare": 1718,
            //       "OfferedFare": 1688,
            //       "CommissionEarned": 31.89,
            //       "TdsOnCommission": -1.59,
            //       "ServiceFee": 0,
            //       "TotalBaggageCharges": 0,
            //       "TotalMealCharges": 0,
            //       "TotalSeatCharges": 0,
            //       "TotalSpecialServiceCharges": 0
            //     },
            //     "CreditNoteCreatedOn": "",
            //     "Passenger": [
            //       {
            //         "PaxId": "",
            //         "Title": "Mr",
            //         "FirstName": "cheran",
            //         "LastName": "kumar",
            //         "PaxType": "1",
            //         "DateOfBirth": "1998-03-20",
            //         "Gender": "",
            //         "PassportNo": "",
            //         "AddressLine1": "",
            //         "City": "",
            //         "CountryCode": "",
            //         "CountryName": "",
            //         "Nationality": "",
            //         "ContactNo": "+918220349860",
            //         "Email": "cheran.smiksystems@gmail.com",
            //         "IsLeadPax": "",
            //         "FFAirlineCode": "",
            //         "FFNumber": "",
            //         "Fare": {
            //           "Currency": "",
            //           "BaseFare": "",
            //           "Tax": "",
            //           "YQTax": "",
            //           "AdditionalTxnFeeOfrd": "",
            //           "AdditionalTxnFeePub": "",
            //           "PGCharge": "",
            //           "OtherCharges": "",
            //           "PublishedFare": "",
            //           "OfferedFare": "",
            //           "ServiceFee": "",
            //           "TotalBaggageCharges": "",
            //           "TotalMealCharges": "",
            //           "TotalSeatCharges": "",
            //           "TotalSpecialServiceCharges": ""
            //         },
            //         "Ticket": {
            //           "TicketId": "",
            //           "TicketNumber": "",
            //           "IssueDate": "",
            //           "ValidatingAirline": "",
            //           "Remarks": "",
            //           "ServiceFeeDisplayType": "",
            //           "Status": ""
            //         },
            //         "SegmentAdditionalInfo": [
            //           {
            //             "FareBasis": "",
            //             "NVA": "",
            //             "NVB": "",
            //             "Baggage": "",
            //             "Meal": "",
            //             "Seat": "",
            //             "SpecialService": ""
            //           }
            //         ]
            //       }
            //     ],
            //     "CancellationCharges": "",
            //     "Segments": [
            //       {
            //         "Baggage": "15 Kg (01 Piece only)",
            //         "CabinBaggage": "7 Kg",
            //         "TripIndicator": 1,
            //         "SegmentIndicator": 1,
            //         "DepTime": "2023-06-14T12:55",
            //         "ArrTime": "2023-06-14T13:50",
            //         "Airline": {
            //           "AirlineCode": "I5",
            //           "AirlineName": "AirAsia India",
            //           "FlightNumber": "613",
            //           "FareClass": "EC",
            //           "OperatingCarrier": ""
            //         },
            //         "AirlinePNR": "",
            //         "AccumulatedDuration": 55,
            //         "Origin": {
            //           "AirportCode": "MAA",
            //           "AirportName": "Chennai Arpt",
            //           "Terminal": "Terminal 1",
            //           "CityCode": "MAA",
            //           "CityName": "Chennai",
            //           "CountryCode": "IN",
            //           "CountryName": "India"
            //         },
            //         "Destination": {
            //           "AirportCode": "BLR",
            //           "AirportName": "Bengaluru Intl Arpt",
            //           "Terminal": "Terminal 2",
            //           "CityCode": "BLR",
            //           "CityName": "Bengaluru",
            //           "CountryCode": "IN",
            //           "CountryName": "India"
            //         },
            //         "Duration": 55,
            //         "GroundTime": "",
            //         "Mile": "",
            //         "StopOver": "",
            //         "StopPoint": "",
            //         "StopPointArrivalTime": "",
            //         "StopPointDepartureTime": "",
            //         "Craft": "",
            //         "Remark": "",
            //         "IsETicketEligible": "",
            //         "FlightStatus": "",
            //         "Status": ""
            //       }
            //     ],
            //     "FareRules": [
            //       {
            //         "Origin": "",
            //         "Destination": "",
            //         "Airline": "",
            //         "FareBasisCode": "",
            //         "FareRuleDetail": "",
            //         "FareRestriction": ""
            //       }
            //     ],
            //     "InvoiceNo": "",
            //     "InvoiceStatus": "",
            //     "InvoiceCreatedOn": "",
            //     "Remarks": "",
            //     "PartialSegmentCancellation": "Not Allowed"
            //   }
            // }
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
      productinfo: 'Flight Booking',
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
  let hashString = 'QCtX6F' + "|" + customerDetails.txnid + "|" + customerDetails.amount + "|" + 'Flight Booking' + "|" + customerDetails.name + "|" + customerDetails.email + '|' + "||||||||||" + 'buO0YtzyXVGrFBZaVT75AzMArZy6kphP';
  //   let hash = sha512.sha512(hashString);
  const shaObj = new jsSHA("SHA-512", "TEXT");
  shaObj.update(hashString)
  let hash = shaObj.getHash("HEX");


  return hash;
}

export default FlightPayUForm;
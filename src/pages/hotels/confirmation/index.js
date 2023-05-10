import React, { useEffect, useState } from 'react';
import CustomNavbar from '../../../component/navbar/Navbar';
import '../listing/hotellist.scss';
import { useSelector, useStore, useDispatch } from "react-redux";
import { loadHotelBook } from "../../../store/actions/hotelbook";
import Footer from "../../../component/footer/footer";
import Hoteldetails from './hotelDetails';
import GuestDetails from './guestdetails';
import { Promte,HotelFareDetails } from './hoteltripfare';
import { Insurance,PaymentOption } from './hotelconfirmationdetail';




const PackageDetails = () => {
    const guestStatus = useSelector(state => state.HotelGuestInfo)
    // console.log("................guestStatus index value " , guestStatus)

    // const dispatch = useDispatch();

    // useEffect(() => {

    //     const hotelBook = {

    //         "ResultIndex": "9",

    //         "HotelCode": "92G|DEL",
    //         "TraceId": "1",
    //         "HotelName": "The Manor",
    //         "GuestNationality": "IN",
    //         "NoOfRooms": "1",
    //         "ClientReferenceNo": 0,
    //         "IsVoucherBooking": true,
    //         "HotelRoomsDetails": [
    //             {
    //                 "ChildCount": 0,
    //                 "RequireAllPaxDetails": false,
    //                 "RoomId": 0,
    //                 "RoomStatus": 0,
    //                 "RoomIndex": 4,
    //                 "RoomTypeCode": "211504640|4|1",
    //                 "RoomTypeName": "Deluxe Room",
    //                 "RatePlanCode": "230104963",
    //                 "RatePlan": 13,
    //                 "InfoSource": "FixedCombination",
    //                 "SequenceNo": "EA~~341089~4",
    //                 "DayRates": [
    //                     {
    //                         "Amount": 12325,
    //                         "Date": "2019-09-28T00:00:00"
    //                     }
    //                 ],
    //                 "SupplierPrice": null,
    //                 "Price": {
    //                     "CurrencyCode": "INR",
    //                     "RoomPrice": 12325,
    //                     "Tax": 3113.3,
    //                     "ExtraGuestCharge": 0,
    //                     "ChildCharge": 0,
    //                     "OtherCharges": 26,
    //                     "Discount": 2175,
    //                     "PublishedPrice": 15464.3,
    //                     "PublishedPriceRoundedOff": 15464,
    //                     "OfferedPrice": 15464.3,
    //                     "OfferedPriceRoundedOff": 15464,
    //                     "AgentCommission": 0,
    //                     "AgentMarkUp": 0,
    //                     "ServiceTax": 4.68,
    //                     "TDS": 0,
    //                     "ServiceCharge": 0,
    //                     "TotalGSTAmount": 4.68,
    //                     "GST": {
    //                         "CGSTAmount": 0,
    //                         "CGSTRate": 0,
    //                         "CessAmount": 0,
    //                         "CessRate": 0,
    //                         "IGSTAmount": 4.68,
    //                         "IGSTRate": 18,
    //                         "SGSTAmount": 0,
    //                         "SGSTRate": 0,
    //                         "TaxableAmount": 26
    //                     }
    //                 },
    //                 "HotelPassenger": [
    //                     {
    //                         "Title": "Mr",
    //                         "FirstName": "Amit",
    //                         "MiddleName": null,
    //                         "LastName": "Singh",
    //                         "Phoneno": "9643737502",
    //                         "Email": "amit@srdvtechnologies.com",
    //                         "PaxType": "1",
    //                         "LeadPassenger": true,
    //                         "PassportNo": null,
    //                         "PassportIssueDate": null,
    //                         "PassportExpDate": null
    //                     },
    //                     {
    //                         "Title": "Mstr",
    //                         "FirstName": "Anu",
    //                         "MiddleName": null,
    //                         "LastName": "kumar",
    //                         "Phoneno": "9643737502",
    //                         "Email": "amit@srdvtechnologies.com",
    //                         "PaxType": "2",
    //                         "LeadPassenger": false,
    //                         "Age": "8",
    //                         "PassportNo": null,
    //                         "PassportIssueDate": null,
    //                         "PassportExpDate": null
    //                     }
    //                 ],
    //                 "RoomPromotion": "Member’s exclusive price",
    //                 "Amenities": [
    //                     "Breakfast Buffet"
    //                 ],
    //                 "SmokingPreference": "0",
    //                 "BedTypes": [
    //                     {
    //                         "BedTypeCode": "13",
    //                         "BedTypeDescription": "1 double bed"
    //                     }
    //                 ],
    //                 "HotelSupplements": [],
    //                 "LastCancellationDate": "2019-09-17T00:00:00",
    //                 "CancellationPolicies": [
    //                     {
    //                         "Charge": 100,
    //                         "ChargeType": 2,
    //                         "Currency": "INR",
    //                         "FromDate": "2019-09-18T00:00:00",
    //                         "ToDate": "2019-09-26T23:59:59"
    //                     },
    //                     {
    //                         "Charge": 100,
    //                         "ChargeType": 2,
    //                         "Currency": "INR",
    //                         "FromDate": "2019-09-27T00:00:00",
    //                         "ToDate": "2019-09-29T23:59:59"
    //                     },
    //                     {
    //                         "Charge": 100,
    //                         "ChargeType": 2,
    //                         "Currency": "INR",
    //                         "FromDate": "2019-09-28T00:00:00",
    //                         "ToDate": "2019-09-29T00:00:00"
    //                     }
    //                 ],
    //                 "CancellationPolicy": "Deluxe Room#^#100.00% of total amount will be charged, If cancelled between 18-Sep-2019 00:00:00 and 26-Sep-2019 23:59:59.|100.00% of total amount will be charged, If cancelled between 27-Sep-2019 00:00:00 and 29-Sep-2019 23:59:59.|100.00% of total amount will be charged, If cancelled between 28-Sep-2019 00:00:00 and 29-Sep-2019 00:00:00.|#!#",
    //                 "Inclusion": [
    //                     "Breakfast Buffet"
    //                 ],
    //                 "BedTypeCode": "13",
    //                 "Supplements": null
    //             }
    //         ],
    //         "ArrivalTime": "2019-09-28T00:00:00",
    //         "IsPackageFare": true



    //     }

    //     dispatch(loadHotelBook(hotelBook));
    // }, [dispatch]);

    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const [selectedvalue, onselectvalue] = useState(false);
    const onhandle = (event) => {
        onselectvalue(event);
        // console.log("selected value: ", selectedvalue)

    }

    return (
        <>
            <div className='container hotel-pakagedetail pb-5'>
                <div className="row listWrapper">
                    <div className="col-8">
                        <Hoteldetails />
                        <GuestDetails onhandle={onhandle}/>
                        <Insurance />
                        {/* <PaymentOption /> */}
                    </div>
                    <div className="col-4 hotel-paydetail">
                        <HotelFareDetails  selected={selectedvalue}/>
                        {/* <Promte /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

const PackageInfo = () => {

    const store = useStore()
    const hotelData = useSelector(state => state.HotelInfo);
    console.log(hotelData.data[0].HotelDetails, "hotelInfo...index consolm")

    return (
        <>
            <div className="container text-white hotelpackageinfo">
                <h3 name="Review your Booking">Review your Booking</h3>
                <h5>{hotelData.data[0].HotelDetails.HotelName} &nbsp;&nbsp; {hotelData.data[0].HotelDetails.CountryName}</h5>
            </div>
        </>
    )
}


const HotelConfirmation = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // console.log("hi every one")
    return (
        <>
            <CustomNavbar />
            <div>
                <div className='hotelbackground-theme'>
                    < PackageInfo />
                </div>
                <PackageDetails />
            </div>
            <div className='bottom-Content'>
                <Footer />
            </div>
        </>
    )
}

export default HotelConfirmation;
import React, { useEffect, useState } from 'react';
import CustomNavbar from '../../../component/navbar/Navbar';
import '../listing/hotellist.scss';
import { useSelector, useStore, useDispatch } from "react-redux";
import { loadHotelBook } from "../../../store/actions/hotelbook";
import Footer from "../../../component/footer/footer";
import {  toast } from 'react-toastify';
import Hoteldetails from './hotelDetails';
import GuestDetails from './guestdetails';
import { hoteGustAdd } from '../../../store/services/hotel';
import { Promte, HotelFareDetails } from './hoteltripfare';
import { Insurance, PaymentOption } from './hotelconfirmationdetail';
import { Form } from 'react-bootstrap';
import Login from '../../authentication/login';


const PackageDetails = () => {
    const guestStatus = useSelector(state => state.HotelGuestInfo)



    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);



    const [hotelguestdetail,setHotelguestdetail] =React.useState('')
    const [number, setNumber] = React.useState('')
    const [mail, setMail] = React.useState('')
    const [gust, setGust] = React.useState([])
    const [selectedvalue, onselectvalue] = useState(false);
    const guestdetails = JSON.parse(localStorage.getItem('roomGuest'));
   

        useEffect(()=>{
            let fieldArray = []
            let gustObj={
                Title:"Mr",   
               FirstName:"",
               LastName:"",
               age:""
               }
            guestdetails.map((room,rid)=>{
                console.log(room)
                let ageLimit = {"Adults":[],"Childs":[]};
                [...Array(guestdetails[rid].NoOfAdults)].map((ad,i)=>{
                    ageLimit.Adults.push(gustObj)
                });
                [...Array(guestdetails[rid].NoOfChild)].map((cd,j)=>{
                    ageLimit.Childs.push(gustObj)
                })
                fieldArray.push(ageLimit)
            })
            console.log("HHH",fieldArray)
         
            setGust(fieldArray)

        },[])



    const handleGust = (event,name,roomId,idx,type) => {
          let mapGust=JSON.parse(JSON.stringify(gust))
         if(type){    
            Object.assign(mapGust[roomId].Adults[idx],{[name]:event.target.value});  
         } else{
            Object.assign(mapGust[roomId].Childs[idx],{[name]:event.target.value});  
         }
       
        console.log(mapGust)
        setGust(mapGust)
    }
    const handlemobile = (event) => {
        setNumber(event.target.value)
    }

    const handleEmail = (event) => {
        setMail(event.target.value)
    }
    const [modalShow, setModalShow] = React.useState(false);
    const [validated, setValidated] = useState(false)
    const handleValidate = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const usertoken = JSON.parse(localStorage.getItem('token'))
        console.log("uuuu", usertoken)
      
      

        if (!form.checkValidity()) {
            onselectvalue(form.checkValidity());
            console.log("bk", selectedvalue)
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        } else {
            if (!usertoken) {
                // console.log("here")
                // toast.dismiss();
                // toast("continue......... Login for your Booking")
                setModalShow(true)
                return
            }
            setValidated(false);
            let mergeArray = {"Adults":[],"Childs":[]};
              gust.map((item,i)=>{
                if(item?.Adults)
                   mergeArray.Adults=[...mergeArray.Adults,...item.Adults]
                if(item?.Childs)
                   mergeArray.Childs=[...mergeArray.Childs,...item.Childs]   
              })
             //let gustData = ;
            let postData = {userGuestDetails:mergeArray}
            console.log("postData",postData)

         const res = await hoteGustAdd(postData)
                
                console.log("response", res);
                if(res?.data?.result){

                 onselectvalue(form.checkValidity());
                 let localstores = { gustDetails:res?.data?.result,email:mail,phonenumber:number };      
                 setHotelguestdetail(localstores)
                } else {

                }
          
         
        }
    };




    return (
        <>
            <div className='container hotel-pakagedetail pb-5'>
                <Form noValidate validated={validated} onSubmit={handleValidate}>
                    <div className="row listWrapper">
                        <div className="col-8">
                            <Hoteldetails />
                            <GuestDetails  handlemobile={handlemobile} handleEmail={handleEmail} handleGust={handleGust} />
                            {/* <Insurance /> */}
                            {/* <PaymentOption /> */}
                        </div>
                        <div className="col-4 hotel-paydetail">
                            <HotelFareDetails hotelguestdetail={hotelguestdetail} selected={selectedvalue} onselectvalue={onselectvalue}/>
                            {/* <Promte /> */}
                        </div>
                    </div>
                </Form>
            </div>
            <Login
                show={modalShow}
                ModalSetter={setModalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

const PackageInfo = () => {

    const store = useStore()
    const hotelData = useSelector(state => state.HotelInfo);


    return (
        <>
            <div className="container text-white hotelpackageinfo">
                <h3 name="Review your Booking">Review your Booking</h3>
                <h5>{hotelData.data[0]?.HotelDetails.HotelName} &nbsp;&nbsp; {hotelData.data[0]?.HotelDetails.CountryName}</h5>
            </div>
        </>
    )
}





const HotelConfirmation = () => {



    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            {/* <CustomNavbar /> */}
            <div>
                <div className='hotelbackground-theme'>
                    <PackageInfo />
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
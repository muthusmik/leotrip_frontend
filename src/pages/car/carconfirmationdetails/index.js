import React, { useState, useEffect } from 'react';
import CustomNavbar from '../../../component/navbar/Navbar';
import '../carlist/carlist.scss';
import CarFareDetails from './cartripfare';
import Promote from './promote';
import Inclusion from './inclusion';
import Cardetails from './carDetails';
import TravelerDetails from './travelerdetails';
import DriverDetails from './cartripconfirmationdetail';
import { Form } from 'react-bootstrap';
import { carGustAdd } from '../../../store/services/car';
import Footer from '../../../component/footer/footer';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import Login from '../../authentication/login';
import localStorage from 'redux-persist/es/storage';

const PackageDetails = () => {

    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const [location, setLocation] = React.useState('')
  
    const [validate, setValidate] = React.useState(false)
    const [title, setTitle] = React.useState("Mr")
    const [traveler, SetTraveler] = React.useState('')
    const [number, setNumber] = React.useState('')
    const [mail, setMail] = React.useState('')
    const [enterTime, setEnterTime] = React.useState('')
    const [dropTime, setDropTime] = React.useState('')
    const [passanger, setPassanger] = React.useState('')
    const handleName = (event) => {
        SetTraveler(event.target.value)
    }
    const handleNumber = (event) => {
        setNumber(event.target.value)
    }

    const handleEmail = (event) => {
        setMail(event.target.value)
    }

    const handleEnterTime = (event) => {
        setEnterTime(event.target.value)
    }

    const handleDropTime = (event) => {
        setDropTime(event.target.value)
    }
    const handleLocation = (event) => {
        setLocation(event.target.value);
    }

    const handleTitle = (event) => {
        setTitle(event.target.value);
    }

    const [modalShow, setModalShow] = React.useState(false);
    const [validated, setValidated] = useState(false)
    const handleValidate = async (event) => {
        const usertoken = JSON.parse(localStorage.getItem('token'))
        console.log("uuuu", usertoken)
          event.preventDefault();
        if (!usertoken) {
            console.log("here")
            // toast.dismiss();
        
            // toast("continue Login for your Booking")
            setModalShow(true)
        }
        else {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
                setValidated(true);
                onselectvalue(form.checkValidity());
              
                event.preventDefault();
                event.stopPropagation();
                
            }
            if (form.checkValidity() === true) {
                setValidated(false);
              
                let passanger = {name:traveler,number:number,email:mail,enterTime:enterTime,dropTime:dropTime,location:location}
                  let Postobj =   {
                    "name":traveler,
                    "title":title,
                    "email":mail,
                    "mobileNumber":number
                }
                let postData = {userGuestDetails:[Postobj]}
                console.log("postData",postData)
    
             const res = await carGustAdd(postData)
                    
                    console.log("response", res);
                    if(res?.data?.result){
                        console.log("Passenger",passanger)
                        setPassanger(passanger)
                        onselectvalue(form.checkValidity());
                       
                    } 
             
            }
        }
    };

    const [selectedvalue, onselectvalue] = useState(false);




    return (
        <>
            <div className='container car-pakagedetail pb-5'>
                <div >
                    <div className="row listWrapper">
                        <div className="col-8">
                            <Cardetails />
                            {/* <DriverDetails /> */}
                            {/* <Inclusion /> */}
                            <TravelerDetails validated={validated} 
                             handleName={handleName} 
                             handleNumber={handleNumber} 
                             handleEmail={handleEmail} 
                             handleTitle={handleTitle}
                             handleLocation={handleLocation} 
                             handleEnterTime={handleEnterTime} 
                             handleDropTime={handleDropTime} 
                             handleValidate={handleValidate}/>
                        </div>
                        <div className="col-4 car-paydetail">
                            <CarFareDetails selected={selectedvalue} passanger={passanger} />
                            {/* <Promote /> */}
                        </div>
                    </div>
                </div>

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
    useEffect(() => {
        const Destination = JSON.parse(localStorage.getItem('carsearch'));

    }, [])
    const Destination = JSON.parse(localStorage.getItem('carsearch'));
    const triptype = JSON.parse(localStorage.getItem('triptypename'));

    return (
        <>
            <div className="container text-white carpackageinfo">
                <h3 name="Review your Booking">Review your Booking</h3>
                <div className="row">
                    <div className="col-7">
                        <h5>
                            <span>{Destination[0].from.suggestion.caoncitlst_city_name} - {Destination[1].to.suggestion.caoncitlst_city_name}</span>
                            <span> |&nbsp;{triptype}</span><span>&nbsp; {moment(Destination[2].pickup).format("DD MMM YYYY")}</span>
                        </h5>
                    </div>
                    <div class="col-3">
                        {/* <span class="infoText">Hurry! Limited cars left</span> */}
                    </div>
                </div>
            </div>
        </>
    )
}


const CarConfirmation = () => {


    return (
        <>
            <div>
                {/* <CustomNavbar /> */}
                <div className='background-theme'>
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

export default CarConfirmation;

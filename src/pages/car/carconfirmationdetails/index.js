import React, { useState ,useEffect } from 'react';
import CustomNavbar from '../../../component/navbar/Navbar';
import '../carlist/carlist.scss';
import CarFareDetails from './cartripfaree';
import Promote from './promote';
import Inclusion from './inclusion';
import Cardetails from './carDetails';
import TravelerDetails from './travelerdetails';
import DriverDetails from './cartripconfirmationdetail';
import {Form} from 'react-bootstrap';
import Footer from '../../../component/footer/footer';
import moment from 'moment';

const PackageDetails = () => {

    React.useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    const [ locat,setLocat] = React.useState('')
    const handleLocation=(event)=>{
        setLocat(event.target.value);  
    }
    

    const[ traveler,SetTraveler]= React.useState('')
    const[number,setNumber] = React.useState('')
    const[mail,setMail] = React.useState('')
    const handleName = (event) => {
        SetTraveler(event.target.value)
    }
    const handleNumber = (event) => {
        setNumber(event.target.value)
    }

    const handleEmail = (event) => {
        setMail(event.target.value)
    }

    // console.log("...............traveler details............",traveler)

    const [validated,setValidated] = useState(false)
    const handleValidate = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        onselectvalue(form.checkValidity());
          event.preventDefault();
          event.stopPropagation();
          setValidated(true);
        }
        if(form.checkValidity() === true)
        {
        onselectvalue(form.checkValidity());
            setValidated(false);
        }
      };
    
      const [selectedvalue, onselectvalue] = useState(false);
    

    
    return (
        <>
            <div className='container car-pakagedetail pb-5'>
            <Form noValidate validated={validated} onClick={handleValidate}>
                <div className="row listWrapper">
                    <div className="col-8">
                        <Cardetails />
                        <DriverDetails handleLocation={handleLocation}/>
                        <Inclusion />
                        <TravelerDetails handleName={handleName} handleNumber={handleNumber} handleEmail={handleEmail}/>
                    </div>
                    <div className="col-4 car-paydetail">
                        <CarFareDetails selected={selectedvalue}/>
                        <Promote />
                    </div>
                </div>
                </Form>

            </div>
        </>
    )
}

const PackageInfo = () => {
    useEffect(() => {
        const Destination = JSON.parse(localStorage.getItem('carsearch'));
        
        console.log('Destination........', Destination[4].triptype);
    }, [])
    const Destination = JSON.parse(localStorage.getItem('carsearch'));
    const triptype = JSON.parse(localStorage.getItem('triptypename'));
    console.log("------Destination------",Destination)
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
                        <span class="infoText">Hurry! Limited cars left</span>
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
            <CustomNavbar />
            <div className='background-theme'>
                < PackageInfo />
            </div>
            <PackageDetails />
        </div>
        <div className='bottom-Content'>
          <Footer/>
        </div>
    </>
    )
}

export default CarConfirmation;
import React, { useState, useEffect } from 'react';
import './flight.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TravelOption from './traveloption';
import CustomDatePickers from "../../component/datepicker/singledatepicker"
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import LocalSearch from '../../component/autocomplete/localsearch';
import CustomButton from '../../component/button';
import { useHistory } from 'react-router-dom';
import moment from "moment";
import { format } from 'date-fns';




const Multicity = () => {



    const history = useHistory();
    const handleSubmit = () => {
        history.push("/flight/flightlist-multicity")
    }


    /* # Hide inputs */

    const [show, setShow] = useState(false)
    const [onview, setOnview] = useState(false)

    const handleClick = (val) => {

        switch (val) {
            case 1:
                setShow(true);
                break;
            case 2:
                setOnview(true);
                break;
            default:
                return null;
        }
    }

    /*  # Source */

    const [fromaddress, setFromaddress] = useState("");
    const [fromcoordinates, setFromcoordinates] = useState({
        lat: null,
        lng: null
    });

    const FromAddress = (event) => {
        setFromaddress(event)
    }

    const handleSelectSource = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setFromaddress(value);
        setFromcoordinates(latLng);
    };


    /* # Destination */
    const [toaddress, setToaddress] = React.useState("");
    const [tocoordinates, setTocoordinates] = React.useState({
        lat: null,
        lng: null
    });

    const ToAddress = (event) => {
        setToaddress(event)
    }

    const handleSelectDestination = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setToaddress(value);
        setTocoordinates(latLng);
    };

    /* # common option State */
    const options = {
        fields: ["formatted_address", "geometry", "name"],
        strictBounds: false,
        types: ["airport"]
    };



    /* # DatePicker */

    const [selectedDay, setSelectedDay] = useState(Date);
    const [date, setDate] = useState('')

    const handleDayClick = (day) => {
        setDate(format(day, 'PP'))
        setSelectedDay(day)
    };
    useEffect(() => {
        // set current date on component load
        setDate(format(new Date(), 'PP'))
    }, [])


    /* # Adding Inputs */

    const [formValues, setFormValues] = useState([{ from: '', To: "", selectedDay: "" }])
    const [view, setView] = useState(true)
    // const [count,setCount]=useState(1)

    let addFormFields = (index) => {
        setFormValues([...formValues, { from: '', To: "", selectedDay: "" }])
        // setCount +=1
        setView(false)
    }
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
        setView(true)
    }



    return (
        <>
            <div className='d-inline-flex content'>
                <div>
                    <div className="search-area mt-4">
                        <p>From</p>
                        <LocalSearch
                            value={fromaddress}
                            onChange={(e) => FromAddress(e)}
                            onSelect={(e) => handleSelectSource(e)}
                            searchOptions={options}
                            searchplaceholder="Enter city or airport"
                            name="From"
                            required="required"
                        >
                        </LocalSearch>
                    </div>
                </div>
                <div className='icon d-flex justify-content-center'>
                    <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "20px", color: "green" }} />
                </div>
                <div className="search-area mt-4">
                    <p style={{ width: "20px" }}>To</p>
                    <LocalSearch
                        value={toaddress}
                        onChange={(e) => ToAddress(e)}
                        onSelect={(e) => handleSelectDestination(e)}
                        searchOptions={options}
                        searchplaceholder="Enter city or airport"
                        name="To"
                        required="required"
                    >
                    </LocalSearch>
                </div>
                <div className='dateselection mt-4'>
                    <p>Departure</p>
                    <CustomDatePickers
                        maxDate={moment().format("PP")}
                        value={date}
                        Searchstyle="flight_searchdate"
                        selected={selectedDay}
                        onDayClick={handleDayClick}
                        required="required"
                        calanderstyle="flight_calander"
                    />
                </div>
                <div className='traveloption mt-4'>
                    <p>Travellers & Class</p>
                    <TravelOption />
                </div>
            </div>
            <div className=' content'>

                {formValues.map((element, index) => (
                    <div className='row container'>
                        <div className="col-4 search-area mt-4">
                            <p>From</p>
                            <LocalSearch
                                value={fromaddress}
                                onChange={(e) => FromAddress(e)}
                                onSelect={(e) => handleSelectSource(e)}
                                searchOptions={options}
                                searchplaceholder="Enter city or airport"
                                name="From"
                                required="required"
                            >
                            </LocalSearch>
                        </div>
                        <div className='icon justify-content-center'>
                            <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "20px", color: "green" }} />
                        </div>
                        <div className="col-4 search-area mt-4">
                            <p style={{ width: "20px" }}>To</p>
                            <LocalSearch
                                value={toaddress}
                                onChange={(e) => ToAddress(e)}
                                onSelect={(e) => handleSelectDestination(e)}
                                searchOptions={options}
                                searchplaceholder="Enter city or airport"
                                name="To"
                                required="required"
                            >
                            </LocalSearch>
                        </div>
                        <div className='col-3 dateselection mt-4'>
                            <p>Departure</p>
                            <CustomDatePickers
                                maxDate={moment().format("PP")}
                                value={date}
                                Searchstyle="flight_searchdate"
                                selected={selectedDay}
                                onDayClick={handleDayClick}
                                required="required"
                                calanderstyle="flight_calander"
                            />
                        </div>
                        {
                            index ?
                                <div className='col-1 pt-3'>
                                    <button type="button" className="btn-close p-2 mt-4  ms-2 bg-danger" onClick={() => removeFormFields(index)} aria-label="Close" ></button>
                                </div>
                                : null
                        }
                        {view && index < 3 &&(
                            <div className='addflight col  mt-4 ms-4  '>
                                <button className='btn btn-primary mt-3' onClick={() => addFormFields()} >Add Another Flight</button>
                            </div>)}
                    </div>
                ))}
            </div>
            <div className='flightbutton'>
                <CustomButton customstyle='flightbtnsearch' onClick={() => handleSubmit()} value='SEARCH FLIGHTS'></CustomButton>
            </div>
        </>
    )
}
export default Multicity;

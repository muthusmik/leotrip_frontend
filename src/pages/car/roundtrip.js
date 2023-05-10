import React, { useState, useEffect, useRef } from "react";
import "./timepicker.css";
import './car.scss';
import { useHistory } from 'react-router-dom';
import CustomButton from "../../component/button";
import { useDispatch, useSelector, useStore } from "react-redux";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import LocalSearch from "../../component/autocomplete/localsearch";
import CustomDatePickers from "../../component/datepicker/singledatepicker"
import { format } from 'date-fns';
import TimePicker from "rc-time-picker";
import moment from "moment";
import { loadCarList } from '../../store/actions/car';
import switchicon from '../../asset/images/hotel/transfer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import AutoSuggest from "react-autosuggest";

const RoundTrip = () => {



    const [city, setCity] = useState([])

    const [errormsg, setErrormsg] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (pickupdate,returndate) => {
        if (fromaddress == '') {
            setErrormsg('Please Enter the Valid Location !');
        }
        else if (toaddress == '') {
            setErrormsg('Please Enter the Valid Location !');
        }
        else {
            setErrormsg('')
            const carlist = {
                "EndUserIp": "107.180.105.183",
                "ClientId": "180109",
                "UserName": "SKdigPa8",
                "Password": "A$JSkEf4#4",
                "FromCity": fromaddress_city_Id,
                "ToCity": toaddress_city_Id,
                "PickUpDate": moment(pickupdate).format("DD/MM/YYYY"),
                "DropDate": moment(returndate).format("DD/MM/YYYY"),
                "Hours": "0",
                "TripType": "1"
            }
            dispatch(loadCarList(carlist));
            history.push("/car/carlist-roundtrip" /* ,{state: {fromaddress,toaddress,selectedDay,time}} */)
            let localstores = [];
            localstores.push({ "from": from });
            localstores.push({ "to": to });
            localstores.push({ "pickup": pickupdate });
            localstores.push({ "pickuptime": time });
            localstores.push({ "triptype": "1" });
            localstores.push({ "drop": returndate });
            localstores.push({ "droptime": returntime });
            localStorage.setItem('carsearch', JSON.stringify(localstores));
            localStorage.setItem('triptypename', JSON.stringify("roundtrip"));

        }
    }


    const carcitylist = useSelector(state => state.carcitylist);

    /*  # Source */

    const [fromaddress, setFromaddress] = React.useState("");
    const [fromaddress_city_Id, setFromaddress_city_Id] = React.useState("")

    /* # Destination */
    const [toaddress, setToaddress] = React.useState("");
    const [toaddress_city_Id, setToaddress_city_Id] = React.useState("")

    /*  #swapping */

    const switchText = (from, to) => {
        console.log("swapping",to.suggestion.airport_city_name);
        handleSelection(to)
        handleSelectiondestination(from)
        setValueDes(from.suggestion.caoncitlst_city_name)
        setValueSrc(to.suggestion.caoncitlst_city_name);

    }



    /* # DatePicker(pickup) */

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


    /* # DatePicker(Return) */

    const today = new Date();

    const [returnselection, setReturnSelection] = useState(Date);
    const [returndate, setReturnDate] = useState('')

    const handleReturnDateClick = (day) => {
        setReturnDate(format(day, 'PP'))
        setReturnSelection(day)
    };
    useEffect(() => {
        // set current date on component load
        setReturnDate(moment(new Date()).add(1, 'day').format('MMM DD, yyyy'));
    }, [])


    /*  # Timepicker */
    const [time, setTime] = useState(moment());
    const handleSelect = (value) => {
        setTime(value);
    }


    /*  # TimePicker(return) */

    const [returntime, setReturnTime] = useState(moment(time).add(1, 'day'));

    const ReturnhandleSelect = (value) => {

        setReturnTime(value);
    }


    const refOne = useRef(null);
    const [open, setOpen] = useState()
    useEffect(() => {
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClickOutside, true)
    }, [])

    // hide dropdown on ESC press
    const hideOnEscape = (e) => {
        if (e.key === "Escape") {
            setOpen(false)
        }
    }

    // Hide on outside click
    const hideOnClickOutside = (e) => {
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false)
        }
    }

    useEffect(() => {
        setCity(carcitylist.data)
        console.log("iam star...", carcitylist)
    }, [carcitylist])


    const [valueSrc, setValueSrc] = useState("");
    const [valueDes, setValueDes] = useState("");
    // console.log("i am A1",valueSrc);
    // console.log("i am A2",valueDes);

    // console.log("i am A4",city)


    const [suggestions, setSuggestions] = useState([]);
    function getSuggestions(value) {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : city.filter(lang =>
            lang.caoncitlst_city_name.toLowerCase().slice(0, inputLength) === inputValue
        );
    }
    console.log("i am A3", suggestions);

    const [from,setFrom]=useState("")
    const handleSelection = (suggestionValue) => {
        setFrom(suggestionValue);
        setFromaddress(suggestionValue.suggestion.caoncitlst_city_name)
        setFromaddress_city_Id(suggestionValue.suggestion.caoncitlst_id)
    }
    const [to,setTo]=useState("")
    const handleSelectiondestination = (suggestionValue) => {
        setTo(suggestionValue);
        setToaddress(suggestionValue.suggestion.caoncitlst_city_name)
        setToaddress_city_Id(suggestionValue.suggestion.caoncitlst_id)
    }

    // const handleSelection = (suggestionValue) => {
    //     setFromaddress(suggestionValue.suggestion.caoncitlst_city_name)
    //     setFromaddress_city_Id(suggestionValue.suggestion.caoncitlst_id)
    // }

    // const handleSelectiondestination = (suggestionValue) => {
    //     setToaddress(suggestionValue.suggestion.caoncitlst_city_name)
    //     setToaddress_city_Id(suggestionValue.suggestion.caoncitlst_id)
    // }

    // console.log("uk",fromaddress)
    // console.log("tk",toaddress)
    // console.log("skk",fromaddress_city_Id)
    // console.log("ppkk",toaddress_city_Id)




    return (
        <div>
            {(fromaddress === '' || toaddress === '') ? <h6 className="font-weight-bold text-danger mt-2">{errormsg}</h6> : null}

            <div className='d-inline-flex  flightcontent mt-5 my-4'>
                <div>
                    <div className='roundcarsearchbox border-bottom border-2 mt-2'>

                        <p>From</p>
                        {/* <LocalSearch
                value={fromaddress}
                onChange={(e) => FromAddress(e)}
                onSelect={(e) => handleSelectSource(e)}
                searchOptions={options}
                searchplaceholder="Enter Pickup location"
                name="From"
                required="required"
            >
            </LocalSearch> */}
                        <div>
                            <AutoSuggest
                                suggestions={suggestions}
                                onSuggestionsFetchRequested={({ value }) => {
                                    setValueSrc(value);
                                    setSuggestions(getSuggestions(valueSrc));
                                }}
                                onSuggestionSelected={(_, suggestionValue) => { handleSelection(suggestionValue) }}

                                getSuggestionValue={suggestion => suggestion.caoncitlst_city_name}
                                renderSuggestion={suggestion => <span className="suggesstionList">{suggestion.caoncitlst_city_name}</span>}
                                inputProps={{
                                    placeholder: "Enter Pickup location",
                                    value: valueSrc,

                                    onChange: (_, { newValue, method }) => {
                                        setValueSrc(newValue);
                                        //    console.log("newValue",method)
                                    }
                                }}
                                highlightFirstSuggestion={true}
                            />
                        </div>
                    </div>
                </div>
                <div className='icon d-flex justify-content-center my-4 carRoundTrip_icon'>
                    <FontAwesomeIcon icon={faArrowRightArrowLeft} onClick={() => switchText(from, to)} style={{ fontSize: "20px", color: "green" }} />
                </div>
                <div className='roundcarsearchbox border-bottom border-2 mt-2'>
                    <p className="w-auto ">To</p>
                    {/* <LocalSearch
            value={toaddress}
            onChange={(e) => ToAddress(e)}
            onSelect={(e) => handleSelectDestination(e)}
            searchOptions={options}
            searchplaceholder="Enter Drop location"
            name="To"
            required="required"
        >
        </LocalSearch> */}
                    <div>
                        <AutoSuggest
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={({ value }) => {
                                setValueDes(value);
                                setSuggestions(getSuggestions(valueDes));

                            }}
                            onSuggestionSelected={(_, suggestionValue) => { handleSelectiondestination(suggestionValue) }}


                            getSuggestionValue={suggestion => suggestion.caoncitlst_city_name}
                            renderSuggestion={suggestion => <span className="suggesstionList">{suggestion.caoncitlst_city_name}</span>}
                            inputProps={{
                                placeholder: "Enter Drop location",
                                value: valueDes,

                                onChange: (_, { newValue, method }) => {
                                    setValueDes(newValue);
                                    //    console.log("newValue",method)
                                }
                            }}
                            highlightFirstSuggestion={true}
                        />
                    </div>
                </div>
                <div className='rounddateselections mt-2'>
                    <p>Pickup Date</p>
                    <CustomDatePickers
                        value={date}
                        Searchstyle="car_searchdate"
                        selected={selectedDay}
                        onDayClick={handleDayClick}
                        required="required"
                        calanderstyle="car_calander"
                    />
                </div>
                {/* <div className='rounddateselections mt-2'>
                    <p>Pickup Time</p>
                    <div classname="rc-time-picker-panel">
                        <TimePicker
                            use12Hours
                            value={time}
                            onChange={handleSelect}
                            focusOnOpen={true}
                            showSecond={false}
                            className="ms-3"
                        />
                    </div>
                </div> */}


                <div className='rounddateselections mt-2 me-5'>
                    <p>Return Date</p>
                    <CustomDatePickers
                        value={returndate}
                        Searchstyle="car_searchdate"
                        selected={returnselection}
                        onDayClick={handleReturnDateClick}
                        required="required"
                        calanderstyle="car_calander"
                    />
                </div>
                {/* <div className='rounddateselections mt-2'>
                    <p>Return Time</p>
                    <TimePicker
                        use12Hours
                        value={returntime}
                        onChange={ReturnhandleSelect}
                        focusOnOpen={true}
                        showSecond={false}
                        className="ms-3"
                    />
                </div> */}
            </div>
            <div className='carbutton'>
                <CustomButton customstyle='carbtnsearch' onClick={() => { handleSubmit(date,returndate) }} value='SEARCH CAR'></CustomButton>
            </div>
        </div>
    )
}
export default RoundTrip;
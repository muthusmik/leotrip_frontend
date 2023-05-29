import React, { useState, useEffect, useRef } from "react";
import "./timepicker.css";
import './car.scss';
import { useHistory } from 'react-router-dom';
import CustomButton from "../../component/button";
import { useDispatch, useSelector, useStore } from "react-redux";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import LocalSearch from "../../component/autocomplete/localsearch";
import MultiDatePickers from "../../component/datepicker/carmultidatepicker"
import { addDays, format } from 'date-fns';
import TimePicker from "rc-time-picker";
import moment from "moment";
import { loadCarList } from '../../store/actions/car';
import switchicon from '../../asset/images/hotel/transfer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import AutoSuggest from "react-autosuggest";

const RoundTrip = () => {

    const [city, setCity] = useState([])

    const [fromerrormsg, setFromErrormsg] = useState('');
    const [toerrormsg, setToErrormsg] = useState('');
    const [botherrormsg, setBothErrormsg] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();



    const handleSubmit = (pickupdate, returndate) => {
        if (fromaddress === '') {
            setFromErrormsg('Please Enter the Valid Location !');

        }
        else if (toaddress === '') {
            setToErrormsg('Please Enter the Valid Destination !');

        }
        else if ((fromaddress_city_Id === toaddress_city_Id) && (fromaddress === toaddress)) {
            setBothErrormsg('Source and Destination cannot be same');

        }
        else {
            setFromErrormsg('')
            setToErrormsg('')
            setBothErrormsg('')
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
            localstores.push({ "triptype": "1" });
            localstores.push({ "drop": returndate });
            localstores.push({ "hours": "0" });
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

        handleSelection(to)
        handleSelectiondestination(from)
        setValueDes(from.suggestion.caoncitlst_city_name)
        setValueSrc(to.suggestion.caoncitlst_city_name);

    }



    /* # DatePicker */

    const today = new Date();
    useEffect(() => {
        setPickupDate(moment(new Date()).add(1, 'day').format('MMM DD, yyyy'))
        setDropDate(moment(new Date()).add(2, 'day').format('MMM DD, yyyy'));
    }, [])


    const [selectedRange, setSelectedRange] = useState();
    const [pickupDate, setPickupDate] = useState('');
    const [dropDate, setDropDate] = useState('');



    const handleRangeSelect = (range) => {

        setSelectedRange(range);
        if (range?.from) {
            setPickupDate(format(range.from, 'MMM dd, yyyy'));
        }
        if (range?.to) {
            setDropDate(format(range.to, 'MMM dd, yyyy'));
        }

        // const pickup = new Date(pickupDate);
        // const drop = new Date(dropDate);
        // const timeDiff = Math.abs(drop.getTime() - pickup.getTime());
        // const hoursDiff = Math.ceil(timeDiff / (1000 * 60 * 60));
        // console.log("gjgjg",hoursDiff)
    };


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

    }, [carcitylist])


    const [valueSrc, setValueSrc] = useState("");
    const [valueDes, setValueDes] = useState("");


    const [suggestions, setSuggestions] = useState([]);
    function getSuggestions(value) {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : city.filter(lang =>
            lang.caoncitlst_city_name.toLowerCase().slice(0, inputLength) === inputValue
        );
    }

    const [from, setFrom] = useState("")
    const handleSelection = (suggestionValue) => {
        setFrom(suggestionValue);
        setFromaddress(suggestionValue.suggestion.caoncitlst_city_name)
        setFromaddress_city_Id(suggestionValue.suggestion.caoncitlst_id)
        setFromErrormsg('')
        setToErrormsg('')
        setBothErrormsg('')
    }
    const [to, setTo] = useState("")
    const handleSelectiondestination = (suggestionValue) => {
        setTo(suggestionValue);
        setToaddress(suggestionValue.suggestion.caoncitlst_city_name)
        setToaddress_city_Id(suggestionValue.suggestion.caoncitlst_id)
        setFromErrormsg('')
        setToErrormsg('')
        setBothErrormsg('')
    }

    // const handleSelection = (suggestionValue) => {
    //     setFromaddress(suggestionValue.suggestion.caoncitlst_city_name)
    //     setFromaddress_city_Id(suggestionValue.suggestion.caoncitlst_id)
    // }

    // const handleSelectiondestination = (suggestionValue) => {
    //     setToaddress(suggestionValue.suggestion.caoncitlst_city_name)
    //     setToaddress_city_Id(suggestionValue.suggestion.caoncitlst_id)
    // }






    return (
        <div>


            <div className='d-inline-flex flightcontent mt-5 my-4'>
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
                                    }
                                }}
                                highlightFirstSuggestion={true}
                            />
                        </div>
                    </div>
                    {(fromaddress === '') ? <h6 className="font-weight-bold text-danger mt-2">{fromerrormsg}</h6> : null}
                </div>
                <div className='icon d-flex justify-content-center my-4'>
                    <FontAwesomeIcon icon={faArrowRightArrowLeft} onClick={() => switchText(from, to)} style={{ fontSize: "20px", color: "green" }} />
                </div>
                <div className='roundcarsearchbox border-bottom border-2 mt-2'>
                    <p>To</p>
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
                                }
                            }}
                            highlightFirstSuggestion={true}
                        />
                    </div>
                    {(toaddress === '') ? <h6 className="font-weight-bold text-danger mt-2">{toerrormsg}</h6> : null}
                </div>
                <MultiDatePickers
                    checkInDate={pickupDate}
                    checkOutDate={dropDate}
                    Searchstyle="car_searchdate"
                    selected={selectedRange}
                    current={true}
                    onSelect={handleRangeSelect}
                    required="required"
                    calanderstyle="car_calander"
                />
            </div>
            <div className='text-center'>
                {(fromaddress_city_Id === toaddress_city_Id) ? <h6 className="font-weight-bold text-danger mt-2">{botherrormsg}</h6> : null}

            </div>
            <div className='carbutton'>
                <CustomButton customstyle='carbtnsearch' onClick={() => { handleSubmit(pickupDate, dropDate) }} value='SEARCH CAR'></CustomButton>
            </div>
        </div>
    )
}
export default RoundTrip;
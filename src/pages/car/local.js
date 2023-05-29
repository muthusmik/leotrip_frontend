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

const Local = () => {



    const [city, setCity] = useState([])

    const [fromerrormsg, setFromErrormsg] = useState('');
   

    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (pickup) => {
        if (fromaddress === '') {
            setFromErrormsg('Please Select the valid Location !');

        }
        else {
            setFromErrormsg('')
            const carlist = {
                "EndUserIp": "107.180.105.183",
                "ClientId": "180109",
                "UserName": "SKdigPa8",
                "Password": "A$JSkEf4#4",
                "FromCity": fromaddress_city_Id,
                "ToCity": fromaddress_city_Id,
                "PickUpDate": moment(pickup).format("DD/MM/YYYY"),
                "DropDate": moment(dropDate).format("DD/MM/YYYY"),
                "Hours":nohours,
                "TripType": "2"
            }
            dispatch(loadCarList(carlist));
            let localstores = [];
            localstores.push({ "from": from });
            localstores.push({ "to": from });
            localstores.push({ "pickup": pickup });
            localstores.push({ "triptype": "2" });
            localstores.push({ "drop": dropDate });
            localstores.push({ "hours":nohours});
            localStorage.setItem('carsearch', JSON.stringify(localstores));
            localStorage.setItem('triptypename', JSON.stringify("Local"));
            history.push("/car/carlist-local" /* ,{state: {fromaddress,toaddress,selectedDay,time}} */)
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

    // const switchText = (from, to) => {
    //     handleSelection(to)
    //     handleSelectiondestination(from)
    //     setValueDes(from.suggestion.caoncitlst_city_name)
    //     setValueSrc(to.suggestion.caoncitlst_city_name);

    // }



    /* # DatePicker */

    const [selectedDay, setSelectedDay] = useState(Date);
    const [date, setDate] = useState('')
    const [nodays,setDays] = useState(1);
    const [dropDate, setDropDate] = useState(moment(new Date()).add(nodays,'day').format('MMM DD, yyyy'));
    const handleDayClick = (day) => {
        setDate(format(day, 'PP'))
        setSelectedDay(day)
        setDropDate(moment(day).format('MMM DD, yyyy'));
    };
    useEffect(() => {
        // set current date on component load
        setDate(moment(new Date()).add(1, 'day').format('MMM DD, yyyy'))
    }, [])



    /*  # no of days */
    const [nohours, setNohours] = useState(8);
    
    
    const handleDays = (e) => {

        setDays(e.target.value)
        var totalhours = e.target.value*8
        setDropDate(moment(date).add(e.target.value-1,'day').format('MMM DD, yyyy'));
        setNohours(totalhours);

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
      
    }
    // const [to, setTo] = useState("")
    // const handleSelectiondestination = (suggestionValue) => {
    //     setTo(suggestionValue);
    //     setToaddress(suggestionValue.suggestion.caoncitlst_city_name)
    //     setToaddress_city_Id(suggestionValue.suggestion.caoncitlst_id)
    //     setFromErrormsg('')
    //     setToErrormsg('')
    //     setBothErrormsg('')
    // }




    return (
        <div>
            <div className='d-inline-flex content mt-5 my-4'>
                <div>
                    <div className='carsearchbox border-bottom border-2 mt-2'>

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
                {/* <div className='icon d-flex justify-content-center my-4'>
                    <FontAwesomeIcon icon={faArrowRightArrowLeft} onClick={() => switchText(from, to)} style={{ fontSize: "20px", color: "green" }} />
                </div>
                <div className='carsearchbox border-bottom border-2 mt-2'>
                    <p>To</p>
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
                </div> */}
                <div className='row mt-2'>
                    <div className='col-6 dateselections'>
                        <p>Pickup Date</p>
                        <CustomDatePickers
                            maxDate={moment().format("PP")}
                            value={date}
                            Searchstyle="car_searchdate"
                            selected={selectedDay}
                            onDayClick={handleDayClick}
                            current={true}
                            required="required"
                            calanderstyle="car_calander"
                        />
                    </div>
                    <div className='col-5 dateselections'>
                        <p>No Of Days<small className="text-danger">(8hrs/80kms)</small></p>
                        <select className="carlocal_nodays"  onChange={handleDays}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='carbutton'>
                <CustomButton customstyle='carbtnsearch' onClick={() => { handleSubmit(date) }} value='SEARCH CAR'></CustomButton>
            </div>
        </div >
    )
}
export default Local;
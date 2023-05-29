import React, { useState, useEffect, useRef } from "react";
import "./timepicker.css";
import './car.scss';
import { useHistory } from 'react-router-dom';
import CustomButton from "../../component/button";
import { useDispatch, useSelector, useStore } from "react-redux";
import CustomDatePickers from "../../component/datepicker/singledatepicker"
import { format } from 'date-fns';
import TimePicker from "rc-time-picker";
import { loadCarList } from '../../store/actions/car';
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import AutoSuggest from "react-autosuggest";


const OneWay = () => {


    const [city, setCity] = useState([])

    const [fromerrormsg, setFromErrormsg] = useState('');
    const [toerrormsg, setToErrormsg] = useState('');
    const [botherrormsg, setBothErrormsg] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (pickup) => {
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
                "PickUpDate": moment(pickup).format("DD/MM/YYYY"),
                "DropDate": moment(pickup).format("DD/MM/YYYY"),
                "Hours": "0",
                "TripType": "0"
            }
            dispatch(loadCarList(carlist));
            history.push("/car/carlistoneway")
            let localstores = [];
            localstores.push({ "from": from });
            localstores.push({ "to": to });
            localstores.push({ "pickup": pickup });
            localstores.push({ "triptype": "0" });
            localstores.push({ "drop": pickup });
            localstores.push({ "hours": "0" });
            localStorage.setItem('carsearch', JSON.stringify(localstores));
            localStorage.setItem('triptypename', JSON.stringify("oneway"));
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

    const [selectedDay, setSelectedDay] = useState(Date);
    const [date, setDate] = useState(moment(new Date()).add(1, 'day').format('MMM DD, yyyy'))

    const handleDayClick = (day) => {
        setDate(format(day, 'PP'))
        setSelectedDay(day)
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




    return (
        <div>
            <div className='d-inline-flex mt-5 my-4 mx-auto'>
                <div className="ms-5">
                    <div className='carsearchbox  mt-2'>
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
                        {(fromaddress === '') ? <h6 className="font-weight-bold text-danger mt-2">{fromerrormsg}</h6> : null}
                    </div>
                </div>
                <div className='icon d-flex justify-content-center my-4'>
                    <FontAwesomeIcon icon={faArrowRightArrowLeft} onClick={() => switchText(from, to)} style={{ fontSize: "20px", color: "green" }} />
                </div>
                <div className='carsearchbox  mt-2'>
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
                <div className='row mt-2'>
                    <div className='col-6 dateselections'>
                        <p>Pickup Date</p>
                        <CustomDatePickers
                            maxDate={moment().format("PP")}
                            value={date}
                            Searchstyle="car_searchdate"
                            selected={selectedDay}
                            current={true}
                            onDayClick={handleDayClick}
                            required="required"
                            calanderstyle="car_calander"
                        />
                    </div>
                    {/* <div className='col-5 dateselections'>
                            <p>Pickup Time</p>
                            <div classname="rc-time-picker-panel" ref={refOne}>
                                <TimePicker
                                    use12Hours
                                    value={time}
                                    focusOnOpen={true}
                                    onChange={handleSelect}
                                    showSecond={false}

                                />
                            </div>
                        </div> */}
                </div>
            </div>
            <div className='text-center'>
                {(fromaddress_city_Id === toaddress_city_Id) ? <h6 className="font-weight-bold text-danger mt-2">{botherrormsg}</h6> : null}
            </div>
            <div className='carbutton'>
                <CustomButton customstyle='carbtnsearch' onClick={() => { handleSubmit(date) }} value='SEARCH CAR'></CustomButton>
            </div>

        </div >
    )
}
export default OneWay;
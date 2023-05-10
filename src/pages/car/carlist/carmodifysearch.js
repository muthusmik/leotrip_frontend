import React, { useState, useEffect, useRef } from "react";
import "../timepicker.css";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector, useStore } from "react-redux";
import { Button, Row } from 'react-bootstrap';
import CustomDatePickers from "../../../component/datepicker/singledatepicker"
import { format } from 'date-fns';
import TimePicker from "rc-time-picker";
import { loadCarList } from '../../../store/actions/car';
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import AutoSuggest from "react-autosuggest";
import { useLocation } from "react-router-dom";


const CarModifySearch = () => {
    useEffect(() => {
        const Destination = JSON.parse(localStorage.getItem('carsearch'));
        console.log('Destination........', Destination[4].triptype);
        handleSelection(Destination[0].from)
        handleSelectiondestination(Destination[1].to)
        setTriptype(Destination[4].triptype);
    }, [])
    const location = useLocation()
    const Destination = JSON.parse(localStorage.getItem('carsearch'));
    console.log(location)


    const [city, setCity] = useState([])

    const [errormsg, setErrormsg] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (pickup) => {
        const carlist = {
            "EndUserIp": "107.180.105.183",
            "ClientId": "180109",
            "UserName": "SKdigPa8",
            "Password": "A$JSkEf4#4",
            "FromCity": fromaddress_city_Id,
            "ToCity": toaddress_city_Id,
            "PickUpDate": moment(date).format("DD/MM/YYYY"),
            "DropDate": moment(dropdate).format("DD/MM/YYYY"),
            "Hours": triptype,
            "TripType": Destination[4].triptype
        }
        dispatch(loadCarList(carlist));
        if (triptype === "0") {
            let localstores = [];
            localstores.push({ "from": from });
            localstores.push({ "to": to });
            localstores.push({ "pickup": pickup });
            localstores.push({ "pickuptime": time });
            localstores.push({ "triptype": "0" });
            localstores.push({ "drop": pickup });
            localstores.push({ "droptime": time });
            localStorage.setItem('carsearch', JSON.stringify(localstores));
            history.push("/car/carlistoneway")
        }
        else if (triptype === "1") {
            let localstores = [];
            localstores.push({ "from": from });
            localstores.push({ "to": to });
            localstores.push({ "pickup": pickup });
            localstores.push({ "pickuptime": time });
            localstores.push({ "triptype": "1" });
            localstores.push({ "drop": dropdate });
            localstores.push({ "droptime": returntime });
            localStorage.setItem('carsearch', JSON.stringify(localstores));
            history.push("/car/carlist-roundtrip")
        }
        else {
            let localstores = [];
            localstores.push({ "from": from });
            localstores.push({ "to": to });
            localstores.push({ "pickup": pickup });
            localstores.push({ "pickuptime": time });
            localstores.push({ "triptype": "2" });
            localstores.push({ "drop": pickup });
            localstores.push({ "droptime": time });
            localStorage.setItem('carsearch', JSON.stringify(localstores));
            history.push("/car/carlist-airporttransfer")
        }

    }

    const carcitylist = useSelector(state => state.carcitylist);

    // const store = useStore()
    // console.log(store.getState(), "hello")



    // useEffect(() => {
    //     console.log("khhhggn", carcitylist)
    // }, [carcitylist])

    console.log("i am current", carcitylist)

    /*  # Source */

    const [fromaddress, setFromaddress] = React.useState(Destination[0].from.suggestion.caoncitlst_city_name);
    const [fromaddress_city_Id, setFromaddress_city_Id] = React.useState(Destination[0].from.suggestion.caoncitlst_id)

    /* # Destination */
    const [toaddress, setToaddress] = React.useState(Destination[1].to.suggestion.caoncitlst_city_name);
    const [toaddress_city_Id, setToaddress_city_Id] = React.useState(Destination[1].to.suggestion.caoncitlst_id)



    /*  #swapping */

    const switchText = (from, to) => {
        console.log("swapping", to.suggestion.caoncitlst_city_name);
        handleSelection(to)
        handleSelectiondestination(from)
        setValueDes(from.suggestion.caoncitlst_city_name)
        setValueSrc(to.suggestion.caoncitlst_city_name);

    }

    /* # DatePicker */

    const [selectedDay, setSelectedDay] = useState(Destination[2].pickup);
    const [date, setDate] = useState(Destination[2].pickup)
    const [selectedDropDay, setSelectedDropDay] = useState(Destination[5].drop);
    const [dropdate, setDropDate] = useState(Destination[5].drop);



    const handleDayClick = (day) => {
        setDate(format(day, 'PP'))
        setSelectedDay(day)
    };
    useEffect(() => {
        setDate(Destination[2].pickup)
    }, [])
    console.log("Destination", date)

    const handleDropDayClick = (day) => {
        setDropDate(format(day, 'PP'))
        setSelectedDropDay(day)
    };
    useEffect(() => {
        setDropDate(Destination[5].drop)
    }, [])
    console.log("Destination", date)

    /*  # Timepicker */
    const [time, setTime] = useState(moment(Destination[3].pickuptime));
    const [returntime, setReturnTime] = useState(moment(Destination[6].droptime));

    const handleSelect = (value) => {
        setTime(value);
    }
    const handleReturnSelect = (value) => {
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



    const [valueSrc, setValueSrc] = useState(Destination[0].from.suggestion.caoncitlst_city_name);
    const [valueDes, setValueDes] = useState(Destination[1].to.suggestion.caoncitlst_city_name);
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
    const [from, setFrom] = useState(Destination[0].from)
    const handleSelection = (suggestionValue) => {
        setFrom(suggestionValue);
        setFromaddress(suggestionValue.suggestion.caoncitlst_city_name)
        setFromaddress_city_Id(suggestionValue.suggestion.caoncitlst_id)
    }
    const [to, setTo] = useState(Destination[1].to)
    const handleSelectiondestination = (suggestionValue) => {
        setTo(suggestionValue);
        setToaddress(suggestionValue.suggestion.caoncitlst_city_name)
        setToaddress_city_Id(suggestionValue.suggestion.caoncitlst_id)
    }

    console.log("uk", fromaddress)
    console.log("tk", toaddress)
    console.log("skk", fromaddress_city_Id)
    console.log("ppkk", toaddress_city_Id)

    const [triptype, setTriptype] = React.useState(Destination[4].triptype);

    const onhandle = e => {
        setTriptype(e.target.value);
    };
    console.log("onhandle", triptype)
    return (
        <div className='modifycarsearch_header'>
            <div className={(triptype === "1") ? (" modifyroundcarsearch mt-2 mx-auto") : ("container modifycarsearch mt-2")}>

                <Row >
                    <div className='mt-3' >
                        <div className="form-check form-check-inline">
                            <input className="check-input" type="radio" name="triptypes" id="oneway" value="0" onClick={onhandle} defaultChecked={triptype === "0"} />
                            <label className="check-label" htmlFor="oneway">One Way</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="check-input" type="radio" name="triptypes" id="roundtrip" value="1" onClick={onhandle} defaultChecked={triptype === "1"} />
                            <label className="check-label" htmlFor="round-trip">Round-trip</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="check-input" type="radio" name="triptypes" id="airport" value="2" onClick={onhandle} defaultChecked={triptype === "2"} />
                            <label className="check-label" htmlFor="round-trip">Airport Transfer</label>
                        </div>
                    </div>
                </Row>
                <Row >
                    <div className='col-lg-row mt-3 my-3 mx-auto'>
                        <div className='col-lg-3'>
                            <div className={(triptype === "1") ? ("modifyroundcarsearchbox mt-2") : ("modifycarsearchbox mt-2")}>
                                <p>From</p>
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
                        <div className="col-lg-3">
                            <div className='icon d-flex justify-content-center my-3' >
                                <FontAwesomeIcon icon={faArrowRightArrowLeft} onClick={() => switchText(from, to)} style={{ fontSize: "20px", color: "green" }} />
                            </div>
                        </div>
                        <div className='col-lg-3' >
                            <div className={(triptype === "1") ? ("modifyroundcarsearchbox mt-2") : ("modifycarsearchbox mt-2")}>
                                <p>To</p>
                                <div  >
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
                        </div>
                        {triptype !== "1" ? (<div className='row mt-2'>
                            <div className='col-lg-3 modifydateselections'>
                                <p>Pickup Date</p>
                                <CustomDatePickers
                                    maxDate={moment().format("PP")}
                                    value={date}
                                    Searchstyle="car_searchdate"
                                    selected={selectedDay}
                                    onDayClick={handleDayClick}
                                    required="required"
                                    calanderstyle="car_calander"
                                />
                            </div>
                            {/* <div className='col-5 modifydateselections'>
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

                        </div>) : (
                            <div className='row mt-2'>
                                <div className='col modifyrounddateselections'>
                                    <p>Pickup Date</p>
                                    <CustomDatePickers
                                        maxDate={moment().format("PP")}
                                        value={date}
                                        Searchstyle="carroundbutton"
                                        selected={selectedDay}
                                        onDayClick={handleDayClick}
                                        required="required"
                                        calanderstyle="car_calander"
                                    />
                                </div>
                                {/* <div className='col modifyrounddateselections'>
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
                                <div className='col modifyrounddateselections'>
                                    <p>Return Date</p>
                                    <CustomDatePickers
                                        maxDate={moment().format("PP")}
                                        value={dropdate}
                                        Searchstyle="carroundbutton"
                                        selected={selectedDropDay}
                                        onDayClick={handleDropDayClick}
                                        required="required"
                                        calanderstyle="car_calander"
                                    />
                                </div>
                                {/* <div className='col modifyrounddateselections'>
                                    <p>Return Time</p>
                                    <div classname="rc-time-picker-panel" ref={refOne}>
                                        <TimePicker
                                            use12Hours
                                            value={returntime}
                                            focusOnOpen={true}
                                            onChange={handleReturnSelect}
                                            showSecond={false}

                                        />
                                    </div>
                                </div> */}
                            </div>)}
                        <div className={(triptype === "1") ? ("modifyroundcarbutton ms-4 mt-2") : ("modifycarbutton ms-4  mt-2")}>
                            <Button onClick={() => { handleSubmit(date) }}>Update Modify</Button>
                        </div>
                    </div>
                </Row>
            </div>
        </div >
    )


};
export default CarModifySearch;
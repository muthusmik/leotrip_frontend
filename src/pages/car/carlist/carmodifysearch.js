import React, { useState, useEffect, useRef } from "react";
import "../timepicker.css";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector, useStore } from "react-redux";
import { Button, Row } from 'react-bootstrap';
import MultiDatePickers from "../../../component/datepicker/carmultidatepicker"
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
        handleSelection(Destination[0].from)
        handleSelectiondestination(Destination[1].to)
        setTriptype(Destination[3].triptype);
    }, [])
    const location = useLocation()
    const Destination = JSON.parse(localStorage.getItem('carsearch'));
    console.log("fjfjfj", Destination)


    const [city, setCity] = useState([])

    const [fromerrormsg, setFromErrormsg] = useState('');
    const [toerrormsg, setToErrormsg] = useState('');
    const [botherrormsg, setBothErrormsg] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (pickupdate, returndate) => {

        console.log("hgdhg", pickupdate, ".....", returndate)
        if (fromaddress === '') {
            setFromErrormsg('Please Select the Valid Location !');

        }
        else if (toaddress === '') {
            setToErrormsg('Please Select the Valid Destination !');

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
                "TripType": triptype
            }
            dispatch(loadCarList(carlist));
            if (triptype === "0") {
                let localstores = [];
                localstores.push({ "from": from });
                localstores.push({ "to": to });
                localstores.push({ "pickup": pickupdate });
                localstores.push({ "triptype": "0" });
                localstores.push({ "drop": returndate });
                localstores.push({ "hours": "0" });
                localStorage.setItem('carsearch', JSON.stringify(localstores));
                localStorage.setItem('triptypename', JSON.stringify("oneway"));
                history.push("/car/carlistoneway")
            }
            else {
                let localstores = [];
                localstores.push({ "from": from });
                localstores.push({ "to": to });
                localstores.push({ "pickup": pickupdate });
                localstores.push({ "triptype": "1" });
                localstores.push({ "drop": returndate});
                localstores.push({ "hours": "0" });
                localStorage.setItem('carsearch', JSON.stringify(localstores));
                localStorage.setItem('triptypename', JSON.stringify("roundtrip"));
                history.push("/car/carlist-roundtrip")
            }
        }

    }

    const handlelocalSubmit = (datevalue) => {
        if (fromaddress === '') {
            setFromErrormsg('Please Select the Valid Location !');
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
                "PickUpDate": moment(datevalue).format("DD/MM/YYYY"),
                "DropDate": moment(localdropdate).format("DD/MM/YYYY"),
                "Hours": nohours,
                "TripType": triptype
            }
            dispatch(loadCarList(carlist));
            let localstores = [];
            localstores.push({ "from": from });
            localstores.push({ "to": from });
            localstores.push({ "pickup": datevalue });
            localstores.push({ "triptype": "2" });
            localstores.push({ "drop": localdropdate });
            localstores.push({ "hours":nohours});
            localStorage.setItem('carsearch', JSON.stringify(localstores));
            localStorage.setItem('triptypename', JSON.stringify("Local"));
            history.push("/car/carlist-local")
        }
    }

    const carcitylist = useSelector(state => state.carcitylist);




    /*  # Source */

    const [fromaddress, setFromaddress] = React.useState(Destination[0].from.suggestion.caoncitlst_city_name);
    const [fromaddress_city_Id, setFromaddress_city_Id] = React.useState(Destination[0].from.suggestion.caoncitlst_id)

    /* # Destination */
    const [toaddress, setToaddress] = React.useState(Destination[1].to.suggestion.caoncitlst_city_name);
    const [toaddress_city_Id, setToaddress_city_Id] = React.useState(Destination[1].to.suggestion.caoncitlst_id)



    /*  #swapping */

    const switchText = (from, to) => {
        handleSelection(to)
        handleSelectiondestination(from)
        setValueDes(from.suggestion.caoncitlst_city_name)
        setValueSrc(to.suggestion.caoncitlst_city_name);
    }

    /* # DatePicker */

    const [selectedDay, setSelectedDay] = useState(Destination[2].pickup);
    const [date, setDate] = useState(Destination[2].pickup)
    const [selectedDropDay, setSelectedDropDay] = useState(Destination[4].drop);
    const [dropdate, setDropDate] = useState(Destination[4].drop);



    const handleDayClick = (day) => {
        setDate(format(day, 'PP'))
        setSelectedDay(day)
    };
    useEffect(() => {
        setDate(Destination[2].pickup)
    }, [])

    console.log("mmml",date)

    const handleDropDayClick = (day) => {
        setDropDate(format(day, 'PP'))
        setSelectedDropDay(day)
    };
    useEffect(() => {
        setDropDate(Destination[4].drop)
    }, [])


    const [selectedRange, setSelectedRange] = useState();
    const [pickupDate, setPickupDate] = useState(Destination[2].pickup);
    const [rdropDate, setRDropDate] = useState(Destination[4].drop);
    const [nodays, setDays] = useState(1);
    const [nohours, setNohours] = useState(8);
    const [localdropdate,setLocaldropdate] =useState(Destination[4].drop);
    const handleDays = (e) => {
        console.log("kk", e.target.value)
        setDays(e.target.value)
        var totalhours = e.target.value * 8
        setLocaldropdate(moment(date).add(e.target.value - 1, 'day').format('MMM DD, yyyy'));
        setNohours(totalhours);
    }


    console.log("ttt", rdropDate)


    const handleRangeSelect = (range) => {

        setSelectedRange(range);
        if (range?.from) {
            setPickupDate(format(range.from, 'MMM dd, yyyy'));
        }
        if (range?.to) {
            setRDropDate(format(range.to, 'MMM dd, yyyy'));
        }
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



    const [valueSrc, setValueSrc] = useState(Destination[0].from.suggestion.caoncitlst_city_name);
    const [valueDes, setValueDes] = useState(Destination[1].to.suggestion.caoncitlst_city_name);



    const [suggestions, setSuggestions] = useState([]);
    function getSuggestions(value) {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : city.filter(lang =>
            lang.caoncitlst_city_name.toLowerCase().slice(0, inputLength) === inputValue
        );
    }

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


    const [triptype, setTriptype] = React.useState(Destination[3].triptype);

    const onhandle = e => {
        setTriptype(e.target.value);
    };

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
                            <input className="check-input" type="radio" name="triptypes" id="local" value="2" onClick={onhandle} defaultChecked={triptype === "2"} />
                            <label className="check-label" htmlFor="local">Local</label>
                        </div>
                    </div>
                </Row>
                {(triptype === "2") ? (
                    <Row>
                        <div className="d-inline-flex mt-3 my-3 mx-auto">
                            <div>
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
                                                }
                                            }}
                                            highlightFirstSuggestion={true}
                                        />
                                    </div>
                                </div>
                                {(fromaddress === '') ? <h6 className="font-weight-bold text-danger mt-2">{fromerrormsg}</h6> : null}
                            </div>
                            <div className='mt-2'>
                                <div className='modifydateselections'>
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
                            </div>
                            <div>
                                <div className='modifydateselections mt-2'>
                                <p>No Of Days<small className="text-danger">(8hrs/80kms)</small></p>
                                    <select className="modifysearchcarlocal_nodays" onChange={handleDays}>
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
                            <div>
                                <div className={(triptype === "1") ? ("modifyroundcarbutton ms-4 mt-2") : ("modifycarbutton ms-4  mt-2")}>
                                    <Button className="btn-md mb-3 me-3" onClick={() => { handlelocalSubmit(date) }}>Modify Search</Button>
                                </div>
                            </div>
                        </div>
                    </Row>
                ) :
                    <Row>
                        <div className='d-inline-flex mt-3 my-3 mx-auto'>
                            <div>
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
                                                }
                                            }}
                                            highlightFirstSuggestion={true}
                                        />
                                    </div>
                                </div>
                                {(fromaddress === '') ? <h6 className="font-weight-bold text-danger mt-2">{fromerrormsg}</h6> : null}
                            </div>
                            <div className='icon d-flex justify-content-center my-3'>
                                <FontAwesomeIcon icon={faArrowRightArrowLeft} onClick={() => switchText(from, to)} style={{ fontSize: "20px", color: "green" }} />
                            </div>
                            <div className={(triptype === "1") ? ("modifyroundcarsearchbox mt-2") : ("modifycarsearchbox mt-2")}>
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
                            </div>
                            {
                                triptype !== "1" ? (<div className='row mt-2'>
                                    <div className='col-6 modifydateselections'>
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
                                </div>) : (
                                    <MultiDatePickers
                                        checkInDate={pickupDate}
                                        checkOutDate={rdropDate}
                                        Searchstyle="car_searchdate"
                                        selected={selectedRange}
                                        current={true}
                                        onSelect={handleRangeSelect}
                                        required="required"
                                        calanderstyle="car_calander"
                                    />
                                )
                            }
                            {(triptype !== "1") ? (
                                <div className={(triptype === "1") ? ("modifyroundcarbutton ms-4 mt-2") : ("modifycarbutton ms-4  mt-2")}>
                                    <Button className="btn-md mb-3 me-3" onClick={() => { handleSubmit(date, date) }}>Modify Search</Button>
                                </div>
                            ) :
                                <div className={(triptype === "1") ? ("modifyroundcarbutton ms-4 mt-2") : ("modifycarbutton ms-4  mt-2")}>
                                    <Button className="btn-md mb-3 me-3" onClick={() => { handleSubmit(pickupDate, rdropDate) }}>Modify Search</Button>
                                </div>
                            }
                        </div >
                    </Row >
                }
                <div className='text-center'>
                    {(fromaddress_city_Id === toaddress_city_Id) ? <h6 className="font-weight-bold text-danger mt-2">{botherrormsg}</h6> : null}
                </div>
            </div >
        </div >
    )


};
export default CarModifySearch;
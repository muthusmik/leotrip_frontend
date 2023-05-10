import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CustomDatePickers from "../../../component/datepicker/singledatepicker"
import moment from "moment";
import CustomButton from '../../../component/button';
import { loadFlightList } from "../../../store/actions/flightsearch"
import { useDispatch, useSelector } from "react-redux";
import AutoSuggest from "react-autosuggest";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button, Modal, Row } from 'react-bootstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import MultiDatePickers from '../../../component/datepicker/modifysearchmulti';
import { addDays, format } from 'date-fns';



const FlightModifySearch = () => {

    const [airportcity, setAirportcity] = useState()
    const dispatch = useDispatch();
    const airportcitylist = useSelector(state => state.AirportCityList);
    useEffect(() => {
        setAirportcity(airportcitylist.data)
    }, [airportcitylist])


    useEffect(() => {
        const AirlineData = JSON.parse(localStorage.getItem('travelDetails'));
        const SourceData = JSON.parse(localStorage.getItem('sourcedata'));
        const DestinationData = JSON.parse(localStorage.getItem('destinationdata'));
        const triptype = JSON.parse(localStorage.getItem('triptype'));
        handleSelection(SourceData)
        handleSelectiondestination(DestinationData)
    }, [])
    const triptypes = JSON.parse(localStorage.getItem('triptype'));

    const handleSubmit = () => {

        if (fromaddress == '') {
            setErrormsg('Please Enter the Valid Location !');
        }
        else if (toaddress == '') {
            setErrormsg('Please Enter the Valid Location !');
        }
        else if ((fromaddress.suggestion.airport_code).localeCompare(toaddress.suggestion.airport_code) === 0) {
            setErrormsg('Source and Destination cannot be same');
        }
        else {
            setErrormsg('')

            var segment = [];
            if (journey === "1") {
                let localstores = [];
                localstores.push({ "Source_code": fromaddress.suggestion?.airport_code });
                localstores.push({ "Source": valueDes });
                localstores.push({ "Destination_code": toaddress.suggestion?.airport_code });
                localstores.push({ "Destination": destinationdata });
                localstores.push({ "Travelclass": triptype.className });
                localstores.push({ "Departure": moment(selectedDay).format("MMM DD YYYY") });
                localstores.push({ "Travellers": options });
                localstores.push({ "JourneyType": journey })
                localstores.push({ "Return": moment(selectedDay).format("MMM DD YYYY") });
                localStorage.setItem('travelDetails', JSON.stringify(localstores));
                localStorage.setItem('sourcedata', JSON.stringify(fromaddress));
                localStorage.setItem('destinationdata', JSON.stringify(toaddress));
                localStorage.setItem('triptype', JSON.stringify(triptype));
                segment = [{
                    "Origin": fromaddress.suggestion?.airport_code,
                    "Destination": toaddress.suggestion?.airport_code,
                    "FlightCabinClass": triptype.id,
                    "PreferredDepartureTime": moment(selectedDay).format("YYYY-MM-DDT00:00:00"),
                    "PreferredArrivalTime": moment(selectedDay).format("YYYY-MM-DDT00:00:00")
                }]
                history.push("/flight/flightlist-oneway", { state: options })
            }
            else {
                let localstores = [];
                localstores.push({ "Source_code": fromaddress.suggestion?.airport_code });
                localstores.push({ "Source": valueDes });
                localstores.push({ "Destination_code": toaddress.suggestion?.airport_code });
                localstores.push({ "Destination": destinationdata });
                localstores.push({ "Travelclass": triptype.className });
                localstores.push({ "Departure": moment(selectedDay).format("MMM DD YYYY") });
                localstores.push({ "Travellers": options });
                localstores.push({ "JourneyType": journey })
                localstores.push({ "Return": moment(returnselection).format("MMM DD YYYY") });
                localStorage.setItem('travelDetails', JSON.stringify(localstores));
                localStorage.setItem('sourcedata', JSON.stringify(fromaddress));
                localStorage.setItem('destinationdata', JSON.stringify(toaddress));
                localStorage.setItem('triptype', JSON.stringify(triptype));
                segment = [{
                    "Origin": fromaddress.suggestion?.airport_code,
                    "Destination": toaddress.suggestion?.airport_code,
                    "FlightCabinClass": triptype.id,
                    "PreferredDepartureTime": moment(selectedDay).format("YYYY-MM-DDT00:00:00"),
                    "PreferredArrivalTime": moment(selectedDay).format("YYYY-MM-DDT00:00:00")
                },
                {
                    "Origin": toaddress.suggestion?.airport_code,
                    "Destination": fromaddress.suggestion?.airport_code,
                    "FlightCabinClass": triptype.id,
                    "PreferredDepartureTime": moment(returnselection).format("YYYY-MM-DDT00:00:00"),
                    "PreferredArrivalTime": moment(returnselection).format("YYYY-MM-DDT00:00:00")
                }]
                history.push("/flight/flightlist-roundtrip", { state: options })

            }
            const flightSearchList = {
                "EndUserIp": "107.180.105.183",
                "ClientId": "180109",
                "UserName": "SKdigPa8",
                "Password": "A$JSkEf4#4",
                "AdultCount": options.adult,
                "ChildCount": options.children,
                "InfantCount": options.Infants,
                "JourneyType": journey,
                "Sources": null,
                "Segments": segment,
            }
            dispatch(loadFlightList(flightSearchList));
            console.log("segment", flightSearchList)

        }

    }



    /*  # Source */
    const [fromaddress, setFromaddress] = useState("");
    /* # Destination */
    const [toaddress, setToaddress] = React.useState("");
    /*  #swapping */
    const switchText = (from, to) => {
        console.log("swapping", to.suggestion.airport_city_name);
        handleSelection(to)
        handleSelectiondestination(from)
        setValueDes(to.suggestion.airport_city_name)
        setDestinationdata(from.suggestion.airport_city_name);

        // setValueDes(from)

    }
    /* # DatePicker */
    const [selectedDay, setSelectedDay] = useState();
    const [date, setDate] = useState(moment(new Date()).format('DD-MM-YYYY'))
    const handleDayClick = (day) => {
        setDate(format(day, 'PP'))
        setSelectedDay(day)
        setReturnDate(moment(day).add(1, 'day').format('MMM DD, yyyy'), 'PP')
        setReturnSelection(moment(day).add(1, 'day').format('MMM DD, yyyy'))
    };
    useEffect(() => {
        // set current date on component load
        const routeDate = new Date(AirlineData[5].Departure)
        //console.log(new Date(AirlineData[5].Departure), "Date routed")
        setDate(moment(routeDate).format('MMM DD,YYYY'));
        setSelectedDay(routeDate);
    }, [])

    console.log("zoo", date, "SKKK", selectedDay)

    /*  # AutoSuggest */
    const AirlineData = JSON.parse(localStorage.getItem('travelDetails'));
    console.log(AirlineData, ".............airline")
    const [destinationdata, setDestinationdata] = useState(AirlineData[3].Destination);
    const [valueDes, setValueDes] = useState(AirlineData[1].Source);
    const [suggestions, setSuggestions] = useState([]);

    function getSuggestions(value) {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        return inputLength === 0 ? [] : airportcity.filter(lang =>
            lang.airport_city_name.toLowerCase().slice(0, inputLength) === inputValue
        );
    }

    const handleSelection = (suggestionValue) => {
        console.log(suggestionValue, "from address")
        setFromaddress(suggestionValue)
        //const sourcedata =valueDes+"("+fromaddress.suggestion?.airport_code+")"
    }

    const handleSelectiondestination = (suggestionValue) => {
        console.log(suggestionValue, "to address")
        setToaddress(suggestionValue)
        //const sourcedata =valueDes+"("+fromaddress.suggestion?.airport_code+")"
    }
    const history = useHistory();

    /* #traveloption */

    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState(
        AirlineData[6].Travellers
    );
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };
    const [triptype, setTriptype] = useState(triptypes);

    const handleChange = (value) => {
        switch (value) {
            case "Economy":
                {
                    setTriptype({ className: "Economy", id: 2 });
                }
                break;
            case "Business":
                {
                    setTriptype({ className: "Business", id: 4 });
                }
                break;
            case "FirstClass":
                {
                    setTriptype({ className: "FirstClass", id: 6 });
                }
                break;
            case "AllClass":
                {
                    setTriptype({ className: "AllClass", id: 1 });
                }
                break;
            default:
                return "AllClass";
        }
    }


    const refOne = useRef(null);

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

    const [returnselection, setReturnSelection] = useState(AirlineData[8].Return);
    const [returndate, setReturnDate] = useState(AirlineData[8].Return)
    const today = new Date();
    const defaultSelected = {
        from: today,
        to: addDays(today, 1)
    };
    const [selectedRange, setSelectedRange] = useState(defaultSelected);
    const handleRangeSelect = (range) => {

        setSelectedRange(range);
        if (range?.from) {
            setDate(format(range.from, 'MMM dd, yyyy'));
            setSelectedDay(moment(range.from).format('MMM DD, yyyy'))
        }
        if (range?.to) {
            setReturnDate(format(range.to, 'MMM dd, yyyy'));
            setReturnSelection(moment(range.to).format('MMM DD, yyyy'))
        }
    };

    const [errormsg, setErrormsg] = useState('');

    const [journey, setJourney] = useState(AirlineData[7].JourneyType)
    const onhandle = e => {
        setJourney(e.target.value);
    };
    console.log("make prefect", journey)


    return (
        <div className='flightmodifysearch_header'>
            <div className='container flight-modifysearch bg-white pb-2'>
                <Row >
                    <div className='mt-3'>
                        <div className="form-check form-check-inline">
                            <input className="check-input" type="radio" name="triptype" value="1" onClick={onhandle} defaultChecked={journey == "1"} />
                            <label className="check-label" htmlFor="oneway">One Way</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="check-input" type="radio" name="triptype" value="2" onClick={onhandle} defaultChecked={journey == "2"} />
                            <label className="check-label" htmlFor="round-trip">Round-trip</label>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className='d-inline-flex content'>
                        <div>
                            <div className="modifyflightsearch-area mt-4 listmodifyflightsearch-area">
                                <p className='w-auto bg-white'>From</p>
                                <AutoSuggest
                                    suggestions={suggestions}
                                    onSuggestionsFetchRequested={({ value }) => {
                                        setValueDes(value);
                                        // console.log("I am selected in ...............................",value)
                                        setSuggestions(getSuggestions(valueDes));
                                    }}
                                    onSuggestionSelected={(_, suggestionValue) => { handleSelection(suggestionValue) }}
                                    getSuggestionValue={suggestion => suggestion.airport_city_name}
                                    renderSuggestion={suggestion => <span className="suggesstionList">{suggestion.airport_city_name} ({suggestion.airport_name})</span>}
                                    inputProps={{
                                        placeholder: "Enter city or airport",
                                        value: valueDes,

                                        onChange: (_, { newValue, method }) => {
                                            setValueDes(newValue);
                                            //    console.log("newValue",newValue)
                                        }
                                    }}
                                    highlightFirstSuggestion={true}
                                />
                            </div>
                        </div>
                        <div className='modifyicon  justify-content-center my-auto'>
                            <FontAwesomeIcon icon={faArrowRightArrowLeft} onClick={() => switchText(fromaddress, toaddress)} style={{ fontSize: "14px", color: "green" }} />
                        </div>
                        <div className="modifyflightsearch-area mt-4 listmodifyflightsearch-area">
                            <p className='w-auto bg-white'>To</p>
                            <AutoSuggest
                                suggestions={suggestions}

                                onSuggestionsFetchRequested={({ value }) => {
                                    setDestinationdata(value);
                                    // console.log("I am selected in ...............................",value)
                                    setSuggestions(getSuggestions(destinationdata));
                                }}
                                onSuggestionSelected={(_, suggestionValue) => { handleSelectiondestination(suggestionValue) }}
                                getSuggestionValue={suggestion => suggestion.airport_city_name}
                                renderSuggestion={suggestion => <span className="suggesstionList">{suggestion.airport_city_name} ({suggestion.airport_name})</span>}
                                inputProps={{
                                    placeholder: "Enter city or airport",
                                    value: destinationdata,

                                    onChange: (_, { newValue, method }) => {
                                        setDestinationdata(newValue);
                                        //    console.log("newValue",newValue)
                                    }
                                }}
                                highlightFirstSuggestion={true}
                            />
                        </div>
                        {journey === "1" ? (
                            <div className='modifydateselection mt-4 listmodifydateselection'>
                                <p className='w-auto bg-white'>Departure</p>
                                <CustomDatePickers
                                    maxDate={moment().format("PP")}
                                    value={date}
                                    Searchstyle="modifyflight_searchdate"
                                    selected={selectedDay}
                                    onDayClick={handleDayClick}
                                    required="required"
                                    calanderstyle="flight_calander"
                                />
                            </div>
                        ) : (
                            <MultiDatePickers
                                departure={date}
                                returndate={returndate}
                                Searchstyle="modifyflight_searchdate mx-auto mt-2"
                                selected={selectedRange}
                                onSelect={handleRangeSelect}
                                required="required"
                                calanderstyle="flight_calander"
                            />
                            // <div className='modifydateselection mt-4'>
                            //     <p>Return</p>
                            //     <CustomDatePickers
                            //         value={returndate}
                            //         previous={selectedDay}
                            //         Searchstyle="modifyflight_searchdate"
                            //         selected={returnselection}
                            //         onDayClick={handleReturnDateClick}
                            //         required="required"
                            //         calanderstyle="flight_calander"
                            //     />
                            // </div>
                        )}
                        <div className='modifytraveloption mt-4 bg-white'>
                            <p>Travellers & Class</p>
                            <div className="headerSearchItem">
                                <div
                                    onClick={() => setOpen(true)}
                                    className="w-100 text-center " >
                                    <span className="modifyheaderSearchText">&nbsp;&nbsp;&nbsp;{`${options.adult} adult · ${options.children} children · ${options.Infants} Infants Travel Class: ${triptype.className}`}</span>
                                </div>
                                {open && (
                                    <Card className="travelmenucard" style={{ position: 'relative', zIndex: '1' }} ref={refOne}>
                                        <Card.Body >
                                            <div className="row text-center ">
                                                <div className="col-3 mx-auto">
                                                    <h5>Adult</h5>
                                                    <h6>(Aged 12+ yrs)</h6>
                                                    <InputGroup className="mx-auto w-75">
                                                        <Button size="sm" variant="outline-primary" disabled={options.adult <= 1} onClick={() => handleOption("adult", "d")}>
                                                            <FontAwesomeIcon icon={faMinus} />
                                                        </Button>
                                                        <Form.Control size="sm" type="text" value={options.adult} className="text-center" />
                                                        <Button size="sm" variant="outline-primary" disabled={options.adult >= 10} onClick={() => handleOption("adult", "i")}>
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </Button>
                                                    </InputGroup>
                                                </div>
                                                <div className="col-3 mx-auto">
                                                    <h5>Children</h5>
                                                    <h6>(Aged 2-12 yrs)</h6>
                                                    <InputGroup className="mx-auto w-75">
                                                        <Button size="sm" variant="outline-primary" disabled={options.children <= 0} onClick={() => handleOption("children", "d")}>
                                                            <FontAwesomeIcon icon={faMinus} />
                                                        </Button>
                                                        <Form.Control size="sm" type="text" value={options.children} className="text-center" />
                                                        <Button size="sm" variant="outline-primary" disabled={options.children >= 9} onClick={() => handleOption("children", "i")}>
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </Button>
                                                    </InputGroup>
                                                </div>
                                                <div className="col-3 mx-auto">
                                                    <h5>Infants</h5>
                                                    <h6>(Below 2 yrs)</h6>
                                                    <InputGroup className="mx-auto w-75">
                                                        <Button size="sm" variant="outline-primary" disabled={options.Infants <= 0} onClick={() => handleOption("Infants", "d")}>
                                                            <FontAwesomeIcon icon={faMinus} />
                                                        </Button>
                                                        <Form.Control size="sm" type="text" value={options.Infants} className="text-center" />
                                                        <Button size="sm" variant="outline-primary" disabled={options.Infants >= 9} onClick={() => handleOption("Infants", "i")}>
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </Button>
                                                    </InputGroup>
                                                </div>
                                            </div>
                                            <div className="row text-center">
                                                <h5 className="my-3">Travel Class</h5>
                                                {/* <div className="col mx-auto">
                                                <Button variant="outline-primary mx-3" onClick={() => handleChange("Economy")}>Economy</Button>
                                                <Button variant="outline-primary mx-3" onClick={() => handleChange("Business")} >Business</Button>
                                                <Button variant="outline-primary mx-3" onClick={() => handleChange("FirstClass")} >First Class</Button>
                                                <Button variant="outline-primary mx-3" onClick={() => handleChange("AllClass")} >All Class</Button>
                                            </div> */}
                                                <Form.Select className='w-50 mx-auto fw-bold' onChange={(e) => handleChange(e.target.value)}>
                                                    <option className="fw-bold" value="AllClass">All Class</option>
                                                    <option className="fw-bold" value="Economy">Economy</option>
                                                    <option className="fw-bold" value="Business">Business</option>
                                                    <option className="fw-bold" value="FirstClass">First Class</option>
                                                </Form.Select>
                                            </div>
                                        </Card.Body>
                                        <Card.Footer className="bg-white text-end">
                                            <Button variant="outline-primary mx-3" onClick={() => setOpen(false)}>Done</Button>
                                        </Card.Footer>
                                    </Card>
                                )}
                            </div>
                        </div>
                        <div className='modifyflightbuttons ms-3 my-auto listmodifyflightbuttons'>
                            <Button className='btn-sm' onClick={() => handleSubmit()}>UPDATE SEARCH</Button>
                        </div>
                    </div>
                </Row>
                <div className='text-center'>
                    {(fromaddress === '' || toaddress === '' || ((fromaddress.suggestion.airport_code).localeCompare(toaddress.suggestion.airport_code) === 0)) ? <h6 className="font-weight-bold text-danger mt-2">{errormsg}</h6> : null}
                </div>
            </div>
        </div>
    )


};
export default FlightModifySearch;
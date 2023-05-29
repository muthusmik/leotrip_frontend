import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft,faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import CustomDatePickers from "../../../../component/datepicker/singledatepicker"
import moment from "moment";
import { format } from 'date-fns';
import CustomButton from '../../../../component/button';
import { loadFlightList } from "../../../../store/actions/flightsearch"
import { useDispatch, useSelector } from "react-redux";
import AutoSuggest from "react-autosuggest";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Button,Modal,Row} from 'react-bootstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';





const FlightModifySearch = () => {

    const [modalShow, setModalShow] = React.useState(false);
    const [airportcity, setAirportcity] = useState()
    const [Sourcecode, setSourcecode] = useState();
    const [Destinationcode, setDestinationcode] = useState();
    const [Source, setSource] = useState();
    const [Destination, setDestination] = useState();
    const [Travelclass, setTravelclass] = useState();
    const [Departure, setDeparture] = useState();
    const [Travellers, setTravellers] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        const AirlineData = JSON.parse(localStorage.getItem('travelDetails'));
        console.log("i am happy", AirlineData)
        if (AirlineData) {
            setSourcecode(AirlineData[0].Source_code);
            setSource(AirlineData[1].Source);
            setDestinationcode(AirlineData[2].Destination_code);
            setDestination(AirlineData[3].Destination);
            setTravelclass(AirlineData[4].Travelclass);
            setDeparture(AirlineData[5].Departure);
            setTravellers(AirlineData[6].Travellers);
        }
    }, [])

    const airportcitylist = useSelector(state => state.AirportCityList);
    useEffect(() => {
        setAirportcity(airportcitylist.data)
    }, [airportcitylist])

    /*  # Source */
    const [fromaddress, setFromaddress] = useState("");
    /* # Destination */
    const [toaddress, setToaddress] = React.useState("");
    /*  #swapping */
    const switchText = (from, to) => {
        console.log("swapping",to.suggestion.airport_city_name);
        handleSelection(to)
        handleSelectiondestination(from)
        setValueDes(to.suggestion.airport_city_name)
        setDestinationdata(from.suggestion.airport_city_name);

    // setValueDes(from)
      
    }
    /* # DatePicker */
    const [selectedDay, setSelectedDay] = useState(Date);
    const [date, setDate] = useState(moment(new Date()).format('DD-MM-YYYY'))
    const handleDayClick = (day) => {
        setDate(format(day, 'PP'))
        setSelectedDay(day)
    };
    useEffect(() => {
        // set current date on component load
        const routeDate=new Date(AirlineData[5].Departure)
        console.log(new Date(AirlineData[5].Departure),"Date routed")
        setDate(moment(routeDate).format('MMM DD,YYYY'));
    }, [])



    /*  # AutoSuggest */
    const AirlineData = JSON.parse(localStorage.getItem('travelDetails'));
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
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        Infants: 0,
    });
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };
    const [triptype, setTriptype] = useState({ className: "All Class", id: 1 });
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

    console.log("make prefect", selectedDay, options, triptype)

    const handleSubmit = () => {
      
            history.push("/flightlist-oneway")

            const flightSearchList = {
                "EndUserIp": "107.180.105.183",
                "ClientId": "180109",
                "UserName": "SKdigPa8",
                "Password": "A$JSkEf4#4",
                "AdultCount": options.adult,
                "ChildCount": options.children,
                "InfantCount": options.Infants,
                "JourneyType": "1",
                "Sources": null,
                "Segments": [{
                    "Origin": fromaddress.suggestion?.airport_code,
                    "Destination": toaddress.suggestion?.airport_code,
                    "FlightCabinClass": triptype.id,
                    "PreferredDepartureTime": moment(selectedDay).format("YYYY-MM-DDT00:00:00"),
                    "PreferredArrivalTime": moment(selectedDay).format("YYYY-MM-DDT00:00:00")
                }]
            }
            dispatch(loadFlightList(flightSearchList));


            let localstores = [];
            localstores.push({ "Source_code": fromaddress.suggestion?.airport_code });
            localstores.push({ "Source": valueDes });
            localstores.push({ "Destination_code": toaddress.suggestion?.airport_code });
            localstores.push({ "Destination": destinationdata });
            localstores.push({ "Travelclass": triptype.className });
            localstores.push({ "Departure": moment(selectedDay).format("MMM DD YYYY") });
            localstores.push({ "Travellers": options });
            localStorage.setItem('travelDetails', JSON.stringify(localstores));

       

    }

    return (
        <div className='flightmodifysearch_header'>
            <div className='container modifysearch bg-white pb-2'>
                <Row >
                    <div className='mt-3'>
                        <div className="form-check form-check-inline">
                            <input className="check-input" type="radio" name="triptype" id="oneway" value="oneway" defaultChecked />
                            <label className="check-label" htmlFor="oneway">One Way</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="check-input" type="radio" name="triptype" id="roundtrip" value="roundtrip" />
                            <label className="check-label" htmlFor="round-trip">Round-trip</label>
                        </div>
                    </div>
                </Row>
                <Row>
                <div className='d-inline-flex content'>
                    <div>
                        <div className="search-area mt-4">
                            <p>From</p>
                            <AutoSuggest
                                suggestions={suggestions}
                                onSuggestionsFetchRequested={({ value }) => {
                                    setValueDes(value);
                                    // console.log("I am selected in ...............................",value)
                                    setSuggestions(getSuggestions(valueDes));
                                }}
                                onSuggestionSelected={(_, suggestionValue) => { handleSelection(suggestionValue) }}
                                getSuggestionValue={suggestion => suggestion.airport_city_name}
                                renderSuggestion={suggestion => <span className="suggesstionList">{suggestion.airport_city_name}</span>}
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
                    <div className='icon d-flex justify-content-center'>
                        <FontAwesomeIcon icon={faArrowRightArrowLeft} onClick={() => switchText(fromaddress, toaddress)} style={{ fontSize: "20px", color: "green" }} />
                    </div>


                    <div className="search-area mt-4">
                        <p style={{ width: "20px" }}>To</p>
                        <AutoSuggest
                            suggestions={suggestions}

                            onSuggestionsFetchRequested={({ value }) => {
                                setDestinationdata(value);
                                // console.log("I am selected in ...............................",value)
                                setSuggestions(getSuggestions(destinationdata));
                            }}
                            onSuggestionSelected={(_, suggestionValue) => { handleSelectiondestination(suggestionValue) }}
                            getSuggestionValue={suggestion => suggestion.airport_city_name}
                            renderSuggestion={suggestion => <span className="suggesstionList">{suggestion.airport_city_name}</span>}
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
                    <div className='traveloption mt-4 bg-white'>
                        <p>Travellers & Class</p>
                        <div className="headerSearchItem">
                            <div
                                onClick={() => setOpen(true)}
                                className="w-100 mt-2 text-center " style={{ height: "65px" }}>
                                <span className="headerSearchText">&nbsp;&nbsp;&nbsp;{`${options.adult} adult · ${options.children} children · ${options.Infants} Infants Travel Class: ${triptype.className}`}</span>
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
                                            <Form.Select className='w-50 mx-auto fw-bold' onChange={(e)=>handleChange(e.target.value)}>
                                                <option className="fw-bold" value="AllClass">All Class</option>
                                                <option className="fw-bold" value="Economy">Economy</option>
                                                <option className="fw-bold" value="Business">Business</option>
                                                <option className="fw-bold"  value="FirstClass">First Class</option>
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
                    <div className='flightbutton ms-2 my-auto'>
                        <Button  onClick={() => handleSubmit()}>UpDate Search</Button>
                    {/* <CustomButton customstyle='flightbtnsearch' onClick={() => handleSubmit()} value='SEARCH FLIGHTS'></CustomButton> */}
                </div>
                </div>
                </Row>
                {/* <div className='row p-2'>
                    <div className='col-3 d-flex p-3'>
                        <div>
                            <h5 className='mb-0'>{Sourcecode}</h5>
                            <p className='ms-1 mt-0'>({Source})</p>
                        </div>
                        <span>
                            <FontAwesomeIcon icon={faLongArrowRight} className="mx-1" style={{ fontSize: "30px", color: "blue" }} />
                        </span>
                        <div>
                            <h5 className='mb-0'>{Destinationcode}</h5>
                            <p className='ms-1 mt-0'>({Destination})</p>
                        </div>
                    </div>
                    <div className='col-2'>
                        <h5 className='mb-0 mt-2'>Departure</h5>
                        <p className='mt-0 ms-2'>{Departure}</p>
                    </div>
                    <div className='col-2'>
                        <h5 className='mb-0 mt-2'>Travellers</h5>
                        <p className='mt-0 ms-2'><span className='text-dark'>{Travellers.adult}</span>&nbsp;Adults&nbsp;<span className='text-dark'>{Travellers.children}</span>&nbsp;children&nbsp;<span className='text-dark'>{Travellers.Infants}</span>&nbsp;Infants</p>

                    </div>
                    <div className='col-2 text-end'>
                        <h5 className='mb-0 mt-2'>Travel Class</h5>
                        <p className='mt-0 me-5'>{Travelclass}</p>
                    </div>
                    <div className='col-3 p-3'>
                        <Button variant="primary float-end me-5" onClick={() => setModalShow(true)}>
                            Modify Search
                        </Button>

                        <Modal
                            show={modalShow}
                            size="xl"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            onHide={() => setModalShow(false)}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    <div>
                                        <div className="form-check form-check-inline">
                                            <input className="check-input" type="radio" name="triptype" id="oneway" value="oneway" defaultChecked />
                                            <label className="check-label" htmlFor="oneway">One Way</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="check-input" type="radio" name="triptype" id="roundtrip" value="roundtrip" />
                                            <label className="check-label" htmlFor="round-trip">Round-trip</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="check-input" type="radio" name="triptype" id="multicity" value="multicity" />
                                            <label className="check-label" htmlFor="multi-city">Multi-city</label>
                                        </div>
                                    </div>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <OneWay />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={() => setModalShow(false)}>Submit</Button>
                            </Modal.Footer>
                        </Modal>
                    </div> */}
                {/* </div> */}
            </div>
        </div>
    )


};
export default FlightModifySearch;
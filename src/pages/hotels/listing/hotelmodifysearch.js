import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './hotellist.scss';
import MultiDatePickers from '../../../component/datepicker/modifysearchmultidatepicker';
import { loadHotelList } from "../../../store/actions/hotelsearch"
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Card, Button } from 'react-bootstrap';
import { format } from 'date-fns';
import AutoSuggest from "react-autosuggest";

const HotelModifySearch = () => {
    useEffect(() => {
        const Destination = JSON.parse(localStorage.getItem('hotellocation'));
        console.log("destination......",Destination)
        handleSelection(JSON.parse(localStorage.getItem('destination')))
    }, [])

    const [citylocation, setCityLocation] = useState()

    /*  # Source */
    const [hotellocation, setHotellocation] = useState(JSON.parse(localStorage.getItem('destination')));
    const Destination = JSON.parse(localStorage.getItem('hotellocation'));
    const GuestDetails = JSON.parse(localStorage.getItem('roomGuest'));
    console.log("guestDetails",GuestDetails);
    const range = localStorage.getItem("selected");
    // date state
    const [selectedRange, setSelectedRange] = useState(range);
    const [checkInDate, setCheckInDate] = useState(Destination[1].checkIn);
    const [checkOutDate, setCheckOutDate] = useState(Destination[3].Checkout);



    const history = useHistory();
    const refOne = useRef(null);
    const dispatch = useDispatch();
    const [submitData, SetSubmitData] = useState(null)
    const [valueDes, setValueDes] = useState(Destination[0].location);
    const [suggestions, setSuggestions] = useState([]);
    const [errormsg,setErrormsg] =useState("")

    const hotelcitylist = useSelector(state => state.HotelCityList);

    useEffect(() => {
        setCityLocation(hotelcitylist.data?.result)
    }, [hotelcitylist])




    console.log("i am A0", citylocation)

    const handleRangeSelect = (range) => {
        console.log("............", range);
        setSelectedRange(range);
        if (range?.from) {
            setCheckInDate(format(range.from, 'MMM dd, yyyy'));
        }
        if (range?.to) {
            setCheckOutDate(format(range.to, 'MMM dd, yyyy'));
        }
    };


    function getSuggestions(value) {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        // console.log("selected values ...........................>",inputValue);
        return inputLength === 0 ? [] : citylocation.filter(lang =>
            lang.Destination.toLowerCase().slice(0, inputLength) === inputValue
        );
    }

    const handleSelection = (suggestionValue) => {
        console.log(suggestionValue, "suggestion value")
        setHotellocation(suggestionValue)
    }

    const [night, setnight] = useState(Destination[4].nights);

    const handleSubmit = (checkInDate, checkOutDate) => {

        var startDate = moment(checkInDate).format("DD/MM/YYYY");
        var endDate = moment(checkOutDate).format("DD/MM/YYYY");

        var checkin = moment(startDate, "DD.MM.YYYY");
        var checkout = moment(endDate, "DD.MM.YYYY");

        var nights = checkout.diff(checkin, 'days');
        if (nights !== 0) {
            setnight(nights)
        }
        // console.log("iam icecream",night)

        if (hotellocation === "") {
            setErrormsg('Please Enter the  Location !');
        }
        else {
            /*  #hotel Search payload */
            SetSubmitData({
                "BookingMode": "1",
                "CheckInDate": moment(checkInDate).format("DD/MM/YYYY"),
                "NoOfNights": nights,
                "CountryCode": hotellocation.suggestion.countrycode,
                "CityId": hotellocation.suggestion.cityid,
                "ResultCount": null,
                "PreferredCurrency": "INR",
                "GuestNationality": "IN",
                "NoOfRooms": rooms,
                "RoomGuests": roomGuest,
                "PreferredHotel": "",
                "MaxRating": "5",
                "MinRating": "0",
                "ReviewScore": null,
                "IsNearBySearchAllowed": false
            })

            let localstores = [];
            localstores.push({ "location": hotellocation.suggestion?.Destination });
            localstores.push({ "checkIn": moment(checkInDate).format("MMM DD YYYY") });
            localstores.push({ "rooms": rooms });
            localstores.push({ "Checkout": moment(checkOutDate).format("MMM DD YYYY") });
            localstores.push({ "nights": nights });
            localStorage.setItem('hotellocation', JSON.stringify(localstores));
            localStorage.setItem('destination', JSON.stringify(hotellocation));
            localStorage.setItem('roomGuest', JSON.stringify(roomGuest));
        }
    }



    useEffect(() => {
        console.log("iam nerghu", submitData)
        if (submitData != null) {
            dispatch(loadHotelList(submitData));
            history.push("/hotel/hotellist")
        }
    }, [submitData]);


    // # new room setting
    const [viewRoom, setViewRoom] = useState(false)
    const [rooms, setRooms] = useState(Destination[2].rooms)
    const [roomGuest, setRoomGuest] = useState(GuestDetails)


    const handleRoom = async(value) => {
        setViewRoom(true)
        setRooms(value)
        console.log("no of value",value)  
        let varr = [];
        for (var i = 0; i < value; i++) {
          varr.push({
            "NoOfAdults": 1,
            "NoOfChild": 0,
            "ChildAge": []
        })
        }
        setRoomGuest(varr)
    }


    const handleAdult = (value, i) => {
        let newFormValues = [...roomGuest];
        newFormValues[i]["NoOfAdults"] = value;
        setRoomGuest(newFormValues);
    }

    
    const handleChild = (value, i) => {
        let newFormValues = [...roomGuest];
        newFormValues[i]["NoOfChild"] = value;
        setRoomGuest(newFormValues);
    }
    const handleAge = (value, i, j) => {
        let newFormValues = [...roomGuest];
        newFormValues[i]["ChildAge"][j] = value;
        setRoomGuest(newFormValues);
    }
    console.log("setChild data:", "child count:", roomGuest)


    return (
        <>
            <div className='modifyhotelsearch_header'>
                <div className='container modifyhotelsearch'>
                    <div className='modifyhotelsearch_form d-inline-flex mb-4 mt-4'>
                        <div className='modifyhotelsearchbox mt-2'>
                            <p>destination</p>
                            <AutoSuggest

                                suggestions={suggestions}

                                onSuggestionsFetchRequested={({ value }) => {
                                    setValueDes(value);
                                    // console.log("I am selected in ...............................",value)
                                    setSuggestions(getSuggestions(valueDes));
                                }}
                                onSuggestionSelected={(_, suggestionValue) => { handleSelection(suggestionValue) }}
                                getSuggestionValue={suggestion => suggestion.Destination}
                                renderSuggestion={suggestion => <span className="suggesstionList">{suggestion.Destination},{suggestion.country}</span>}
                                inputProps={{
                                    placeholder: "Enter Source",
                                    value: valueDes,

                                    onChange: (_, { newValue, method }) => {
                                        setValueDes(newValue);
                                        //    console.log("newValue",newValue)
                                    }
                                }}
                                highlightFirstSuggestion={true}
                            />

                        </div>
                        <div className='mt-2'>
                            <MultiDatePickers
                                checkInDate={checkInDate}
                                checkOutDate={checkOutDate}
                                Searchstyle="modifyhotel_searchdate "
                                selected={selectedRange}
                                onSelect={handleRangeSelect}
                                required="required"
                                calanderstyle="modifyhotel_calander"
                            />
                        </div>
                        <div className='modiguestoption_rooms mt-2 ms-3'>
                            <p>Guests&nbsp;&nbsp;&amp;&nbsp;&nbsp;Rooms</p>
                            <div className="roomSearchItem" style={{ position: 'absolute' }}>
                                <select class="modibp_room_select valid " style={{ width: "100%" }} name="room" required="required" autocomplete="off" onChange={(e) => handleRoom(parseInt(e.target.value))} onClick={()=>{setViewRoom(true)}}>
                                    <option value={1} selected={Destination[2].rooms === 1}>1 Room</option>
                                    <option value={2} selected={Destination[2].rooms === 2}>2 Rooms</option>
                                    <option value={3} selected={Destination[2].rooms === 3}>3 Rooms</option>
                                    <option value={4} selected={Destination[2].rooms === 4}>4 Rooms</option>
                                </select>
                                {viewRoom && rooms > 0 && (
                                    <Card className="roomOptions" ref={refOne} >
                                        <Card.Body >
                                            {[...Array(rooms)].map((value, index) => (
                                                <div key={index} className="my-2">
                                                    <div class="roombox clearfix mt-10">
                                                        <span class="block fz16 fwb black-color">Room {index + 1}:</span>
                                                        <div class="roomchildbox clearfix border-top pt-2">
                                                            <div class="row mt15">
                                                                <div class="col-sm-6">
                                                                    <span class="block mb10 black-color fz12">Adult</span>
                                                                    <select name="adult_1" id="adult_1" class="form-control" onChange={(e) => handleAdult(parseInt(e.target.value), index)}>
                                                                        <option value="1" selected={roomGuest[index]["NoOfAdults"] === 1}>1 Adult</option>
                                                                        <option value="2" selected={roomGuest[index]["NoOfAdults"] === 2}>2 Adults</option>
                                                                        <option value="3" selected={roomGuest[index]["NoOfAdults"] === 3}>3 Adults</option>
                                                                        <option value="4" selected={roomGuest[index]["NoOfAdults"] === 4}>4 Adults</option>
                                                                    </select>
                                                                </div>
                                                                <div class="col-sm-6">
                                                                    <span class="block mb10 black-color fz12">Child</span>
                                                                    <select name="child_1" id="child_1" class="form-control" onChange={(e) => handleChild(parseInt(e.target.value), index)}>
                                                                        <option value="0" selected={roomGuest[index]["NoOfChild"] === 0}>0 Child</option>
                                                                        <option value="1" selected={roomGuest[index]["NoOfChild"] === 1}>1 Child</option>
                                                                        <option value="2" selected={roomGuest[index]["NoOfChild"] === 2}>2 Children</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            {roomGuest[index].NoOfChild > 0 && (
                                                                <div class="row my-3">
                                                                    {[...Array(roomGuest[index].NoOfChild)].map((value, idx) => (
                                                                        <div class="col-sm-6 my-2" key={idx}>
                                                                            <span class="block mb10 black-color fz12">Child {idx + 1} Age</span>
                                                                            <select name="age_1_1" id="age_1_1" class="block width-100 border radius form-control" onChange={(e) => handleAge(parseInt(e.target.value), index, idx)}>
                                                                                <option value="1" selected={roomGuest[index].NoOfChild[idx] === 1}>1 Year</option>
                                                                                <option value="2" selected={roomGuest[index].NoOfChild[idx] === 2}>2 Years</option>
                                                                                <option value="3" selected={roomGuest[index].NoOfChild[idx] === 3}>3 Years</option>
                                                                                <option value="4" selected={roomGuest[index].NoOfChild[idx] === 4}>4 Years</option>
                                                                                <option value="5" selected={roomGuest[index].NoOfChild[idx] === 5}>5 Years</option>
                                                                                <option value="6" selected={roomGuest[index].NoOfChild[idx] === 6}>6 Years</option>
                                                                                <option value="7" selected={roomGuest[index].NoOfChild[idx] === 7}>7 Years</option>
                                                                                <option value="8" selected={roomGuest[index].NoOfChild[idx] === 8}>8 Years</option>
                                                                                <option value="9" selected={roomGuest[index].NoOfChild[idx] === 9}>9 Years</option>
                                                                                <option value="10" selected={roomGuest[index].NoOfChild[idx] === 10}>10 Years</option>
                                                                                <option value="11" selected={roomGuest[index].NoOfChild[idx] === 11}>11 Years</option>
                                                                                <option value="12" selected={roomGuest[index].NoOfChild[idx] === 12}>12 Years</option>
                                                                            </select>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Card.Body>
                                        <Card.Footer className="bg-white text-end">
                                            <Button variant="outline-primary mx-3" onClick={() => setViewRoom(false)}>Done</Button>
                                        </Card.Footer>
                                    </Card>
                                )}
                            </div>
                        </div>
                        <div className='modifyhotelbutton ms-3'>
                            <Button onClick={() => handleSubmit(checkInDate, checkOutDate)}>Update Search</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};
export default HotelModifySearch;

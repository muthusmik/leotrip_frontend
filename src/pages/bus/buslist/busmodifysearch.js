import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../bus.scss';
import { useHistory } from 'react-router-dom';
import CustomDatePickers from "../../../component/datepicker/singledatepicker"
import { format } from 'date-fns';
import { loadBusList } from '../../../store/actions/bus';
import moment from 'moment';
import { Button } from "react-bootstrap";
import AutoSuggest from "react-autosuggest";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from "react-router-dom";



const BusModifySearch = () => {
    const location = useLocation()
    // console.log(location, "i am about modifiysearch")
    const [source, setSource] = React.useState(location.state.state.source_city)
    const [destination, setDestination] = React.useState(location.state.state.destination_city)
    const [date, setDate] = React.useState(location.state.state.depart_date)

    

    useEffect(() => {
        const Destination = JSON.parse(localStorage.getItem('bussearch'));
        console.log('Destination source', Destination[0].from);
        console.log('Destination ',Destination[1].to);
        handleSelection( Destination[0].from)
        handleSelectiondestination( Destination[1].to)
    }, [])
const Destination = JSON.parse(localStorage.getItem('bussearch'));
    const [city, setCity] = useState()
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    /* # RoutingCall */
    /* # ERROR Handling */
    const [errormsg, setErrormsg] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = (depart_date) => {
        if (source_city == '') {
            setErrormsg('Please Enter the Valid Location !');
        }
        else if (destination_city == '') {
            setErrormsg('Please Enter the Valid Location !');
        }
        else {
            setErrormsg('')
            const buslist = {
                "ClientId": "180148",
                "UserName": "SKdigPa8",
                "Password": "A$JSkEf4#4",
                "source_city": source_city,
                "source_code": source_city_Id,
                "destination_city": destination_city,
                "destination_code": destination_city_Id,
                "depart_date": moment(depart_date).format("YYYY-MM-DD"),
            }
            dispatch(loadBusList(buslist));
            let localstores = [];
            localstores.push({ "from": from });
            localstores.push({ "to": to });
            localStorage.setItem('bussearch', JSON.stringify(localstores));
            history.push("/bus/buslist", { state: { source_city, destination_city, depart_date } })
        }
    }
    const buscitylist = useSelector(state => state.BusCityList);
    /*  # Source */
    const [source_city, setSource_city] = useState("");
    const [source_city_Id, setSource_city_Id] = useState("");
    /* # Destination */
    const [destination_city, setDestination_city] = React.useState("");
    const [destination_city_Id, setDestination_city_Id] = useState("");
    /*  #swapping */
    const switchText = (from, to) => {
        handleSelection(to)
        handleSelectiondestination(from)
        setValue(to.suggestion.CityName)
        setValueDes(from.suggestion.CityName);
        // setSource_city(to)
        // setDestination_city(from)
    }
    /* # DatePicker */
    const [depart_date, setDepart_date] = useState(Date);
    const handleDayClick = (day) => {
        setDate(format(day, 'PP'))
        setDepart_date(day)
    };
    useEffect(() => {
        setDate(date)
    }, [])
    useEffect(() => {
        setCity(buscitylist.data?.CityList)
    }, [buscitylist])



    const [value, setValue] = useState(Destination[0]?.from.suggestion.CityName);
    const [valueDes, setValueDes] = useState(Destination[1]?.to.suggestion.CityName);
    console.log("i am A1",value);
    // console.log("i am A2",valueDes);
    // console.log("i am A4",city)
    const [suggestions, setSuggestions] = useState([]);
    function getSuggestions(value) {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        return inputLength === 0 ? [] : city.filter(lang =>
            lang.CityName.toLowerCase().slice(0, inputLength) === inputValue
        );
    }
    //  console.log("i am A3",suggestions);
    const [from, setFrom] = useState("")
    const handleSelection = (suggestionValue) => {
        console.log(".......", suggestionValue)
        setFrom(suggestionValue);
        setSource_city(suggestionValue.suggestion.CityName)
        setSource_city_Id(suggestionValue.suggestion.CityId)
    }


    const [to, setTo] = useState()

    const handleSelectiondestination = (suggestionValue) => {
        setTo(suggestionValue);
        setDestination_city(suggestionValue.suggestion.CityName)
        setDestination_city_Id(suggestionValue.suggestion.CityId)
    }
    return (
        <div className='modifysearch_header'>
            <div className='container modifybussearch'>
                <div className='d-inline-flex modifycontent my-4'>
                    <div className='bussearchbox border-bottom border-2 mt-2'>
                        <p>FROM</p>
                        <div>
                            <AutoSuggest
                                suggestions={suggestions}
                                onSuggestionsFetchRequested={({ value }) => {
                                    setValue(value);
                                    setSuggestions(getSuggestions(value));
                                }}
                                onSuggestionSelected={(_, suggestionValue) => { handleSelection(suggestionValue) }}
                                getSuggestionValue={suggestion => suggestion.CityName}
                                renderSuggestion={suggestion => <span className="suggesstionList">{suggestion.CityName}</span>}
                                inputProps={{
                                    placeholder: "Enter Source",
                                    value: value,
                                    onChange: (_, { newValue, method }) => {
                                        setValue(newValue);
                                        //    console.log("newValue",method)
                                    }
                                }}
                                highlightFirstSuggestion={true}
                            />
                        </div>
                    </div>
                    <div className='icon d-flex justify-content-center my-4'>
                        <FontAwesomeIcon icon={faArrowRightArrowLeft} onClick={() => switchText(from, to)} style={{ fontSize: "20px", color: "green" }} />
                    </div>
                    <div className='bussearchbox border-bottom border-2 mt-2'>
                        <p>TO</p>
                        <AutoSuggest
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={({ value }) => {
                                setValueDes(value);
                                setSuggestions(getSuggestions(valueDes));
                            }}
                            onSuggestionSelected={(_, suggestionValue) => { handleSelectiondestination(suggestionValue) }}
                            getSuggestionValue={suggestion => suggestion.CityName}
                            renderSuggestion={suggestion => <span className="suggesstionList">{suggestion.CityName}</span>}
                            inputProps={{
                                placeholder: "Enter Destination",
                                value: valueDes,
                                onChange: (_, { newValue, method }) => {
                                    setValueDes(newValue);
                                    //    console.log("newValue",method)
                                }
                            }}
                            highlightFirstSuggestion={true}
                        />
                    </div>
                    <div className='buspickup border-bottom border-2  mt-2'>
                        <div className='buspickupdate'>
                            <p>Pickup Date</p>
                            <CustomDatePickers
                                value={date}
                                Searchstyle="Bus_searchdate"
                                selected={depart_date}
                                onDayClick={handleDayClick}
                                required="required"
                                calanderstyle="bus_calander"
                            />
                        </div>
                    </div>
                    <div className='busbutton ms-4 my-3'>
                        <Button onClick={() => handleSubmit(date)}>Modify Search</Button>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default BusModifySearch;
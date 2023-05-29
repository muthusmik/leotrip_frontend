import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Form, Button } from 'react-bootstrap';
import user from '../../../asset/images/bus/user.png';
import Remove from '../../../asset/images/bus/remove.png';
import { useLocation } from 'react-router-dom';
import { useSelector, useStore, useDispatch } from "react-redux";
import InputGroup from 'react-bootstrap/InputGroup';
import { ToastContainer, toast } from 'react-toastify';
import { loadBusBlock } from '../../../store/actions/busblock'
import { busGustAdd } from '../../../store/services/bus'
import Login from '../../authentication/login';


const TravelerDetails = ({ result, seatDetails, bordPoint, dropPoint, handleSelectValue, handleBusData, handleGustRes }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const buslistingdata = useSelector(state => state.Bus);
    const seat = location.state

    const [selectedvalue, onselectvalue] = useState(false);
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [gust, setGust] = React.useState(1);
    const [validated, setValidated] = useState(false)

    const [traceId, setTraceId] = useState();
    useEffect(() => {
        if (buslistingdata.data?.result) {

            setTraceId(buslistingdata?.data?.result[0]?.TraceId)
        }
    }, [buslistingdata])


    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

    const handleAddress = (e) => {
        setAddress(e.target.value)
    }
    useEffect(() => {
        const length = parseInt(seat.seatNum?.length)
        let fieldArray = []
        let gustObj = {
            Title: "Mr",
            FirstName: "",
            LastName: "",
            Age: "",
            Gender: "1"
        };
        [...Array(length)].map((seat, i) => {
            fieldArray.push(gustObj)
        });
        console.log("HHH", fieldArray)

        setGust(fieldArray)

    }, [])

    const [modalShow, setModalShow] = React.useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleValidate = async (event) => {

        event.preventDefault();
        const form = event.currentTarget;
        const usertoken = JSON.parse(localStorage.getItem('token'));
        console.log(gust)
        if (!usertoken) {
            // console.log("here")
            // toast.dismiss();
            // toast("continue Login for your Booking")
            setModalShow(true)
        }
        else {
            console.log("rrr", usertoken)

            if (!form.checkValidity()) {

                onselectvalue(form.checkValidity());
                setValidated(true);
                event.preventDefault();
                event.stopPropagation();
                console.log("false here")
            } else if (form.checkValidity()) {
                setValidated(false);
                let passanger = []
                for (let i = 0; i < gust.length; i++) {
                    let mergeObj = Object.assign(gust[i], {
                        "LeadPassenger": true,
                        "PassengerId": 0,
                        "Email": email,
                        "Phoneno": phone,
                        "Address": address,
                        "IdType": null,
                        "IdNumber": null
                    })
                    for (let j = 0; j < seatDetails.length; j++) {
                        if (i === j) {
                            mergeObj = Object.assign(mergeObj, { Seat: seatDetails[j] });
                            break;
                        }
                    }
                    passanger.push(mergeObj)
                }
                console.log("passanger", passanger)
                const busblock = {
                    "ClientId": "180148",
                    "UserName": "SKdigPa8",
                    "Password": "A$JSkEf4#4",
                    // "RefID": "77894",
                    "TraceId": traceId,
                    "ResultIndex": result,
                    "BoardingPointId": bordPoint,
                    "DroppingPointId": dropPoint,
                    "Passenger": passanger
                }
                dispatch(loadBusBlock(busblock));
                handleBusData(busblock)
                setIsDisabled(true);
                let PostobjArr = []
                gust.map(item => {
                    PostobjArr.push({
                        name: item.FirstName,
                        mobileNumber: item.Phoneno
                    })
                })


                let postData = { userGuestDetails: PostobjArr }
                const res = await busGustAdd(postData)

                console.log("response busGustAdd........", res);
                if (res?.data?.result) {
                    console.log("Passenger", res?.data?.result)

                    handleGustRes(res?.data?.result)
                    handleSelectValue(form.checkValidity())
                    onselectvalue(form.checkValidity());
                }


                console.log("true here")
            }
        }

    };

    const [formValues, setFormValues] = useState([{ name: "", age: "", gender: "" }])
    const [view, setView] = useState(false)
    let addFormFields = (index) => {
        if (index < 9) {
            setFormValues([...formValues, { name: "", age: "", gender: "" }])
        }
    }



    const handleValue = (i, e, name) => {
        let newFormValues = JSON.parse(JSON.stringify(gust))
        newFormValues[i][name] = e.target.value;
        setGust(newFormValues);
    }

    console.log("KAKAK", gust)



    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    const length = parseInt(seat.seatNum?.length)

    const BlockBusData = useSelector(state => state.busblock)


    return (
        <>


            <Form noValidate validated={validated} onSubmit={handleValidate}>

                <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="1" className='mt-3'>
                        <Accordion.Header>
                            <div>
                                <h5>Traveller Details</h5>
                                <h6 className='small'>Please make sure you enter the Name as per your Govt. photo id</h6>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <Accordion defaultActiveKey="1">

                                {[...Array(length)].map((value, index) => {
                                    return (
                                        <Accordion.Item eventKey="1" key={index} className='mt-3'  >
                                            <Accordion.Header>
                                                <div className='row w-100'>
                                                    <div className='col-9 my-3'>
                                                        <h6>Traveller {index + 1} <br />
                                                            {/* <span className='small'>(age)</span> */}
                                                        </h6>
                                                    </div>
                                                    <div className='col-2' >
                                                        <p className='mt-3'>Seat {seat.seatNum[index]}</p>
                                                    </div>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body style={{ backgroundColor: "#e9ecef" }}>
                                                <div className='row'>
                                                    <div className='col-2' >
                                                        <Form.Label>Title</Form.Label>
                                                        <Form.Select aria-label="Title" hasValidation onChange={(e) => handleValue(index, e, "Title")}>
                                                            <option value="Mr">Mr</option>
                                                            <option value="Mrs">Mrs</option>
                                                            <option value="Miss">Miss</option>
                                                        </Form.Select>
                                                    </div>
                                                    <div className='col'>
                                                        <Form.Group className="mb-3" >
                                                            <Form.Label>FirstName</Form.Label>
                                                            <InputGroup hasValidation>
                                                                <Form.Control
                                                                    type="text"
                                                                    name="firstname"
                                                                    required placeholder="Enter Name"
                                                                    pattern="[A-Za-z]{4,}"
                                                                    onChange={(e) => handleValue(index, e, "FirstName")}
                                                                />
                                                                <Form.Control.Feedback type="invalid">
                                                                    Please provide a valid Traveller FirstName.
                                                                </Form.Control.Feedback>
                                                            </InputGroup>
                                                        </Form.Group>
                                                    </div>
                                                    <div className='col'>
                                                        <Form.Group className="mb-3" >
                                                            <Form.Label>LastName</Form.Label>
                                                            <InputGroup hasValidation>
                                                                <Form.Control
                                                                    type="text"
                                                                    name="lastname"
                                                                    pattern="[A-Za-z]{1,}"
                                                                    required placeholder="Enter Name"
                                                                    onChange={(e) => handleValue(index, e, "LastName")}
                                                                />
                                                                <Form.Control.Feedback type="invalid">
                                                                    Please provide a valid Traveller LastName.
                                                                </Form.Control.Feedback>
                                                            </InputGroup>
                                                        </Form.Group>
                                                    </div>
                                                    <div className='col'>
                                                        <Form.Group className="mb-3" >
                                                            <Form.Label>Age</Form.Label>
                                                            <InputGroup hasValidation>
                                                                <Form.Control
                                                                    type="number"
                                                                    min="0"
                                                                    name="age"
                                                                    required placeholder="Enter Age"
                                                                    pattern="[0-9]{2}"
                                                                    onChange={(e) => handleValue(index, e, "Age")} />
                                                                <Form.Control.Feedback type="invalid">
                                                                    Please provide a valid Age.
                                                                </Form.Control.Feedback>
                                                            </InputGroup>
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <Form>
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <Form.Check
                                                                className='fw-bold'
                                                                label="Male"
                                                                name="gender"
                                                                type="radio"
                                                                id="Male"
                                                                value="1"
                                                                defaultChecked
                                                                onClick={(e) => handleValue(index, e, "Gender")}
                                                                selected={true}
                                                            />
                                                        </div>
                                                        <div className="col-3">
                                                            <Form.Check
                                                                className='fw-bold'
                                                                label="Female"
                                                                name="gender"
                                                                id="Female"
                                                                onClick={(e) => handleValue(index, e, "Gender")}
                                                                type="radio"
                                                                value="2"
                                                            />
                                                        </div>
                                                        <Form.Control.Feedback type="invalid">
                                                            Please provide a valid State.
                                                        </Form.Control.Feedback>

                                                    </div>
                                                </Form>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    )
                                })}
                            </Accordion>
                            <div className='row container  mt-3'>
                                <div className='col-6'>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Email</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Control type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required placeholder="Enter Email" onChange={(e) => handleEmail(e)} />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid Email Address.
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </div>
                                <div className='col-6'>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Mobile Number</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Select className='w-25'>
                                                <option value="91">+91</option>
                                            </Form.Select>
                                            <Form.Control
                                                placeholder="Mobile Number"
                                                className='w-75'
                                                required
                                                pattern="[0-9]{10}"
                                                onChange={(e) => handlePhone(e)}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid Mobile Number.
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </div>
                                <div className='col-6'>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Address</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Control
                                                placeholder="Address"
                                                className='w-75'
                                                required
                                                onChange={(e) => handleAddress(e)}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a address
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </div>
                            </div>
                            <Form.Group className='ml-2'>
                                <Button type='submit' className='btn btn-primary ml-4' disabled={isDisabled}>Submit</Button>
                            </Form.Group>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </Form>
            <Login
                show={modalShow}
                ModalSetter={setModalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}
export default TravelerDetails













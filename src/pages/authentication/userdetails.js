import React, { useState, useEffect } from 'react';
import './login.scss'
import { Card, Form, Button, Row, Col, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Updateprofiledetail } from '../../store/services/signup'
import { Getprofiledetail } from '../../store/services/signup'
const UserDetails = ({ mobile }) => {

    // #cancel button
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // detail page
    const [view, setView] = useState(false)
    const [viewDetails, setViewDetails] = useState(true)
    const [getprofiledata, setGetprofiledata] = useState()
    const [updateprofiledata, setUpdateprofiledata] = useState()
    const [emailid, setEmailid] = useState()
    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [dob, setDob] = useState()
    const [gender, setGender] = useState()
    const [errormsg, setErrormsg] = useState()

    const [guestFirstName, setGuestFirstName] = useState();
    const [guestLastName, setGuestLastName] = useState();
    const [guestRelation, setGuestRelation] = useState();
    const [guestAge, setGuestAge] = useState();
    const [guestGender, setGuestGender] = useState();
    const [guestErrorMsg, setGuestErrormsg] = useState();
    const [addNewGuest, setAddNewGuest] = useState(false)
    const [GuestData, setGuestData] = useState([{ firstname: "", lastname: "", age: "", relation: "", gender: "" }])

    useEffect(() => {

    }, []);

    useEffect(() => {
        loadgetprofiledetails()
    }, []);

    const loadgetprofiledetails = async () => {
        let profiledetails = await Getprofiledetail();
        console.log("qqq", profiledetails)
        setGetprofiledata(profiledetails)
        setEmailid(profiledetails?.result[0]?.email)
        setFirstname(profiledetails?.result[0]?.firstName)
        setLastname(profiledetails?.result[0]?.lastName)
        setDob(profiledetails?.result[0]?.dob)
        setGender(profiledetails?.result[0]?.gender)
    }




    const onHandleSave = () => {
        console.log("a")
        if ((emailid == undefined) || (firstname == undefined) || (lastname == undefined) || (dob == undefined) || (gender == undefined)) {
            setErrormsg("All Details needs to fill")
            console.log("b")
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailid)) {
            console.log("c")
            setErrormsg("Please enter a valid emailId!");
        }
        else if (firstname.length < 4) {
            console.log("d")
            setErrormsg("Please enter valid firstname");
        }
        else {
            console.log("e")
            setErrormsg('')
            setView(false)
            setViewDetails(true)
            loadupdateprofiledetails()
        }


    }
    const onHandleGuestSave = () => {
        console.log("Guest age above.....", GuestData);
        const Empty = isAnyEmpty();
        console.log(Empty, "Guest age above.....", GuestData);
        if (!Empty) {
            setGuestErrormsg("All Details needs to fill")
        }
        else {
            setGuestErrormsg("")
        }
        // setGuestErrormsg("");
        // if (!guestFirstName || !guestLastName || !guestRelation || !guestAge || !guestGender) {
        //     setGuestErrormsg("All Details needs to fill")
        // }
        // if (guestFirstName.length < 3 || guestLastName.length < 3) {
        //     setGuestErrormsg("Minimum 3 characters is required")
        // }
        // if ((guestAge <= 0) || (guestAge > 100)) {
        //     console.log("Guest age....", guestAge);
        //     setGuestErrormsg("Please enter the age between 0 to 100")
        // }setFirstname
        // // else {
        // //     console.log("Success no error in guest");
        // //     setGuestErrormsg("")
        // // }
    }
    const onEdit = () => {
        setViewDetails(false)
        setView(true)
    }

    const handleEmail = (e) => {
        setErrormsg("");
        setEmailid(e.target.value);
    }

    const handleFirstname = (e) => {
        setErrormsg("")
        setFirstname(e.target.value);
    }

    const handleLastname = (e) => {
        setErrormsg("")
        setLastname(e.target.value)
    }

    const handleDob = (e) => {
        setDob(e.target.value)
    }

    const handleGender = (e) => {
        setGender(e.target.value)
    }

    const handleGuestFirstname = (e) => {
        setErrormsg("")
        setGuestFirstName(e.target.value)
    }

    const handleGuestLastname = (e) => {
        setErrormsg("")
        setGuestLastName(e.target.value)
    }

    const handleGuestRelation = (e) => {
        setErrormsg("")
        setGuestRelation(e.target.value)
    }

    const handleGuestAge = (e) => {
        setGuestAge(e.target.value)
    }

    const handleGuestGender = (e) => {
        setGuestGender(e.target.value)
    }


    console.log("dada",)

    const loadupdateprofiledetails = async () => {
        const profile = {
            "firstName": firstname,
            "lastName": lastname,
            "email": emailid,
            "gender": gender,
            "dob": dob
        }
        let updateprofile = await Updateprofiledetail(profile);
        setUpdateprofiledata(updateprofile)
        console.log("profile details", updateprofile)
    }


    // Guest Add, edit , delete, and validation for null exception functionalities
    const handleAddGuest = () => {
        var id = GuestData.length
        if (GuestData.length < 10) {
            var Data = { firstname: "", lastname: "", age: "", relation: "", gender: "" }
            setGuestData([...GuestData, Data])
        } else {
            console.log("unablee to add more")
            // Toast.show('Maximum Limit is Reached', Toast.SHORT, Toast.CENTER);
        }
    }
    const handleGuestedit = (value, index, type) => {
        if (type == "firstname") {
            var Data = [...GuestData]
            Data[index].firstname = value
            setGuestData(Data)

        } else if (type == "lastname") {
            var Data = [...GuestData]
            Data[index].lastname = value
            setGuestData(Data)
        } else if (type == "age") {
            var Data = [...GuestData]
            Data[index].age = value
            setGuestData(Data)
        } else if (type == "relation") {
            var Data = [...GuestData]
            Data[index].relation = value
            setGuestData(Data)
        } else {
            console.log("Gender...........", value, index)
            var Data = [...GuestData]
            Data[index].gender = value
            setGuestData(Data)
            console.log("Full details...........", Data);
        }
    }
    const RemoveGuest = (index) => {
        if (GuestData.length > 1) {
            var Data = [...GuestData]
            Data.splice(index, 1)
            setGuestData(Data)
        }
    }
    const isAnyEmpty = () => {

        for (let i = 0; i < GuestData.length; i++) {
            // console.log(GuestData[i])
            // if (Object.values(GuestData[i]).every(x => x === null || x == '')) {
            //     return false
            // }

            const inobj = GuestData[i];
            for (const key in inobj) {
                console.log("jj", inobj[key])
                if ((inobj[key].length < 1)) {
                    return false; // if a non-null value is found, return false
                }
            }
        }
        return true
    }

    return (
        <>
            {view && (<Card className='my-3'>
                <Card.Body>
                    <h5 className="fw-bold mb-4">Personal Information</h5>
                    <Row>
                        <Col>
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="mobile"
                                    className='fw-bold'
                                    type="tel"
                                    size="sm"
                                    value={mobile}
                                />
                                <label htmlFor="floatingInputCustom">Mobile Number</label>
                            </Form.Floating>
                        </Col>
                        <Col>
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="email"
                                    type="email"
                                    size="sm"
                                    value={emailid}
                                    onChange={handleEmail}
                                />
                                <label htmlFor="floatingInputCustom">Email Id</label>
                            </Form.Floating>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="name"
                                    type="text"
                                    size="sm"
                                    value={firstname}
                                    onChange={handleFirstname}
                                />
                                <label htmlFor="floatingInputCustom">First Name</label>
                            </Form.Floating>
                        </Col>
                        <Col>
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="last _name"
                                    type="text"
                                    size="sm"
                                    value={lastname}
                                    onChange={handleLastname}
                                />
                                <label htmlFor="floatingInputCustom">Last Name</label>
                            </Form.Floating>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" onClick={handleGender}>
                                <label htmlFor="floatingInputCustom">Gender</label>
                                <Row className='mt-2'>
                                    <Col>
                                        <Form.Check
                                            id="gender"
                                            type="radio"
                                            name="gender"
                                            value="Male"
                                            size="sm"
                                            checked={gender === "Male"}
                                            isvalid="true"
                                            className="h6"
                                            label="Male"
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Check
                                            id="gender"
                                            type="radio"
                                            name="gender"
                                            value="Female"
                                            className="h6"
                                            size="sm"
                                            checked={gender === "Female"}
                                            label="Female"
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="dob"
                                    type="date"
                                    size="sm"
                                    value={dob}
                                    onChange={handleDob}
                                />
                                <label htmlFor="floatingInputCustom">Date Of Birth</label>
                            </Form.Floating>
                        </Col>
                    </Row>
                    <Row className='my-4'>
                        <h6 className="font-weight-bold text-danger mt-2">{errormsg}</h6>
                        <Col xs={4}>
                            <Button variant="success" className='w-75 shadow-lg loginbuttons' onClick={onHandleSave}>SAVE</Button>
                        </Col>
                        <Col xs={4}>
                            <Button variant="light" className='w-75 shadow-lg loginbuttons' onClick={handleShow}>CANCEL</Button>
                            <Modal centered show={show} onHide={handleClose}>
                                <Modal.Header closeButton style={{ backgroundColor: "#AFE1AF" }}>
                                    <Modal.Title>Cancel</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>Are You sure you want to cancel? <br /> This would discard all saved changes</p>
                                    <Row>
                                        <Col><Button variant="secondary" onClick={handleClose}>Cancel</Button></Col>
                                        <Col className="text-end"><Button variant="success" className='shadow-lg loginbuttons'>Yes</Button></Col>
                                    </Row >
                                </Modal.Body>
                            </Modal>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>)}
            {
                viewDetails && (
                    <Card className='my-3'>
                        {(getprofiledata?.result) ? (
                            <Card.Body className="p-5">
                                <Row>
                                    <Col>
                                        <h5 className="fw-bold">Personal Information</h5>
                                    </Col>
                                    <Col className='text-end'>
                                        <Button variant='outline-success' onClick={onEdit}><FontAwesomeIcon icon={faPen} /> Edit</Button>
                                    </Col>
                                </Row>
                                <Row className='mt-3'>
                                    <Col xs={3} className="fw-bold">Mobile Number</Col>
                                    :<Col>{mobile}</Col>
                                </Row>
                                <Row className='mt-3'>
                                    <Col xs={3} className="fw-bold">Email ID</Col>
                                    :<Col>{emailid}</Col>
                                </Row>
                                <Row className='mt-3'>
                                    <Col xs={3} className="fw-bold">First Name</Col>
                                    :<Col>{firstname} </Col>
                                </Row>
                                <Row className='mt-3'>
                                    <Col xs={3} className="fw-bold">Last Name</Col>
                                    :<Col>{lastname}</Col>
                                </Row>
                                <Row className='mt-3'>
                                    <Col xs={3} className="fw-bold">Gender</Col>
                                    :<Col>{gender}</Col>
                                </Row>
                                <Row className='mt-3'>
                                    <Col xs={3} className="fw-bold">Date Of Birth</Col>
                                    :<Col>{dob}</Col>
                                </Row>
                            </Card.Body>
                        ) : <div className='mt-2 text-center'>
                            <div class="snippet" data-title="dot-falling">
                                <div className="lds-dual-ring"></div>
                                <div class="stage text-success fw-bold">
                                    Loading...
                                </div>
                            </div>
                        </div>}
                    </Card>
                )
            }
            <Card className='my-3'>
                <Card.Body>

                    {GuestData.map((item, index) => {
                        return (
                            <>
                                <h5 className="fw-bold mb-4">Add Guest {index + 1}</h5>
                                <Row>
                                    <Col>
                                        <Form.Floating className="mb-3">
                                            <Form.Control
                                                id="firstName"
                                                type="text"
                                                size="sm"
                                                value={GuestData[index].firstname}
                                                onChange={(e) => handleGuestedit(e.target.value, index, "firstname")}
                                            />
                                            <label htmlFor="floatingInputCustom">First Name</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col>
                                        <Form.Floating className="mb-3">
                                            <Form.Control
                                                id="lastName"
                                                type="text"
                                                size="sm"
                                                value={GuestData[index].lastName}
                                                onChange={(e) => handleGuestedit(e.target.value, index, "lastname")}
                                            />
                                            <label htmlFor="floatingInputCustom">Last Name</label>
                                        </Form.Floating>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Floating className="mb-3">
                                            <Form.Control
                                                id="relation"
                                                type="text"
                                                size="sm"
                                                value={GuestData[index].relation}
                                                onChange={(e) => handleGuestedit(e.target.value, index, "relation")}
                                            />
                                            <label htmlFor="floatingInputCustom">Relation</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col>
                                        <Form.Floating className="mb-3">
                                            <Form.Control
                                                id="age"
                                                type="number"
                                                size="sm"
                                                value={GuestData[index].age}
                                                onChange={(e) => handleGuestedit(e.target.value, index, "age")}
                                            />
                                            <label htmlFor="floatingInputCustom">Age</label>
                                        </Form.Floating>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" /* onClick={(e) => handleGuestedit(e.target.value, index, "gender")} */>
                                            <Form.Label>Gender</Form.Label>
                                            <Form.Control required as="select" type="select" name="gender" onChange={(e) => handleGuestedit(e.target.value, index, "gender")}>
                                                <option value="">Select</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </Form.Control>
                                            {/* <label htmlFor="floatingInputCustom">Gender</label>
                                            <Row className='mt-2'>
                                                <Col>
                                                   
                                                    <Form.Check
                                                        id="gender"
                                                        type="radio"
                                                        name="gender"
                                                        value="Male"
                                                        size="sm"
                                                        className="h6"
                                                        label="Male"
                                                        checked={GuestData[index].gender == "Male"}
                                                    />
                                                </Col>
                                                <Col>
                                                    
                                                    <Form.Check
                                                        id="gender"
                                                        type="radio"
                                                        name="gender"
                                                        value="Female"
                                                        className="h6"
                                                        size="sm"
                                                        label="Female"
                                                        checked={GuestData[index].gender == "Female"}
                                                    />
                                                </Col>
                                            </Row> */}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        {/* <Form.Floating className="mb-3">
                                <Form.Control
                                    id="dob"
                                    type="text"
                                    size="sm"
                                    onChange={handleDob}
                                />
                                <label htmlFor="floatingInputCustom">Date Of Birth</label>
                            </Form.Floating> */}
                                    </Col>
                                    {index > 0 ?
                                        <Col xs={4}>
                                            <Button variant="success" className='w-75 shadow-lg loginbuttons' onClick={() => RemoveGuest(index)}>Remove Guest</Button>
                                        </Col>
                                        : null}
                                </Row>
                            </>
                        )
                    })}
                    <Row className='my-4'>
                        <h6 className="font-weight-bold text-danger mt-2">{guestErrorMsg}</h6>
                        <Col xs={4}>
                            <Button variant="success" className='w-75 shadow-lg loginbuttons' onClick={onHandleGuestSave}>SAVE</Button>
                        </Col>
                        <Col xs={4}>
                            <Button variant="light" className='w-75 shadow-lg loginbuttons' onClick={() => handleAddGuest()}>Add more Guests</Button>
                            {/* <Modal centered show={show} onHide={handleClose}>
                                <Modal.Header closeButton style={{ backgroundColor: "#AFE1AF" }}>
                                    <Modal.Title>Cancel</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>Are You sure you want to cancel? <br /> This would discard all saved changes</p>
                                    <Row>
                                        <Col><Button variant="secondary" onClick={handleClose}>Cancel</Button></Col>
                                        <Col className="text-end"><Button variant="success" className='shadow-lg loginbuttons' >Yes</Button></Col>
                                    </Row >
                                </Modal.Body>
                            </Modal> */}
                        </Col>

                    </Row>
                </Card.Body>
            </Card>

            {/* {
                viewGuestDetails && (
                    <Card className='my-3'>
                        <Card.Body className="p-5">
                            <Row>
                                <Col>
                                    <h5 className="fw-bold">Guest Details</h5>
                                </Col>
                                <Col className='text-end'>
                                    <Button variant='outline-success' onClick={onEdit}><FontAwesomeIcon icon={faPen} /> Edit</Button>
                                </Col>
                            </Row>
                            <Row className='mt-3'>
                                <Col xs={3} className="fw-bold">First Name</Col>
                                <Col>{guestFirstName}</Col>
                            </Row>
                            <Row className='mt-3'>
                                <Col xs={3} className="fw-bold">Last Name</Col>
                                <Col>guestLastName</Col>
                            </Row>
                            <Row className='mt-3'>
                                <Col xs={3} className="fw-bold">Relation</Col>
                                <Col>{guestRelation}</Col>
                            </Row>
                            <Row className='mt-3'>
                                <Col xs={3} className="fw-bold"></Col>
                                <Col>{guestAge}</Col>
                            </Row>
                            <Row className='mt-3'>
                                <Col xs={3} className="fw-bold">Gender</Col>
                                <Col>Female</Col>
                            </Row>
                            <Row className='mt-3'>
                                <Col xs={3} className="fw-bold">Date Of Birth</Col>
                                <Col>07/05/2002</Col>
                            </Row>
                        </Card.Body>
                    </Card>
                )
            } */}
        </>
    )
}

export default UserDetails

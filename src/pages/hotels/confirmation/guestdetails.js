import React, { useState } from 'react';
import { Accordion, Row, Col, Card, Form, InputGroup ,Button} from 'react-bootstrap';
import CountryCode from '../../../component/countrycode/countrycode';
import { useHistory } from 'react-router-dom';
import { HOTELGUESTINFO } from '../../../store/constants';
import { useDispatch } from 'react-redux';
const GuestDetails = ({handleValidate}) => {

    const [formValues, setFormValues] = useState([{ title: '', first_name: "", last_name: "" }])
    const [view, setView] = useState(false)
    const dispatch = useDispatch()
    let addFormFields = () => {
        setFormValues([...formValues, { title: 'mr', first_name: "", last_name: "" }])
    }
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    const guestdetails = JSON.parse(localStorage.getItem('roomGuest'));
    console.log('roomGuest', guestdetails)
    

    const handleValue = (i, e,value) => {
        // console.log("invalid",i,e.target.name,value)
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = value;
        setFormValues(newFormValues);

     }

//    const[fielderror,setFielderror]=useState("")

//    const [name,setName]=useState("")
//    const [lastname,setLastname] = useState("")

//    const handleFirstname =(event) =>{
//        setName(event)
//    }

//    const handleLastname =(event) => {
//     setLastname(event)
// }

    return (
        <>
            <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="1" className='mt-3'>
                <Accordion.Header><h5>Guest details</h5></Accordion.Header>
                <Accordion.Body>
                    <Card className='border-light'>
                        <Card.Body>
                            {console.log("guestdetails.length..........",guestdetails.length)}
                            {[...Array(guestdetails?.length)].map((element, index) =>{
                                return(
                                <div className="form-inline mt-4" key={index}>
                                    <h6>Room {index+1}</h6>
                                    {[...Array(guestdetails[index].NoOfAdults)].map((element, idx) =>(
                                    <Row className='border p-3 mt-3'>
                                        <h6 className='text-muted mt-3'>Adult {idx+1}</h6>
                                        <Col xs={2}>
                                            <Form.Label>Title</Form.Label>
                                            <Form.Select name="title" aria-label="Gender"  required>
                                                <option value="1">Mr</option>
                                                <option value="2">Mrs</option>
                                                <option value="3">Miss</option>
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">invalid</Form.Control.Feedback>
                                        </Col>
                                        <Form.Group as={Col}  controlId="validation2">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control
                                                placeholder="Enter Fist Name"
                                                aria-label="Name"
                                                name="first_name"
                                                // value={formValues[index].first_name}
                                                // onChange={(e) => handleValue(index, e, e.target.value)}
                                                pattern="[A-Za-z]{3,}"
                                                aria-describedby="basic-addon1"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">Please Enter the first Name</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col}  controlId="validation3">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control
                                                name="last_name"
                                                placeholder="Enter Last Name"
                                                aria-label="LastName"
                                                // value={formValues[index].last_name}
                                                pattern="[A-Za-z]{1,}"
                                                // onChange={(e) => handleValue(index, e, e.target.value)}
                                                aria-describedby="basic-addon1"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">Please Enter the Last Name</Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    ))}
                                    {[...Array(guestdetails[index].NoOfChild)].map((element, idx) =>(
                                    <Row className='border p-3 mt-3'>
                                        <h6 className='text-muted'>Child {idx+1}</h6>
                                        <Col xs={2}>
                                            <Form.Label>Title</Form.Label>
                                            <Form.Select name="title" aria-label="Gender"  required>
                                                <option value="1">Mstr</option>
                                                <option value="3">Miss</option>
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">invalid</Form.Control.Feedback>
                                        </Col>
                                        <Form.Group as={Col}  controlId="validation2">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control
                                                placeholder="Enter Fist Name"
                                                aria-label="Name"
                                                name="first_name"
                                                // value={formValues[index].first_name}
                                                // onChange={(e) => handleValue(index, e, e.target.value)}
                                                pattern="[A-Za-z]{3,}"
                                                aria-describedby="basic-addon1"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">Please Enter the first Name</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col}  controlId="validation3">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control
                                                name="last_name"
                                                placeholder="Enter Last Name"
                                                aria-label="LastName"
                                                // value={formValues[index].last_name}
                                                pattern="[A-Za-z]{1,}"
                                                // onChange={(e) => handleValue(index, e, e.target.value)}
                                                aria-describedby="basic-addon1"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">Please Enter the Last Name</Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    ))}
                                </div>
                            )})}
                            <Form.Group as={Col}  controlId="validation4">
                            <InputGroup size="sm" className="my-3 w-50">
                                <Form.Label>Mobile Number</Form.Label>
                                <InputGroup >
                                    <Form.Select aria-label="Gender" className='w-25'>
                                        <CountryCode className="ms-2"/>
                                    </Form.Select>
                                    <Form.Control
                                        placeholder="Mobile Number"
                                        aria-label="Mobile Number"
                                        aria-describedby="basic-addon1"
                                        className='w-75'
                                        name="number"
                                        // onChange={(e)=>setNumber(e.target.value)}
                                        pattern="[0-9]{10}"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">Please Enter the Mobile number</Form.Control.Feedback>
                                </InputGroup>
                            </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3 w-50">
                                <Form.Label>Email <span className='small'>(Your E-ticket and updates will be sent here)</span></Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
                                <Form.Control.Feedback type="invalid">Please Enter the email ID</Form.Control.Feedback>
                            </Form.Group>
                            <Button className='btn btn-primary' onClick={handleValidate}>Submit</Button>
                     
                        </Card.Body>
                        <Card.Footer>
                            <InputGroup>
                                <Form.Check type="checkbox" onInput={() => setView(view => !view)} />
                                <Form.Label><h6>&nbsp;&nbsp; Enter GST Details <span className='small'>(Optional)</span></h6></Form.Label>
                            </InputGroup>
                            {view && (
                                <>
                                    <div class="row">
                                        <div class="col-4">
                                            <Form.Group className="mb-3" >
                                                <Form.Label><h6>GST Number</h6></Form.Label>
                                                <Form.Control type="text" placeholder="EG: 22AAAAA0000A1Z5" />
                                            </Form.Group>
                                        </div>
                                        <div class="col-4" >
                                            <Form.Group className="mb-3" >
                                                <Form.Label><h6>Company Name</h6></Form.Label>
                                                <Form.Control type="text" placeholder="Company Name" />
                                            </Form.Group>
                                        </div>
                                        <div class="col-4">
                                            <Form.Group className="mb-3" >
                                                <Form.Label><h6>Business Email</h6></Form.Label>
                                                <Form.Control type="text" placeholder="Business Email ID" />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="">
                                            <Form.Group className="mb-3" >
                                                <Form.Label><h6>Company Address</h6></Form.Label>
                                                <Form.Control type="text" placeholder="Company Address" />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4">
                                            <Form.Group className="mb-3" >
                                                <Form.Label><h6>Phone Number</h6></Form.Label>
                                                <Form.Control type="text" placeholder="Phone Number" />
                                            </Form.Group>
                                        </div>
                                        <div class="col-4">
                                            <Form.Group className="mb-3" >
                                                <Form.Label><h6>Country</h6></Form.Label>
                                                <Form.Control type="text" placeholder="Country" />
                                            </Form.Group>
                                        </div>

                                            <Form.Group className="">
                                                <Form.Label><h6>Business Email</h6></Form.Label>
                                                <Form.Control type="text" placeholder="Business Email ID" />
                                            </Form.Group>
                                        </div>

                                    <div class="row">
                                        <div class="">
                                            <Form.Group className="mb-3" >
                                                <Form.Label><h6>Company Address</h6></Form.Label>
                                                <Form.Control type="text" placeholder="Company Address" />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4">
                                            <Form.Group className="mb-3" >
                                                <Form.Label><h6>Phone Number</h6></Form.Label>
                                                <Form.Control type="text" placeholder="Phone Number" />
                                            </Form.Group>
                                        </div>
                                        <div class="col-4">
                                            <Form.Group className="mb-3" >
                                                <Form.Label><h6>Country</h6></Form.Label>
                                                <Form.Control type="text" placeholder="Country" />
                                            </Form.Group>
                                        </div>
                                        <div class="col-4">
                                            <Form.Group className="mb-3" >
                                                <Form.Label><h6>State</h6></Form.Label>
                                                <Form.Control type="text" placeholder="State" />
                                            </Form.Group>
                                        </div>
                                    </div>
                                </>
                            )}
                        </Card.Footer>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        </>
    )


}

export default GuestDetails;
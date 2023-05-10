import React ,{useEffect, useState} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadCarBook } from "../../../../store/actions/carbook"; 

const CarFareDetails = () => {
    const[submitData,setsubmitData]=useState(null);
    let history = useHistory();
    /* onclick setting data to trigger useEffect for  dispatch */
    const handleSubmit = () => {
        setsubmitData( {

            "EndUserIp":"107.180.105.183",
            "ClientId": "180109",
            "UserName":"SKdigPa8",
            "Password": "A$JSkEf4#4",
            "SrdvIndex": "SRDV-4",
            "TraceID":"1",
            "PickUpTime":"18:00",
            "DropUpTime":"18:00",
            "RefID":"77894",
            "CustomerName":"Amit Singh",
            "CustomerPhone":"9643737502",
            "CustomerEmail":"support@srdvtechnologies.com",
            "CustomerAddress":"Noida"     
         })
        history.push('/car/CarPayment',{state:{carfare}})
    };

     /* # Car book dispatch */

     const dispatch = useDispatch();

     useEffect(() => {
         if (submitData!=null){
             dispatch(loadCarBook(submitData));
         }else{
            //  console.log("data yet to come")
         }
     
        
     }, [submitData]);
 

    const location = useLocation();

   
    const [carfare,setCarfare] = React.useState(location.state.state.data)


   
    
    return (
        <Card>
            <Card.Header className="bg-white">
                <div className="row">
                    <div className="col-8">
                        <h4>Price Summary</h4>
                        <h6 className="small"> Inclusive of GST</h6>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <div className="row">
                    <div className="col-8">
                        <h6 className="mb-0">Base Fare</h6><small className="text-danger mt-0">(OutStationPerKmRate=₹{carfare.Fare.OutStationPerKmRate})</small>
                    </div>
                    <div className="col-4" style={{ textAlign: "right" }}>
                        <b>₹{carfare.Fare.BaseFare}</b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <h6>Advance Amount</h6>
                    </div>
                    <div className="col-4" style={{ textAlign: "right" }}>
                        <b>
                          ₹{carfare.Fare.AdvanceAmount}
                        </b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <h6>Service Tax</h6>
                    </div>
                    <div className="col-4" style={{ textAlign: "right" }}>
                        <b>
                         ₹{carfare.Fare.TotalServiceTax}
                        </b>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-8">
                        <h6>Total Amount</h6>
                    </div>
                    <div className="col-4" style={{ textAlign: "right" }}>
                        <b className="text-danger">
                           ₹{carfare.Fare.TotalAmount}
                        </b>
                    </div>
                </div>
                <br/>
                <div className=" d-grid gap-2">
                    <Button style={{ backgroundColor: "orangered", border: "orangered" }} onClick={handleSubmit}>Pay &amp; confirm now</Button>
                </div>

            </Card.Body>
        </Card>
    )
}

const Promte = () => {
    return (
        <Card className="mt-4">
            <Card.Header className="bg-white">
                <h4>Offers</h4>
            </Card.Header>
            <Card.Body>
                {/* <Form>
                    <div className="row border rounded m-1">
                        <div className="col-1">
                            <Form.Check
                                name="offers"
                                type="radio"
                            />
                        </div>
                        <div className="col-9">
                            <Form.Label className="">
                                <h5>GOCITI</h5>
                                <h6 className="small">Use this code to get to get ₹500 off on CITIBANK Credit/Debit cards</h6>
                            </Form.Label>
                        </div>
                    </div>
                    <div className="row border rounded m-1">
                        <div className="col-1">
                            <Form.Check
                                name="offers"
                                type="radio"
                            />
                        </div>
                        <div className="col-9">
                            <Form.Label className="">
                                <h5>GOFESTIVE</h5>
                                <h6 className="small">Get additional discount of ₹150 using this offer code</h6>
                            </Form.Label>
                        </div>
                    </div>
                    <div className="row border rounded m-1">
                        <div className="col-1">
                            <Form.Check
                                name="offers"
                                type="radio"
                            />
                        </div>
                        <div className="col-9">
                            <Form.Label className="">
                                <h5>CABOFFER</h5>
                                <h6 className="small">Get up-to ₹100 Off on Outstation Cab transactions</h6>
                            </Form.Label>
                        </div>
                    </div>
                    <div className="row  m-1">
                        <div className="container border mt-1">
                            <h5>ENTER PROMO CODE</h5>
                        </div>
                        <div className="container border">
                            <InputGroup className="my-3 ">
                                <Form.Control
                                    placeholder="Got A Promote code? Enter"
                                    variant="outline-secondary"
                                />
                                <Button variant="outline-secondary"><FontAwesomeIcon icon={faAnglesRight} />
                                </Button>
                            </InputGroup>
                        </div>
                    </div>
                </Form> */}
            </Card.Body>
        </Card>
    )
}

const CarTripFare = () => {
    return (

        <>
            <CarFareDetails />
            <Promte />
        </>

    )
};

export default React.memo(CarTripFare);
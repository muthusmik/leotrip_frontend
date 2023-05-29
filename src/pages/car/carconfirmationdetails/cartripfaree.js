import React ,{useEffect} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadCarBook } from "../../../store/actions/carbook"; 

const CarFareDetails = ({ selected }) => {
    // const[submitData,setsubmitData]=useState(null);
    let history = useHistory();
    /* onclick setting data to trigger useEffect for  dispatch */
    const handleSubmit = () => {
        const carBook ={

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

        }
        dispatch(loadCarBook(carBook));
        history.push('/CarPayment',{state:{carfare}})
    };

    
     /* # Car book dispatch */

     const dispatch = useDispatch();
 

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
                {(selected == false) ?( 
                    <>
                    <h6 className="small text-danger text-center">Please fill the Traveler details and proceed the form</h6>
                    <Button variant="primary" disabled  >Pay &amp; confirm now</Button></>
                ):(<Button variant="primary"  onClick={handleSubmit}>Pay &amp; confirm now</Button>)}
                </div>

            </Card.Body>
        </Card>
    )
}

 
export default CarFareDetails
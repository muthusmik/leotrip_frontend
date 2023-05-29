import React from "react";
import '../triphistory.scss'
import { Tabs, Tab, Card, Row, Col, Button } from 'react-bootstrap';
import travels from '../../../asset/images/login/travels.png';
const TripMsg = () => {
    return (
        <>
            <Card>
                <Row>
                    <Col xs={4} className='p-4'>
                        <img src={travels} alt="travels" width={250} />
                    </Col>
                    <Col xs={5} className='mt-5'>
                        <h6>Looks like you have never booked with Hojoy
                            <span className='h5 fw-bold'>When you book your trips your transaction will be shown here.</span></h6>
                        {/* <Button className='mt-3'>Start Booking Now</Button> */}
                    </Col>
                </Row>
            </Card>
        </>
    )
}


const BusTransactionData = ({Bustns}) => {
    console.log("BustnsBustnsBustns",Bustns);
    const numberFormat = (value, cur) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: cur,
            maximumFractionDigits: 0
        }).format(value);

    return (
        <>
         <Card className='mb-3 '  style={{backgroundColor:"#f2f2f2"}}>
                            <Card.Body>
                                <Row className='fw-bold ms-2'>
                                    <Col xs={2}>Name</Col>
                                    <Col>Txn id</Col>
                                    <Col  xs={3}></Col>
                                    <Col xs={2}>PaymentMethod</Col>
                                    <Col >Amount</Col>

                                    <Col>Status</Col>
                                    
                                </Row>
                            </Card.Body>
                        </Card>

            {(Bustns?.result?.length > 1) ? Bustns.result.map((bus, index) => (
                <Card key={index} className="my-3">
                    <div className="bustnsvalue">
                    {console.log("Bustns?.result?.length > 1)",bus)}
                        <Row className='px-3 py-2'>
                            <Col xs={2}>
                            <h6 className="fw-bold">{bus.firstname}</h6>
                            </Col>
                            <Col xs={4}>
                            <span className='datainfo'>{bus.txnid}</span><br/>
                            <span>({bus.addedon})</span>
                            </Col>
                            <Col xs={3} className='text-center'>
                                <h6 className='fw-bold'>{bus.mode}</h6>
                               <span className='datainfo'>{bus.field8}</span>
                            </Col>
                            <Col>
                                <span className='h5 fw-bold text-danger'>{numberFormat(bus.net_amount_debit, "INR")}</span>
                            </Col>
                            <Col xs={2}>
                                <span className='float-end h6 text-success'>{bus.status}</span>
                            </Col>
                            <Col></Col>
                        </Row>
                    </div>
                </Card>
            )) : <TripMsg />}
        </>
    )

}
export default BusTransactionData;
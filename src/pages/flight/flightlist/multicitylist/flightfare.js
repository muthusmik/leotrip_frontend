import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import flight from '../../../../asset/images/flight/airindia.png';

export default function FlightFare({ selected }) {
    return (
       
       
          <Card className='my-3'>
            <Card.Body>
                <h5 className='fw-bold'>Your Ticket</h5>
                <Row className='border my-2'>
                    <Col><img src={selected.path} alt='flight' width={30}/></Col>
                    <Col xs="6" className='h6 '>{selected.fromid} - {selected.toid} <br /><span className='small text-muted'>{selected.deptime}  {selected.traveltime} (1 Stop)</span></Col>
                    <Col >{selected.returntime}</Col>
                    <Col className='h6'>{selected.price}</Col>
                </Row>
                <Row className='border'>
                    <Col><img src={flight} alt='flight' width={30}/></Col>
                    <Col xs="6" className='h6 '>MAA - IXA, 28 Nov <br /><span className='small text-muted'>08:00 8h 05m (1 Stop)</span></Col>
                    <Col>16:05</Col>
                    <Col className='h6'>22,716</Col>
                </Row>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col className='h6'>Your pay</Col>
                    <Col className='h6'>&#x20B9; {`${selected.total + 22716}`}</Col>
                    <Col><Button>Book</Button></Col>
                </Row>
            </Card.Footer>
        </Card>
      
    )
}

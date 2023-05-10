import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const Promote = () => {
    return (
        <Card className="mt-4">
            <Card.Header className="bg-white">
                <h4>Offers</h4>
            </Card.Header>
            <Card.Body>
                <Form>
                    {/* <div className="row border rounded m-1">
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
                    </div> */}
                    <div className="fw-bold h5">
                        <div class="stage">
                            coming soon<span class="dot-flashing"></span>
                        </div>
                    </div>
                    {/* <div className="row  m-1">
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
                    </div> */}
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Promote
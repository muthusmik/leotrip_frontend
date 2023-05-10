import React,{useState} from 'react';
import { Accordion, Row, Col, Card, Modal, Button, Table, InputGroup, Form, Badge } from 'react-bootstrap';
import safe from '../../../asset/images/hotel/covid.png';
import tata from '../../../asset/images/hotel/TAGIC.jpg';


export const Insurance = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [view, setView] = useState(true);

    return (
        <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="1" className='mt-3'>
            <Accordion.Header>
                <Row>
                    <Col xs={1}>
                        <img src={safe} alt="hotel" width={45} />
                    </Col>
                    <Col>
                        <h5 className='insure'>Secure your stay</h5>
                        <h6 className='small'>Insurance will be sent to the registered Email ID, within 48 hours of booking.</h6>
                    </Col>
                </Row>
            </Accordion.Header>
            <Accordion.Body className='border p-2'>
                <Card className='p-2'>
                    {view && (<Row>
                        <Col xs={7} >

                            <h5 className='insure'>Worry-Free Hotel Stay!</h5>
                            <ul className="list text-muted">
                                <li >Upto ₹ 10K for hotel booking cancellation charges if cancelled due to illness</li>
                                <li>Upto ₹ 20K for bounced booking</li>
                                <li>Upto ₹ 20K for loss of laptops and tablets</li>
                                <li >Upto ₹ 20K for loss of baggage</li>
                                <li>Upto ₹ 10K for cost of return travel in case of trip interruption</li>
                                <li>Upto ₹ 10K for hotel extension in case of hospitalization</li>
                            </ul>
                            <h6 className='text-primary small fw-bold' onClick={() => setModalShow(true)}>View benefits</h6>
                        </Col>
                        <Col xs={5}>
                            <div className='text-end h-75'>
                                <img src={tata} alt="Tata" width={50} height={50} />
                            </div>
                            <div>
                                <Row>
                                    <Col xs={8}>
                                        <h6 className="small text-end text-muted"><span className='h5 tet-dark'>₹19</span> per person<br /> <span className='text-danger'>Non Refundable</span> | Includes GST</h6>
                                    </Col>
                                    <Col xs={4}>
                                        <Button variant="outline-danger" onClick={() => setView(false)}><span className='fw-bold'>+ADD</span></Button>
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                    </Row>
                    )}
                    {!view && (
                        <Row>
                            <Col xs={7} >
                                <h5 className='insure'>Worry-Free Hotel Stay!</h5>
                                <h6 className='text-primary small fw-bold' onClick={() => setModalShow(true)}>View benefits</h6>

                            </Col>
                            <Col xs={5}>
                                <div className='text-end h-75'>
                                    <img src={tata} alt="Tata" width={50} height={50} />
                                </div>



                            </Col>
                            <Row className='m-3'>
                                <Col xs={10}>
                                    <h6 className="small text-end text-muted"><span className='h5 tet-dark'>₹19</span> per person<br /> <span className='text-danger'>Non Refundable</span> | Includes GST</h6>
                                </Col>
                                <Col xs={2}>
                                    <Button variant="outline-danger" onClick={() => setView(true)}><span className='fw-bold'>- Remove</span></Button>
                                </Col>
                            </Row>
                        </Row>
                    )}

                </Card>
                <Modal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    className='InsuranceModal'
                    centered
                    scrollable={true}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Insurance
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <section class="policySection">
                            <h3>Policy Overview&nbsp;</h3>
                            <p class="font14 line-height20 append-bottom10">The insurance is issued by TATA AIG General Insurance
                                Company Ltd and is valid for duration mentioned in the Certificate of Insurance to the users of the
                                Hojoy (India) Private Limited. &nbsp;</p>
                            <ul class="policySectionList">
                                <Table bordered >
                                    <tbody>
                                        <tr>
                                            <th>Age Criteria</th>
                                            <td>6 months - 60 years</td>
                                        </tr>
                                        <tr>
                                            <th>Policy Duration</th>
                                            <td>Check In Date to Check Out Date</td>
                                        </tr>
                                        <tr>
                                            <th>Insurance Provider</th>
                                            <td>TATA AIG General Insurance Company Ltd</td>
                                        </tr>
                                        <tr>
                                            <th>Product Name</th>
                                            <td>Group Domestic Travel Assure</td>
                                        </tr>
                                        <tr>
                                            <th>UIN</th>
                                            <td>TATTGDP21564V012021</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </ul>
                            <div class="policyDecList">
                                <h4>Inclusions </h4>
                                <Table bordered>
                                    <thead>
                                        <tr>
                                            <th>Construct - Benefits</th>
                                            <th>Sum Insured</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Medical Expense- for any Accident and Illness including COVID19</th>
                                            <td>INR 3,00,000</td>
                                        </tr>
                                        <tr>
                                            <th>Outpatient medical expenses for illness or injury including COVID19</th>
                                            <td>INR 25,000</td>
                                        </tr>
                                        <tr>
                                            <th>Repatriation of Mortal Remains</th>
                                            <td>INR 10,000</td>
                                        </tr>
                                        <tr>
                                            <th>Bounced Booking of Accomodation: In case of bounced booking of accommodation, Insured is entitled to get the alternate room subject
                                                to the maximum of two times of the the room rent booked originally through Gobibo app/website. Tata AIG’s maximum liability will be restricted
                                                upto the amount of original room rent booked on the Hojoy Website or app</th>
                                            <td>INR 20,000</td>
                                        </tr>
                                        <tr>
                                            <th>Emergency Accomodation Extension: Applicable in the event of extension of Insured Person’s Trip
                                                due to the Insured Person’s Hospitalization for more than 5 days</th>
                                            <td>INR 10,000</td>
                                        </tr>
                                        <tr>
                                            <th>Hotel Cancellation charges if insured cancels the booking due to any illness for self,  immediate family members, government imposed travel restrictions or natural calamities (Non Refundable Accomodation cost covered under Trip Interruption)</th>
                                            <td>INR 10,000</td>
                                        </tr>
                                        <tr>
                                            <th>Cost of return travel due to trip interruption(Non Refundable Travel Cost is covered in Trip Interruption)</th>
                                            <td>INR 10,000</td>
                                        </tr>
                                        <tr>
                                            <th>Medical Evacuation</th>
                                            <td>INR 10,000</td>
                                        </tr>
                                        <tr>
                                            <th>Loss of baggage and personal effects during trip-Restricted only to hand bag, Not covered if loss because of negligence . Loss in car/cab/any private/commercial vehicle not covered</th>
                                            <td>INR 20,000</td>
                                        </tr>
                                        <tr>
                                            <th>Electronic Equipment Cover: Only theft of laptop and Tablets is covered 2. Not covered if loss is because of negligence 3. Loss in car/cab/any private/commercial vehicle /public place not covered 4.Mobiles phones are not covered 5. FIR would be mandatory</th>
                                            <td>INR 20,000</td>
                                        </tr>
                                        <tr>
                                            <th>Personal Accident (Accidental Death &amp; Permanent Total Disability)</th>
                                            <td>INR 10,00,000</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <ul>
                                    <li>Medical Expenses for any accident and illness including COVID19 will be applicable, if testing and diagnosis happens during hotel stay and there is an active line of treatment during hospitalization stay.</li>
                                    <li>Outpatient medical expenses for any illness or injury including COVID19 will be applicable if testing and diagnosis happens during hotel stay and there is an active line of treatment advised by a physician.</li>
                                    <li>Covid-19 is covered only if detection &amp;treatment of the same is within the hotel stay only</li>
                                    <li>Emergency Care means management for an illness or injury which results in symptoms which occur suddenly and unexpectedly, and requires immediate care by a medical practitioner to prevent death or serious long term impairment of the insured person’s health </li>
                                    <li>Only covid confirmed moderate to severe symptoms for emergency care are covered</li>
                                </ul><br /><br />

                                <h3 class="bold append-bottom10 line-height18 font14">Exclusions</h3>
                                <ul>
                                    <li>The insurance cover is not valid for customers who are:&nbsp;&nbsp;</li>
                                    <li>Recommended quarantine at the time of enrolment in this
                                        policy</li>
                                    <li>Immunocompromised. Immunocompromised Persons include Persons
                                        who have undergone Hospitalization, surgery or Day Care procedure(s) within 90 days immediately
                                        preceding the Certificate Period Start Date&nbsp;</li>
                                    <li>Living with or sharing the same address as that of person(s)
                                        who is Diagnosed with COVID-19 or Quarantined at the time of purchase of this policy.&nbsp;</li>
                                    <li>Customers who have travelled to the travel-restricted
                                        countries specified by the Central Government or Union Health Ministry of India in 45 days
                                        immediately preceding the policy Start Date.&nbsp;</li>
                                    <li>Treatment received outside India, unless specified in the Policy.&nbsp;</li>
                                    <li>Any form of Alternative Treatment, unless opted under the Policy.</li>
                                </ul><br />
                                <p class="append-bottom10 line-height18 font14">The insurance policy does not cover treatment for
                                    pre-existing diseases/ conditions or Testing done at a Diagnostic center other than the ones
                                    authorized by the Union Health Ministry of India</p>
                            </div>
                            <div class="tncSection">
                                <h4>Other terms and conditions&nbsp;</h4>
                                <p class="append-bottom15">The Certificate of Insurance will be provided by TATA AIG General Insurance Company Ltd in the name of the individual as registered with Hojoy, on his/her email id within 3 working days of the transaction.&nbsp;</p>
                                <p>For detailed T&amp;C, customer can refer Group Domestic Travel Assure policy <span className='link-primary'>here</span>.</p>
                                &nbsp;
                            </div>
                        </section>
                    </Modal.Body>
                </Modal>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>

    )
}

export const PaymentOption = () => {
    return (
        <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="1" className='mt-3'>
                <Accordion.Header>
                    <h5 className='insure'>SELECT PAYMENT OPTION</h5>
                </Accordion.Header>
                <Accordion.Body>
                    <Card className='rounded p-3'>
                        <Row>
                            <Col xs={1}>
                                <Form.Check type="radio" name="paymentoption" />
                            </Col>
                            <Col xs={10}>
                                <Badge bg="success">Book @ ₹100</Badge>
                                <h5 className='fw-bold'>Pay only ₹100 now to get a confirmed booking and the remaining amount of ₹2398 before 25 Oct '22 using any payment option to avoid auto cancellation</h5>
                                <p className='text-success small'>Free cancellation till Oct 27, 2022 11:59 hours</p>
                                <p className='text-primary small bold'
                                // onClick={() => setModalShow(true)}
                                >Know More</p>
                            </Col>
                            <Col xs={1}>

                            </Col>
                        </Row>
                    </Card>
                    <Card className='rounded p-3 mt-2 GuestCount'>
                        <Form.Check type="radio" label="Pay entire ₹2399 now" name="paymentoption"  />
                    </Card>

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}


const HotelConfirmationDetail = () => {
    React.useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
    // console.log("hi shyam")
    return (
        <>
            
        </>
    )
}

export default HotelConfirmationDetail;
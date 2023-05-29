import React, { useState } from 'react';
import '../../flightlist/flightlist.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import Flight from '../../../../asset/images/flight/flight.png';
import Tab from 'react-bootstrap/Tab';
import { Tabs, Form} from 'react-bootstrap';
import TicketCard from '../../../../json/Flight/ticketlist';

const Flightbookinglist = ({onhandle}) => {

    const [show, setShow] = useState(false);
    const[view,setView]= useState('');
    const handleClick = (index) => {
        setView(index)
        if (show === true) {
            setShow(false);
        } else {
            setShow(true);
        }
    };

    

    return (
        < div className='ticket-content'>
            <div className='mt-4'>
                <ul className='labellist'>
                    <li>AIRLINE</li>
                    <li>DEPARTURE</li>
                    <li>DURATION</li>
                    <li className='me-3'>ARRIVAL</li>
                    <li>PRICE</li>
                    <li className='me-3'></li>
                </ul>
            </div>
            {TicketCard.map((card, index) => (
                <div key={index} className='ticketcard'>
                    <div className='ticketdeals'>
                        <div className='d-flex'>
                            <FontAwesomeIcon icon={faTag} className="tag" />
                            <span className='taglabel'>
                                Deal
                            </span>
                            <h6 className='mt-1 dealcoupon'>{card.code}</h6>
                        </div>
                    </div>
                    <div className='ticketcontent py-2'>
                        <ul className='d-flex'>
                            <li className='ms-3'>
                                <div className='ticketdata'>
                                    <img src={card.path} alt="img" style={{ height: "50px", width: "50px" }} />
                                    <div className='ms-2'>
                                        <p className='mb-0'>{card.flightname}</p>
                                        <span className='datainfo'>{card.flightid}</span>
                                    </div>
                                </div>
                            </li>
                            <li className='me-3'>
                                <h5 className='mb-0'>{card.deptime}</h5>
                                <span className='datainfo'>{card.depfrom}</span>
                            </li>
                            <li className='ms-3'>
                                <img src={Flight} alt="img" className="path mb-0" />
                                <h6 className='datainfo'>{card.traveltime}</h6>
                            </li>
                            <li className='ms-3'>
                                <h5 className='mb-0'>{card.returntime}</h5>
                                <span className='datainfo'>{card.returnto}</span>
                            </li>
                            <li>
                                <span className='ticketprice'>{card.price}</span>
                            </li>
                            <li  className='me-3'>
                                <Form.Check
                                    className='fs-5'
                                    type='radio'
                                    defaultChecked={index==0}
                                    id="book"
                                    name="flight"
                                    onClick={()=>onhandle(card)}
                                />
                            </li>
                        </ul>
                        <div className='row text-center'>
                            <p className='link-ptimary text-center' onClick={()=>handleClick(card.id)}>Flight Details</p>
                        </div>
                    </div>
                     {card.id === view && show && (<div className='onewaytripmoreinfo'>

                        <Tabs
                            defaultActiveKey="overview"
                            id="uncontrolled-tab"
                            className="mb-3"
                        >
                            <Tab eventKey="overview" title="OVERVIEW" className='pb-5'>
                                <div className=' overviews'>
                                    <ul className='mt-3'>
                                        <li>
                                            <img src={card.path} alt="img" style={{ height: "35px", width: "35px" }} />
                                            <div>
                                                <b><span className='fl-label'>{card.flightname}</span></b>
                                                <span className='fl-label'>{card.flightid}</span>
                                            </div>
                                        </li>
                                        <li className='dep-info'>
                                            <p className='mb-0'><b>{card.fromid}</b></p>
                                            <h6 className='mb-0 mt-0'>{card.deptime}</h6>
                                            <span className='mt-0 dep-label'>{card.fromstation}</span>
                                        </li>
                                        <li>
                                            <img src={Flight} alt="img" className="path mb-0" />
                                            <h6 className='datainfo'>{card.traveltime}</h6>
                                        </li>
                                        <li className='return-info me-3'>
                                            <p className='mb-0'><b>{card.toid}</b></p>
                                            <h6 className='mb-0 mt-0'>{card.returntime}</h6>
                                            <span className='mt-0 dep-label'>{card.tostation}</span>
                                        </li>
                                        <li>

                                        </li>
                                    </ul>
                                </div>
                            </Tab>
                            <Tab eventKey="faredetails" title="FARE DETAILS" className='pb-5 table-style'>
                                <table>
                                    <tr>
                                        <td>Base Fare <span className='price-label'>Adult (1 X ₹ 6,550)</span></td>
                                        <td><FontAwesomeIcon icon={faIndianRupeeSign} />6,550</td>
                                    </tr>
                                    <tr>
                                        <td>Taxes and Fees</td>
                                        <td><FontAwesomeIcon icon={faIndianRupeeSign} />913</td>
                                    </tr>
                                    <tr>
                                        <td><b>Total Fare</b></td>
                                        <td><FontAwesomeIcon icon={faIndianRupeeSign} /><b className='text-danger'>7,463</b></td>
                                    </tr>
                                </table>
                            </Tab>
                            <Tab eventKey="baggage" title="BAGGAGE RULES" className='pb-5 table-style'>
                                <table>
                                    <tr style={{ backgroundColor: "#f3f6f8", fontWeight: "bold" }}>
                                        <td>Sector/Flight</td>
                                        <td>Check in Baggage</td>
                                        <td>Cabin Baggage</td>
                                    </tr>
                                    <tr>
                                        <td>{card.fromid} - {card.toid}</td>
                                        <td>{card.checkadultbaggage} | {card.checkchildbaggage}</td>
                                        <td>{card.cabinadultbaggage} | {card.cabinchildbaggage}</td>
                                    </tr>
                                </table>
                            </Tab>
                            <Tab eventKey="cancellation" title="CANCELLATION RULES" className='pb-5' >
                                <div className='cancellation'>
                                    <div className='CancellationCharges'>
                                        <div className='table-style'>
                                            <table>
                                                <tr>
                                                    <td>Ho-Joy</td>
                                                    <td>₹300</td>
                                                </tr>
                                                <tr>
                                                    <td>0-2 hours</td>
                                                    <td>Non Refundable</td>
                                                </tr>
                                                <tr>
                                                    <td>2-24 hours</td>
                                                    <td>Non Refundable</td>
                                                </tr>
                                                <tr>
                                                    <td>more than 24 hours</td>
                                                    <td>₹3,480</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <div className='RescheduleCharges'>
                                        <div className='table-style me-5'>
                                            <table>
                                                <tr>
                                                    <td>Ho-Joy</td>
                                                    <td><FontAwesomeIcon icon={faIndianRupeeSign} />300</td>
                                                </tr>
                                                <tr>
                                                    <td>0-2 hours</td>
                                                    <td>Non Refundable</td>
                                                </tr>
                                                <tr>
                                                    <td>2-24 hours</td>
                                                    <td>Non Refundable</td>
                                                </tr>
                                                <tr>
                                                    <td>more than 24 hours</td>
                                                    <td><FontAwesomeIcon icon={faIndianRupeeSign} />3,480</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>

                    </div>
                    )}
                </div>
            ))}
        </div>
    )

}
export default Flightbookinglist
import React, { useState} from 'react';
import Card from 'react-bootstrap/Card';
import { Form, InputGroup, Tabs, Tab } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import inter from '../../../asset/images/car/inter.jpg'
import exter from '../../../asset/images/car/exter.jpg'
import boot from '../../../asset/images/car/boot.jpg'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import moment from 'moment'

const DriverDetails = () => {
    const [sliderRef, setSliderRef] = useState(null)
    const Destination = JSON.parse(localStorage.getItem('carsearch'));

    const sliderSettings = {
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
    }
    return (
        <>
            <Card className='mt-2 p-4'>
                <div class="container">
                    <h5>Cab &amp; driver details</h5>
                    <div className='row'>
                        <div className='col-2'>
                            <img src="https://gos3.ibcdn.com/CabDriverReviewPageIconMweb-1625479893.png" alt="details" />
                        </div>
                        <div className='col'>
                            <p>Your <b>cab and driver</b> details will be shared via <b>Whatsapp &amp; SMS</b> on your registered mobile number by</p>
                            <p><b>{moment(Destination[2].pickup).format("DD MMM YYYY")}</b></p>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <h5>Images of selected vehicle category</h5>
                    <div className='container border p-2' style={{ fontSize: "13px", backgroundColor: "#FFFACD" }}>Car images shown here are for representation purpose only. Actual car will belong to the same model but may not be the exact one as shown in the images</div>
                </div> */}

                {/* <Tabs
                    defaultActiveKey="ALL"
                    id="uncontrolled-tab-example"
                    className="mb-3 pill"
                    fill
                >
                    <Tab eventKey="ALL" title="ALL">
                        <Slider ref={setSliderRef} {...sliderSettings}>
                            <div>
                                <div className=' card-list text-center'>
                                    <img src={inter}
                                        onError={event => {
                                            event.target.src = "http://photos.hotelbeds.com/giata/original/36/365958/365958a_hb_r_001.jpg"
                                            event.onerror = null
                                        }} width={380} height={270} alt="img"  />
                                </div>
                            </div>
                            <div>
                                <div className=' card-list text-center'>
                                    <img src={exter}
                                        onError={event => {
                                            event.target.src = "http://photos.hotelbeds.com/giata/original/36/365958/365958a_hb_r_001.jpg"
                                            event.onerror = null
                                        }} width={380} height={270} alt="img"  />
                                </div>
                            </div>
                            <div>
                                <div className=' card-list text-center'>
                                    <img src={boot}
                                        onError={event => {
                                            event.target.src = "http://photos.hotelbeds.com/giata/original/36/365958/365958a_hb_r_001.jpg"
                                            event.onerror = null
                                        }} width={380} height={270} alt="img"  />
                                </div>
                            </div>
                        </Slider>
                    </Tab>
                    <Tab eventKey="BOOT" title="BOOT">
                        <Slider ref={setSliderRef} >
                            <div>
                                <div className=' card-list text-center'>
                                    <img src={boot}
                                        onError={event => {
                                            event.target.src = "http://photos.hotelbeds.com/giata/original/36/365958/365958a_hb_r_001.jpg"
                                            event.onerror = null
                                        }} width={380} height={270} alt="img"  />
                                </div>
                            </div>

                        </Slider>
                    </Tab>
                    <Tab eventKey="EXTERIOR" title="EXTERIOR" >
                    <Slider ref={setSliderRef} >
                          
                            <div>
                                <div className=' card-list text-center'>
                                    <img src={exter}
                                        onError={event => {
                                            event.target.src = "http://photos.hotelbeds.com/giata/original/36/365958/365958a_hb_r_001.jpg"
                                            event.onerror = null
                                        }}  width={380} height={270} alt="img" />
                                </div>
                            </div>

                        </Slider>
                    </Tab>
                    <Tab eventKey="INTERIOR" title="INTERIOR" >
                        <Slider ref={setSliderRef}>
                            <div>
                                <div className=' card-list text-center'>
                                    <img src={inter}
                                        onError={event => {
                                            event.target.src = "http://photos.hotelbeds.com/giata/original/36/365958/365958a_hb_r_001.jpg"
                                            event.onerror = null
                                        }}  width={380} height={270} alt="img" />
                                </div>
                            </div>
                        </Slider>
                    </Tab>

                </Tabs> */}

                <div className="mt-1">
                    <h5 class="font16 fontBold textDark">About our drivers</h5>
                    <FontAwesomeIcon icon={faCheck} style={{ color: "green", fontSize: "20px", float: "left", marginRight: "10px" }} />
                    <p >100% of drivers are police verified, licensed and audited</p>
                </div>
            </Card>
            
        </>
    )
}

export default DriverDetails;

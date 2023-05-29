import '../footer/footer.scss'
import Logo from '../../asset/images/logo.png';
import FaceBook from '../../asset/images/facebook.png';
import Instagram from '../../asset/images/instagram.png';
import youtube from '../../asset/images/youtube.png';
import linkedin from '../../asset/images/linkedin.png';
import Android from '../../asset/images/android.png';
import MasterCard from '../../asset/images/master.gif';
import Visa from '../../asset/images/visa.png';
import { NavLink } from 'react-router-dom';
import {useHistory} from 'react-router-dom';


const Footer = () => {

    const history = useHistory();
    const handlePolicy = () => {
        history.push("/home/privacypolicy")
    }
    return (
        <div>
            <div className="footer-bg">
                <div className='container  text-white'>
                    <div className='row'>
                        <div className='col'>
                            <h5>Call Us</h5>
                            <p className='mb-0 ps-2'>89777 81 999</p>
                            <p className='mt-0 ps-2'>89777 82 999 </p>
                            <h5>Email</h5>
                            <p className='ps-2'>booking@hojoy.in</p>
                            <div className='logo'>
                                <h5 className='mb-0'>Ho Joy Comforts</h5>
                                <img src={Logo} alt="logo" className='ps-2' />
                            </div>
                            <div>
                                <h5>Follow Us</h5>
                                <a href="https://www.facebook.com/Abcinka-Hotels-103324405710922" target="_blank" >
                                    <img src={FaceBook} alt="fb" className='ms-2 ' style={{ height: "30px", width: "30px" }} />
                                </a>
                                <a href="https://www.instagram.com/abcinkahotelsresorts/" target="_blank" >
                                    <img src={Instagram} alt="instagram" className='ms-2' style={{ height: "35px", width: "35px" }} />
                                </a>
                                <a href="https://www.linkedin.com/in/abcinka-hotels-resorts-4428a1239/" target="_blank" >
                                    <img src={linkedin} alt="linkedin" className='ms-2' style={{ height: "35px", width: "35px" }} />
                                </a>
                                <a href="https://www.youtube.com/channel/UCJ7FDCJervjl0-BMGtSKTGg" target="_blank" >
                                    <img src={youtube} alt="youtube" className='ms-2' style={{ height: "35px", width: "30px" }} />
                                </a>
                            </div>
                        </div>
                        <div className="col products">
                            <h5>Our Products</h5>
                            <ul className='ourlist'>
                                <li> <NavLink to='/hotel'>Domestic Hotels</NavLink></li>
                                <li><NavLink to='/flight'>International Flights</NavLink></li>
                                <li><NavLink to='/flight'>Domestic Flights</NavLink></li>
                                <li><NavLink to='/flight'>Multi-City Flights</NavLink></li>
                                <li><NavLink to='/bus'>Bus Booking</NavLink></li>
                                <li><NavLink to='/car'>Cab Booking</NavLink></li>
                                <li><NavLink to='/car'>Airport Cabs Booking</NavLink></li>
                                <li><NavLink to='/car'>Outstation Cabs Booking</NavLink></li>
                            </ul>
                        </div>
                        {/* <div className='col'>
                            <h5>Packages</h5>
                            <ul>
                                <li>Goa</li>
                                <li>Kashmir</li>
                                <li>Andaman</li>
                                <li>Kerala</li>
                                <li>Lakshadweep</li>
                                <li>All Packages</li>
                            </ul>
                        </div> */}
                        <div className='col'>
                            <h5>Support</h5>
                            <ul>
                                <li><a onClick={() => { history.push('/home/aboutus') }}>About Us</a></li>
                                <li><a onClick={() => { history.push('/home/contactus') }}>Contact</a></li>
                                <li><a onClick={handlePolicy}>Privacy Policy</a></li>
                                <li><a onClick={() => { history.push('/home/termsandconditions') }}>Terms & Conditions</a> </li>
                            </ul>
                        </div>
                        <div className='col'>
                            <h5>Pay Safely With Us</h5>
                            {/* <p className='ms-2'>The payment is encrypted and transmitted securely with an SSL protocol.</p> */}
                            <img src={Visa} alt="visa" className='ms-2' style={{ height: "35px", width: "35px" }} />
                            <img src={MasterCard} alt="mastercard" className='ms-2' style={{ height: "35px", width: "35px" }} />
                            <br />
                            <span className='ms-2' style={{ fontSize: "10px", color: "powderblue" }}>Download our Android App</span>
                            <img src={Android} alt="android" className='ms-4 mt-1' style={{ height: "50px", width: "180px" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom text-white  d-flex justify-content-center'>
                <h6 className='p-3'>CopyRight © 2023 Hojoy. All Rights Reserved.</h6>
            </div>
        </div>

    );


};
export default Footer;
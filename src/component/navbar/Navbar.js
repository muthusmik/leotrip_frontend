import React, { useState, useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import '../navbar/navbar.scss';
import Homeicon from '../../asset/images/home.png'
import Coin from "../../asset/images/login/coin.png";
import Offers from "../../asset/images/login/discount.png";
import Suitcase from "../../asset/images/login/suitcase.png";
import Logo from '../../asset/images/logo.png';
import Bus from '../../asset/images/bus.png';
import Car from '../../asset/images/car.png';
import Hotel from '../../asset/images/hotels.png';
import Plane from '../../asset/images/airplane.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faToolbox } from '@fortawesome/free-solid-svg-icons';
import Login from "../../pages/authentication/login";
import { Button, Row, Col, Card, Toast } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const CustomNavbar = ({ isSticky, onhandle }) => {

  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  const [modalShow, setModalShow] = React.useState(false);

  const [open, setOpen] = useState(false);

  const toggleShow = () => {
    setOpen(!open)
  }

  useEffect(() => {
  
  }, [modalShow])
  /* # Close toast On clicking outside */

  const refOne = useRef(null);
  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true)
    document.addEventListener("click", hideOnClickOutside, true)
  }, [])
  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false)
    }
  }
  // Hide on outside click
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false)
    }
  }


  const refreshPage = () => {
    window.location.reload();
  }

  const usertoken = JSON.parse(localStorage.getItem('token'))
  useEffect(() => {

  }, [usertoken])



 
  const history = useHistory();

  const handlesignup = () => {
    if (usertoken == null) {
      setModalShow(true)
    }
    else {
      history.push("/home/profilepage")
    }
  }

  // const activeLink = (isActive) =>{
  //   return{
  //     color:isActive? "#fafafa":"#777777",
  //     backgroundColor:isActive? "#00a850":"#fafafa"
  //   }

  // }


  return (
    <div className={`navbar-wrapper ${isSticky || ''}`}>
      <Navbar expand="lg" className={colorChange ? 'custom-navbarchange' : 'custom-navbar'}>
        <Navbar.Brand href="/flight">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className='booking'>
            <div className='container'>
              <ul className="nav nav-Tabs">
                <li className="nav-item">
                  <NavLink to='/home' className="nav-link me-2"  name="home" onClick={() => refreshPage} >
                    <img src={Homeicon} alt="home"  className="me-1" style={{ height: "22px", width: "22px" }}></img>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/flight' className="nav-link me-2"  name="flight" onClick={() => refreshPage} >
                    <img src={Plane} alt="plane" className="me-1" style={{ height: "30px", width: "30px" }} />
                    Flights
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/hotel' className="nav-link"  name="hotels" onClick={() => refreshPage} >
                    <img src={Hotel} alt="hotel" className="me-1" style={{ height: "22px", width: "22px" }} />
                    Hotels
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/bus' className="nav-link"  name="bus" onClick={() => refreshPage} >
                    <img src={Bus} alt="bus" className="me-1" style={{ height: "22px", width: "22px" }} />
                    Bus
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/car' className="nav-link"  name="car" onClick={() => refreshPage} >
                    <img src={Car} alt="car" className="me-1" style={{ height: "22px", width: "22px" }} />
                    Car
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </Navbar.Collapse>
        <div className="d-flex justify-content-end">
          {(usertoken) ? (
            <div className=" me-3 hoyjoyTriphistory">
              <small className="mb-0">My Trip</small>
              <NavLink to='/home/triphistory' style={{ textDecoration: "none" }} className="d-flex mt-0">
                <FontAwesomeIcon icon={faToolbox} style={{ fontSize: "20px", color: "orange" }} />
                <p className="mt-0 ms-1" style={{ color: "#2b2d91" }}>Manage Booking</p>
              </NavLink>
            </div>
          ) : null}
          <div className="mt-2">
            {(usertoken) ? (
              <div className="register" onClick={toggleShow}>
                <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: "28px", color: "orange" }} />
                <a className="ms-2 mb-0 link-success fw-bold" onClick={() => handlesignup()}>View profile</a>
              </div>
            ) : (
              <div className="register" onClick={toggleShow}>
                <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: "28px", color: "orange" }} />
                <a className="ms-2 mb-0 link-success fw-bold" onClick={() => handlesignup()}>Login / Signup</a>
                <Login
                  show={modalShow}
                  ModalSetter={setModalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            )}

            {/* <Toast show={open} onClose={toggleShow} className="Logintoast" ref={refOne}>
              <Toast.Body>
                <div className='p-2'>
                  <div>
                    <h5 className="fw-bold mb-0">Hey Traveller</h5>
                    <p className="m-0">Get exclusive deals & Manage your trips</p>
                    {(usertoken) ? (
                      <button className="btn btn-warning w-100 mt-2 fw-bold" onClick={() => handlesignup()}>Profile</button>
                    ) : (
                      <button className="btn btn-warning w-100 mt-2 fw-bold" onClick={() => handlesignup()}>Login/Sign Up</button>
                    )}
                  </div>
                  <div className="ms-3 pt-1">
                    <div className="d-flex mt-2">
                      <img src={Offers} style={{ height: "20px", width: "20px" }} alt="img"></img>
                      <NavLink to='/home/offers' style={{ textDecoration: "none" }}>
                        <h6 className="ms-2 fw-bold text-dark">Offers</h6>
                      </NavLink>
                    </div>
                    {(usertoken) ? (
                      <div className="d-flex">
                        <img src={Suitcase} alt="img" style={{ height: "20px", width: "20px" }}></img>
                        <NavLink to='/home/triphistory' style={{ textDecoration: "none" }}>
                          <h6 className="ms-2 fw-bold text-dark">Manage Booking</h6>
                        </NavLink>
                      </div>
                    ) : null}
                  </div>
                </div>
              </Toast.Body>
            </Toast> */}
          </div>
        </div>
      </Navbar>

    </div>


  );
};
export default CustomNavbar;
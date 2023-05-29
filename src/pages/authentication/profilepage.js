import React, { useEffect, useState, useSelector } from 'react';
import './login.scss'
import { Card, Button, Row, Col, Modal } from 'react-bootstrap';
import UserDetails from './userdetails';
import CustomNavbar from '../../component/navbar/Navbar';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearReducer } from '../../store/actions/signup'
import { Getprofiledetail } from '../../store/services/signup'

const ProfilePage = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    const handleSubmit = async () => {
        localStorage.removeItem("token");
        localStorage.removeItem("mobile");
        dispatch(clearReducer());
        history.push("/home/logout")
    }



    // #upload image
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);

    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = uploadedImage;
            current.file = file;
            reader.onload = e => {
                current.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };



    // #Logout 
    const [show, setShow] = useState(false);
    const [firstname, setFirstname] = useState()
    const [emailid, setEmailid] = useState()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        loadgetprofiledetails()
    }, []);

    const mobileNumber = localStorage.getItem('mobile')

    const loadgetprofiledetails = async () => {
        let profiledetails = await Getprofiledetail();
        setFirstname(profiledetails?.result[0]?.firstName)
        setEmailid(profiledetails?.result[0]?.email)
    }
    return (
        <>
            {/* <CustomNavbar /> */}
            <div className='bgtheme '>
                <h3 className='text-center text-white pt-5 mt-5'>My Profile</h3>
            </div>
            <div className='profilePage mx-auto'>
                <Card>
                    <Row>
                        <Col xs={3} classNamee="imageuploader">
                            <input
                                className='imageuploader'
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                ref={imageUploader}
                                style={{
                                    display: "none",
                                }}
                            />
                            <div
                                className='imageuploader'
                                onClick={() => imageUploader.current.click()}
                            >
                                <img
                                    ref={uploadedImage}
                                />
                            </div>
                        </Col>
                        <Col className='p-5'>
                            <table>
                                {(firstname !== '') ? (
                                    <tr>
                                        <th><h5 className='text-danger'>Name:</h5></th>
                                        &nbsp;<td><h5>{firstname}</h5></td>
                                    </tr>

                                ) : null}
                                <th><h5 className='text-danger'>{(firstname !== '')?"Mobile":"User"}:</h5></th>
                                &nbsp;<td><h5>{mobileNumber}</h5></td>
                                {(emailid !== '') ? (
                                    <tr>
                                        <th><h5 className='text-danger'>Email ID:</h5></th>
                                        &nbsp;<td><h5>{emailid}</h5></td>
                                    </tr>

                                ) : null}

                            </table>
                            {/* <h5>janani</h5> */}

                        </Col>
                    </Row>
                </Card>
                <div>
                    <UserDetails mobile={mobileNumber} name={firstname} />
                </div>
                <div className='text-center p-3 shadow-lg' style={{ backgroundColor: "#AFE1AF" }}>
                    <Button variant="success" className='w-25 shadow-lg loginbuttons' onClick={handleShow}>Logout</Button>
                    <Modal centered show={show} onHide={handleClose}>
                        <Modal.Header closeButton style={{ backgroundColor: "#AFE1AF" }}>
                            <Modal.Title>Cancel</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Are You sure you want to Logout? <br /> This would discard all saved changes</p>
                            <Row>
                                <Col><Button variant="secondary fw-bold" className="w-75" onClick={handleClose}>Cancel</Button></Col>
                                <Col className="text-end "><Button variant="success fw-bold" className='logoutbuttons w-75' onClick={() => handleSubmit()}>Yes, Log out</Button></Col>
                            </Row >
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </>
    )
}

export default ProfilePage

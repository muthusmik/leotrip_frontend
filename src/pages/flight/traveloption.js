import React from "react";
import { useState, useEffect, useRef } from 'react'
import Card from 'react-bootstrap/Card';
import './flight.scss'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';


const TravelOption = () => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        Infants: 0,
    });
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };
    const [triptype, setTriptype] = useState({ className: "All Class", id: 1 });
    const handleChange = (value) => {
        switch (value) {
            case "Economy":
                {
                    setTriptype({ className: "Economy", id: 2 });
                }
                break;
            case "Business":
                {
                    setTriptype({ className: "Business", id: 4 });
                }
                break;
            case "FirstClass":
                {
                    setTriptype({ className: "FirstClass", id: 6 });
                }
                break;
            case "AllClass":
                {
                    setTriptype({ className: "AllClass", id: 1 });
                }
                break;
            default:
                return "AllClass";
        }
    }


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



    return (
        <div className="headerSearchItem">
            <div
                onClick={() => setOpen(true)}
                className="w-100 mt-2 text-center" style={{ height: "65px" }}>
                <span className="headerSearchText">&nbsp;&nbsp;&nbsp;{`${options.adult} adult · ${options.children} children · ${options.Infants} Infants Travel Class: ${triptype.className}`}</span>
            </div>
            {open && (
                <Card className="travelmenucard" style={{ position: 'relative', zIndex: '1' }} ref={refOne}>
                    <Card.Body >
                        <div className="row text-center ">
                            <div className="col-3 mx-auto">
                                <h5>Adult</h5>
                                <h6>(Aged 12+ yrs)</h6>
                                <InputGroup className="mx-auto w-75">
                                    <Button size="sm" variant="outline-primary" disabled={options.adult <= 1} onClick={() => handleOption("adult", "d")}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </Button>
                                    <Form.Control size="sm" type="text" value={options.adult} className="text-center" />
                                    <Button size="sm" variant="outline-primary" disabled={options.adult >= 10} onClick={() => handleOption("adult", "i")}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </Button>
                                </InputGroup>
                            </div>
                            <div className="col-3 mx-auto">
                                <h5>Children</h5>
                                <h6>(Aged 2-12 yrs)</h6>
                                <InputGroup className="mx-auto w-75">
                                    <Button size="sm" variant="outline-primary" disabled={options.children <= 0} onClick={() => handleOption("children", "d")}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </Button>
                                    <Form.Control size="sm" type="text" value={options.children} className="text-center" />
                                    <Button size="sm" variant="outline-primary" disabled={options.children >= 9} onClick={() => handleOption("children", "i")}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </Button>
                                </InputGroup>
                            </div>
                            <div className="col-3 mx-auto">
                                <h5>Infants</h5>
                                <h6>(Below 2 yrs)</h6>
                                <InputGroup className="mx-auto w-75">
                                    <Button size="sm" variant="outline-primary" disabled={options.Infants <= 0} onClick={() => handleOption("Infants", "d")}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </Button>
                                    <Form.Control size="sm" type="text" value={options.Infants} className="text-center" />
                                    <Button size="sm" variant="outline-primary" disabled={options.Infants >= 9} onClick={() => handleOption("Infants", "i")}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </Button>
                                </InputGroup>
                            </div>
                        </div>
                        <div className="row text-center">
                            <h5 className="my-3">Travel Class</h5>
                            {/* <div className="col mx-auto">
                            <Button variant="outline-primary mx-3" onClick={() => handleChange("Economy")}>Economy</Button>
                            <Button variant="outline-primary mx-3" onClick={() => handleChange("Premium Economy")} >Premium Economy</Button>
                            <Button variant="outline-primary mx-3" onClick={() => handleChange("Business")} >Business</Button>
                            <Button variant="outline-primary mx-3" onClick={() => handleChange("First Class")} >First Class</Button>
                            </div> */}
                            <Form.Select className='w-50 mx-auto fw-bold' onChange={(e) => handleChange(e.target.value)}>
                                <option className="fw-bold" value="AllClass">All Class</option>
                                <option className="fw-bold" value="Economy">Economy</option>
                                <option className="fw-bold" value="Business">Business</option>
                                <option className="fw-bold" value="FirstClass">First Class</option>
                            </Form.Select>
                        </div>
                    </Card.Body>
                    <Card.Footer className="bg-white text-end">
                        <Button variant="outline-primary mx-3" onClick={() => setOpen(false)}>Done</Button>
                    </Card.Footer>
                </Card>
            )}
        </div>
    )
}
export default TravelOption
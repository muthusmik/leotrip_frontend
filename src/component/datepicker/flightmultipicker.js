import React, { useState, useEffect, useRef } from 'react';
import { DayPicker, Row, RowProps, DateRange } from 'react-day-picker';
import { differenceInCalendarDays } from 'date-fns';
import Button from 'react-bootstrap/Button';
import { Badge, Card } from 'react-bootstrap';
import 'react-day-picker/dist/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

function isPastDate(date) {
  return differenceInCalendarDays(date, new Date()) < 0;
}
function OnlyFutureRow(props) {
  const isPastRow = props.dates.every(isPastDate);
  if (isPastRow) return <></>;
  return <Row {...props} />;
}


export default function MultiDatePickers({ onSelect, Searchstyle, required, selected, calanderstyle, departure, modelVie, onClick, returndate }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const style2 = {
    fontSize: "16px",
    fontWeight: "500",
    color: "rgb(119, 119, 119)",
    fontFamily: "Quicksand, Avenir, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,Noto Color Emoji",
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


  var startDate = moment(departure).format("DD/MM/YYYY");
  var endDate = moment(returndate).format("DD/MM/YYYY");

  var checkin = moment(startDate, "DD.MM.YYYY");
  var checkout = moment(endDate, "DD.MM.YYYY");



  return (
    <div className='headerSearchItem'>
      <div onClick={handleClick} className={Searchstyle}>
        <div className='row d-inline-flex flight-content'>
          <div className='col daterange'>
            <p className='mb-0 text-left' style={style2}>Departure</p>
            <div className='my-2 text-center ms-1'>{`${departure}`}</div>
          </div>
          <div className='col daterange  mx-3'>
            <p className='mb-0 text-left' style={style2}>Return</p>
            <div className='my-2 text-center ms-1'>{`${returndate}`}</div>
          </div>
        </div>
      </div>
      {
        open && (
          <Card className={calanderstyle} style={{ position: 'absolute', zIndex: '6' }} ref={refOne}>
            <Card.Body >
              <DayPicker
                fromDate={new Date()}
                mode="range"
                required={required}
                selected={selected}
                onSelect={onSelect}
                numberOfMonths={2}
                pagedNavigation
                components={{ Row: OnlyFutureRow }}
                disabled={isPastDate}
              />
            </Card.Body>
            <Card.Footer className="bg-white text-end">
              <h6 className='text-danger text-end'>Pick check-in and check-out date<Button variant="outline-primary mx-3" onClick={() => setOpen(false)}>Done</Button></h6>
            </Card.Footer>
          </Card>
        )
      }
    </div >
  );
}
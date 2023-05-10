import { useState } from 'react'
import Slider from 'react-slick'
import { Row, Col,Card } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import PriceCards from '../../json/Flight/flightprice.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../carousel/flightprice.css'

export default function Carousel() {
  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
    arrows: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    infinite: true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 800,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  }



  return (
    <>
      <Row className='pricecontent mx-auto'>
        <Col className='controls my-4 text-end'>
          <button onClick={sliderRef?.slickPrev}>
            <FaChevronLeft />
          </button>
        </Col>
        <Col xs={10} className="my-3">
          <Slider ref={setSliderRef} {...sliderSettings}>
            {PriceCards.map((card, index) => (
              <Card key={index} className='cards'>
                <div className=' card-list text-center'>
                  <span>{card.date}</span><br />
                  <span><b><FontAwesomeIcon icon={faIndianRupeeSign} />{card.price}</b></span>
                </div>
              </Card>
            ))}
          </Slider>
        </Col>
        <Col className='controls my-4 text-end'>

          <button onClick={sliderRef?.slickNext}>
            <FaChevronRight />
          </button>
        </Col>
      </Row>
    </>
  )
}

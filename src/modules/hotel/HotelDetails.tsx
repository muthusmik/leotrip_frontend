import hotelname from '../../assets/images/room2.jpg';
const HotelDetails = () => {
  const CarDetails = [
    {
      hotelImage: hotelname,
      name: "Chennai Flights",
      location: "Via - Delhi, Mumbai, Coimbatore, Madurai",
    },
    {
      hotelImage: hotelname,
      name: "Goa Flights",
      location: "Via - Delhi , Mumbai, Bangalore, Ahmedabad",
    },
    {
      hotelImage: hotelname,
      name: "Mumbai Flights",
      location: "Via - Delhi, Bangalore, Chennai, Ahmedabad",
    },
    {
      hotelImage: hotelname,
      name: "Hyderabad Flights",
      location: "Via - Chennai, Mumbai, Bangalore, Delhi",
    },
    {
      hotelImage: hotelname,
      name: "Delhi Flights",
      location: "Via - Mumbai, Pune, Bangalore, Chennai",
    },
    {
      hotelImage: hotelname,
      name: "Pune Flights",
      location: "Via - Delhi, Bangalore, Chennai, Ahmedabad",
    },
    {
      hotelImage: hotelname,
      name: "Kolkata Flights",
      location: "Via - Delhi, Mumbai, Bangalore, Pune",
    },
    {
      hotelImage: hotelname,
      name: "Bangalore Flights",
      location: "Via - Delhi, Pune, Mumbai, Kolkata",
    },
    {
      hotelImage: hotelname,
      name: "Jaipur Flights",
      location: "Via - Mumbai, Delhi, Pune, Bangalore",
    },
    // Add more flight details objects as needed
  ];
  return (
    <>
      {/* <div className="my-10 mx-5 md:mx-[5%]  bg-white rounded-3xl p-5 shadow-lg">
                <div className='grid grid-cols-3 flex justify-absolute'>
                    {CarDetails.map((detail, index) => (
                        <div key={index} className="flex bg-white p-3 mb-3">
                            <img src={detail.hotelImage} alt={detail.name} className="mr-3 w-10 h-10 rounded-full" />
                            <div>
                                <p className='font-bold text-lg'>{detail.name}</p>
                                <p className='text-xs text-light-black'>{detail.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
      <div className="my-10  md:mx-[5%] bg-white rounded-3xl p-5 shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {CarDetails.map((detail, index) => (
            <div key={index} className="flex bg-white p-3 mb-3">
              <img src={detail.hotelImage} alt={detail.name} className="mr-3 w-10 h-10 rounded-full" />
              <div>
                <p className="font-bold text-lg">{detail.name}</p>
                <p className="text-xs text-light-black">{detail.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}
export default HotelDetails;
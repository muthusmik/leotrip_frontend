import flightname from '../../assets/images/flight_2.jpg';
const FlightDetails = () => {
  const flightDetails = [
    {
      flightImage: flightname,
      name: "Chennai Flights",
      location: "Via - Delhi, Mumbai, Coimbatore, Madurai",
    },
    {
      flightImage: flightname,
      name: "Goa Flights",
      location: "Via - Delhi , Mumbai, Bangalore, Ahmedabad",
    },
    {
      flightImage: flightname,
      name: "Mumbai Flights",
      location: "Via - Delhi, Bangalore, Chennai, Ahmedabad",
    },
    {
      flightImage: flightname,
      name: "Hyderabad Flights",
      location: "Via - Chennai, Mumbai, Bangalore, Delhi",
    },
    {
      flightImage: flightname,
      name: "Delhi Flights",
      location: "Via - Mumbai, Pune, Bangalore, Chennai",
    },
    {
      flightImage: flightname,
      name: "Pune Flights",
      location: "Via - Delhi, Bangalore, Chennai, Ahmedabad",
    },
    {
      flightImage: flightname,
      name: "Kolkata Flights",
      location: "Via - Delhi, Mumbai, Bangalore, Pune",
    },
    {
      flightImage: flightname,
      name: "Bangalore Flights",
      location: "Via - Delhi, Pune, Mumbai, Kolkata",
    },
    {
      flightImage: flightname,
      name: "Jaipur Flights",
      location: "Via - Mumbai, Delhi, Pune, Bangalore",
    },
    // Add more flight details objects as needed
  ];
  return (
    <>
      <div className="my-10  md:mx-[5%] bg-white rounded-3xl p-5 shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {flightDetails.map((detail, index) => (
            <div key={index} className="flex bg-white p-3 mb-3">
              <img src={detail.flightImage} alt={detail.name} className="mr-3 w-10 h-10 rounded-full" />
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
export default FlightDetails;
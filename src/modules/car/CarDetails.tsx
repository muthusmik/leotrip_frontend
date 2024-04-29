import carname from '../../assets/images/carbg.avif';
const CarDetails = () => {
  const CarDetails = [
    {
      carImage: carname,
      name: "Chennai Flights",
      location: "Via - Delhi, Mumbai, Coimbatore, Madurai",
    },
    {
      carImage: carname,
      name: "Goa Flights",
      location: "Via - Delhi , Mumbai, Bangalore, Ahmedabad",
    },
    {
      carImage: carname,
      name: "Mumbai Flights",
      location: "Via - Delhi, Bangalore, Chennai, Ahmedabad",
    },
    {
      carImage: carname,
      name: "Hyderabad Flights",
      location: "Via - Chennai, Mumbai, Bangalore, Delhi",
    },
    {
      carImage: carname,
      name: "Delhi Flights",
      location: "Via - Mumbai, Pune, Bangalore, Chennai",
    },
    {
      carImage: carname,
      name: "Pune Flights",
      location: "Via - Delhi, Bangalore, Chennai, Ahmedabad",
    },
    {
      carImage: carname,
      name: "Kolkata Flights",
      location: "Via - Delhi, Mumbai, Bangalore, Pune",
    },
    {
      carImage: carname,
      name: "Bangalore Flights",
      location: "Via - Delhi, Pune, Mumbai, Kolkata",
    },
    {
      carImage: carname,
      name: "Jaipur Flights",
      location: "Via - Mumbai, Delhi, Pune, Bangalore",
    },
    // Add more flight details objects as needed
  ];
  return (
    <>
      <div className="my-10  md:mx-[5%] bg-white rounded-3xl p-5 shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {CarDetails.map((detail, index) => (
            <div key={index} className="flex bg-white p-3 mb-3">
              <img src={detail.carImage} alt={detail.name} className="mr-3 w-10 h-10 rounded-full" />
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
export default CarDetails;
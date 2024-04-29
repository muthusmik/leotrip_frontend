import busname from '../../assets/images/double-taker.jpg';
const BusDetails = () => {
  const BusDetails = [
    {
      busImage: busname,
      name: "Buses From Bangalore To",
      location: "Chennai, Hyderabad, Coimbatore, Mumbai, Goa",
    },
    {
      busImage: busname,
      name: "Buses From Chennai To",
      location: "Bangalore, Coimbatore, Madurai, Hyderabad, Trichy",
    },
    {
      busImage: busname,
      name: "Buses From Hyderabad To",
      location: "Bangalore, Chennai, Mumbai, Pune, Vijayawada",
    },
    {
      busImage: busname,
      name: "Buses From Pune To",
      location: "Goa, Bangalore, Nagpur, Hyderabad, Mumbai",
    },
    {
      busImage: busname,
      name: "Buses From Delhi To",
      location: "Lucknow, Dehradun, Manali, Kanpur, Jaipur",
    },
    {
      busImage: busname,
      name: "Buses From Kolkata To",
      location: "Durgapur, Asansol, Siliguri, Bhubaneshwar, Bardhaman",
    },
    {
      busImage: busname,
      name: "Buses From Coimbatore To",
      location: "Chennai, Bangalore, Madurai, Pondicherry, Nagercoil",
    },
    {
      busImage: busname,
      name: "Buses From Ahmedabad To",
      location: "Mumbai, Rajkot, Surat, Pune, Indore",
    },
    {
      busImage: busname,
      name: "Buses From Mumbai T",
      location: "Bangalore, Goa, Pune, Indore, Ahmedabad",
    },
    // Add more flight details objects as needed
  ];
  return (
    <>
      <div className="my-10  md:mx-[5%] bg-white rounded-3xl p-5 shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {BusDetails.map((detail, index) => (
            <div key={index} className="flex bg-white p-3 mb-3">
              <img src={detail.busImage} alt={detail.name} className="mr-3 w-10 h-10 rounded-full" />
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
export default BusDetails;
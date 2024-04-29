import flightImage from '../../assets/icons/flight-bgless.svg'
import laugaugeImage from '../../assets/images/laugauge.png'
import flightcomImage from '../../assets/images/airportcheckin.png'
function GuideLine() {
  const data = [
    {
      image: flightImage,
      text1: "planning  to book an internation airport Flight?",
      text2: "Check Travel Guideline",
    },
    {
      image: laugaugeImage,
      text1: "We are now available in english",
      text2: "Change Lauguage",
    },
    {
      image: flightcomImage,
      text1: "Complate your web check-in on LaoTrip easy step",
      text2: "Know More",
    },
    // Add more objects as needed
  ];
  return (
    <>
      <div className="mb-10 mx-5 md:mx-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {data.map((item, index) => (
            <div key={index} className="flex items-center bg-gray-100 shadow-lg rounded-lg py-4">
              <img src={item.image} alt={item.image} className="mr-3 w-14 h-14 md:w-16 md:h-16 py-1" />
              <div>
                <p className="text-light-black text-sm py-1 md:text-base">{item.text1}</p>
                <p className="text-sm py-1 text-int-blue md:text-base">{item.text2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}
export default GuideLine;
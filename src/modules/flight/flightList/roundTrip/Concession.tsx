import Dollar from "../../../../assets/icons/dollar.png";
import Calender from "../../../../assets/icons/calender.png";
import Trolly from "../../../../assets/icons/trolly.png";
import Travelbag from "../../../../assets/icons/travelbag.png";
const Concession = () => {
  return (
    <>
      <div className="flex flex-wrap text-xs ">
        <div className="flex flex-row items-center">
          <img src={Travelbag} alt="404" className="h-6 w-6 ms-5 m-3 mt-2" />
          <div>
            <p>Cabin Bag</p>
            <p className="text-light-black">7 Kgs</p>
          </div>
        </div>
        <div className="flex flex-row items-center ">
          <img src={Trolly} alt="404" className="h-6 w-6 ms-5 m-3 mt-2" />
          <div>
            <p>Check in</p>
            <p className="text-light-black">15 Kgs</p>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <img src={Dollar} alt="404" className="h-6 w-6 ms-5 m-3 mt-2" />
          <div>
            <p>Cancellation</p>
            <p className="text-light-black">Rs 3000 onwards</p>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <img src={Calender} alt="404" className="h-6 w-6 ms-5 m-3 mt-2" />
          <div>
            <p>Date Change</p>
            <p className="text-light-black">Rs 2750 Onwards</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Concession;

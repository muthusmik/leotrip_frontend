import { summary } from "../buslist/json";
import Ticket from "../../../assets/images/ticket.png";
import RightArrow from "../../../assets/images/right-arrow.svg";
import DownArrow from "../../../assets/images/down-arrow.svg";
const Summary = () => {
  return (
    <div className=" sticky top-10">
      <div className="border-2 bg-white shadow-xl rounded-xl mx-4">
        <div className="flex flex-col justify-between p-5">
          <p className="font-bold text-1xl">Ticket(s)</p>
          <div className="mx-3 mt-2">
            <div className="flex my-3">
              <img src={Ticket} alt="404" className="h-7 w-7 absolute" />
              <img
                src={DownArrow}
                className="h-3.5 w-3.5 relative mt-2 ms-1.5"
                alt="404"
              />
              <button className="font-bold text-xl text-int-blue-dark ms-4">
                Download E-Ticket(s)
              </button>
            </div>
            <div className="flex my-3">
              <img src={Ticket} alt="404" className="h-7 w-7 absolute" />
              <img
                src={RightArrow}
                className="h-3.5 w-3.5 relative mt-2 ms-1.5"
                alt="404"
              />
              <button className="font-bold text-xl text-int-blue-dark ms-4">
                Email/SMS E-Ticket(s)
              </button>
            </div>
            <div className="flex my-3">
              <img src={Ticket} alt="404" className="h-7 w-7 absolute" />
              <img
                src={DownArrow}
                className="h-3.5 w-3.5 relative mt-2 ms-1.5"
                alt="404"
              />
              <button className="font-bold text-xl text-int-blue-dark ms-4">
                Download Invoice(s)
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 bg-white shadow-xl rounded-xl p-5 m-4">
        <h1 className="font-bold text-1xl ">Price summary</h1>
        <div className="mt-5">
          {summary.map((item, index) => (
            <div key={index} className="text-sm">
              <div className="flex justify-between">
                <p className="text-light-black ">{item.baseFare}</p>
                <p>{item.fare}</p>
              </div>
              <hr className=" h-px bg-light-black    rounded mb-3 mt-2"></hr>

              <div className="flex justify-between">
                <p className="text-light-black">{item.tax}</p>
                <p>{item.taxAmount}</p>
              </div>
              <hr className=" h-px bg-light-black   rounded mb-3 mt-2"></hr>

              <div className="flex justify-between">
                <p className="text-light-black">{item.convinenceFee}</p>
                <p>{item.convienceAmount}</p>
              </div>
              <hr className=" h-px bg-light-black   rounded mb-3 mt-2"></hr>

              <div className="flex justify-between">
                <p className="text-primary">{item.coupon}</p>
                <p>{item.feeAmount}</p>
              </div>
              <hr className=" h-px bg-light-black   rounded mb-3 mt-2"></hr>

              <div className="flex justify-between mt-7">
                <p className="text-base font-bold">{item.total}</p>
                <p>{item.totalAmount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-2 bg-white shadow-xl rounded-xl m-4">
        <div className="flex justify-between bg-[#D9D9D9] p-5 rounded-t-xl">
          <p className="text-base font-bold">Total Amount</p>
          <p className="font-bold">₹ 1350</p>
        </div>
        <div className="flex justify-between p-5">
          <p className="text-sm">Yes Bank</p>
          <p className="text-sm">₹ 1350</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;

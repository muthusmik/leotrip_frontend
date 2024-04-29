import Ticketbg from "../../../../../assets/images/tiketview.jpg";
const ViewTicket = () => {
  return (
    <>
      <div className="flex flex-row w-[80%] mx-auto">
        <div
          className=" border w-[60%] bg-cover h-[300px]"
          style={{ backgroundImage: `url(${Ticketbg})` }}
        >
          <div className="bg-[#b7d8ed]">
            <p>Ticket Details</p>
          </div>
        </div>
        <div className=" border w-[20%]">da</div>
      </div>
    </>
  );
};

export default ViewTicket;

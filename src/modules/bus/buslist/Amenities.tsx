import Sos from "../../../assets/icons/sos.png";
import Pillow from "../../../assets/icons/pillows.png";
import Cctv from "../../../assets/icons/security-camera.png";
import Usb from "../../../assets/icons/usb.png";
import Lamp from "../../../assets/icons/table-lamp.png";
import AIGenerated from "../../../assets/images/ai-generated.png";
import Archi from "../../../assets/images/architecture.jpg";
import Pixmo from "../../../assets/images/pixmo.jpg";
import doubletaker from "../../../assets/images/double-taker.jpg";
const BusAmenities = () => {
  return (
    <>
      <div>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 w-full mt-5" />
        <div className="font-poppinsRegular">
          <span className="ms-4 mt-2">Amenities</span>
          <div className="flex flex-wrap justify-around mt-5 ">
            <div className="flex flex-row items-center">
              <img src={Sos} alt="Emergency Contact" className="h-8 w-8 mx-3" />
              Emergency Contact Number
            </div>
            <div className="flex flex-row items-center">
              <img src={Usb} alt="Usb" className="h-8 w-8 mx-3" />
              Charging Point
            </div>
            <div className="flex flex-row items-center">
              <img src={Lamp} alt="Lamp" className="h-8 w-8 mx-3" />
              Reading Light
            </div>
            <div className="flex flex-row items-center">
              <img src={Pillow} alt="Pillow" className="h-8 w-8 mx-3" />
              Pillow
            </div>
            <div className="flex flex-row items-center">
              <img src={Cctv} alt="Cctv" className="h-8 w-8 mx-3" />
              CCTV
            </div>
          </div>
        </div>
        <div className="font-poppinsRegular">
          <span className="ms-4 mt-5">Photos</span>
          <div className="flex flex-row px-5 py-3">
            <div className="justify-stretch mt-3 p-2">
              <img
                src={Pixmo}
                alt="404"
                className="w-[100%] h-[100%] rounded-lg"
              />
            </div>
            <div className=" justify-stretch mt-3 p-2">
              <img
                src={AIGenerated}
                alt="404"
                className="w-[100%] h-[100%] rounded-lg"
              />
            </div>
            <div className=" justify-stretch mt-3 p-2">
              <img
                src={Archi}
                alt="404"
                className="w-[100%] h-[100%] rounded-lg"
              />
            </div>
            <div className=" justify-stretch mt-3 p-2">
              <img
                src={doubletaker}
                alt="404"
                className="w-[100%] h-[100%] rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusAmenities;

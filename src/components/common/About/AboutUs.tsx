import Callsupport from "./Callsupport";
import Carbusflight from "./Carbusflight";
import Rating from "./Rating";
import User from "./User";

export function AboutUs() {
    return (
        <div className='bg-[#DBF1FF] h-auto  px-10 xl:px-[12%] lg:px-5  '>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="w-full flex justify-center">
                    <Carbusflight />
                </div>
                <div className="w-full flex justify-center">
                    <User />
                </div>
                <div className="w-full flex justify-center">
                    <Callsupport />
                </div>
                <div className="w-full flex justify-center">
                    <Rating />
                </div>
            </div>
        </div>
    );
}

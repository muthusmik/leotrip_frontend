import Callsupport from "./Callsupport";
import Carbusflight from "./Carbusflight";
import Rating from "./Rating";
import User from "./User";

export function AboutUs() {
    return (
        <>
            <div className='bg-[#DBF1FF] h-96 px-[10%] lgxl:h-[470px] lg:h-[470px] lgxl:px-[12%] lg:px-[5%] mdlg:h-[600px] md:h-[600px]'>
                <div className="w-fit lg:grid lg:grid-rows-1 lg:grid-flow-col lg:gap-10 lgxl:gap-18 items-center py-8 h-80
                    mdlg:grid mdlg:grid-rows-2 mdlg:grid-flow-col mdlg:gap-x-32 mdlg:gap-y-60 mdlg:pt-40 mdlg:pb-0 mdlg:pl-20
                    md:grid md:grid-rows-2 md:grid-flow-col md:gap-x-20 md:gap-y-64 md:pt-40 md:pb-0 md:pl-16">
                    <Carbusflight />
                    <User />
                    <Callsupport />
                    < Rating />
                </div>
            </div>
        </>
    );
}

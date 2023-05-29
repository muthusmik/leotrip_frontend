import React from "react";
import "../../carlist/carlist.scss";
import CustomNavbar from '../../../../component/navbar/Navbar';
import CarModifySearch from '../carmodifysearch';
import CarFilter from './carfilter';
import CarBookingList from './carbookinglist';
import Footer from "../../../../component/footer/footer";





const CarListContent = () => {

    return (
        <>
            <div className='carlistcontent container mt-4 '>
                <div className='listWrapper'>
                    <div className='carlistfilter'>
                        <CarFilter />
                    </div>
                    <div className='carlistresult  ms-4'>
                        <CarBookingList />
                    </div>
                </div>
            </div>
        </>
    )
}





const CarListLocal = () => {
    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);
    return (

        <>
            <div className="mb-5">
                {/* <CustomNavbar /> */}
                <CarModifySearch />
                <CarListContent />
            </div>
            <Footer/>
        </>

    );

};
export default CarListLocal;
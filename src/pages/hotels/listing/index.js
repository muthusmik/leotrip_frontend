import React, { useEffect, useState } from "react";
import './hotellist.scss';
import CustomNavbar from '../../../component/navbar/Navbar';
import HotelModifySearch from "./hotelmodifysearch";
import HotelFilter from "./hotelFilter";
import Footer from "../../../component/footer/footer"
import HotelBookingList from "./hotelbookinglist";
import { useSelector } from "react-redux";
import ErrorPage from "../../404page";
import { List } from "rsuite";
import { setError } from "../../../store/actions/bus";



const HotelListContent = () => {

    /* #store */
    const FilterData = useSelector(state => state.HotelSearch)
    // console.log("i am happy", FilterData)


    /* Store List of data */
    const [filteritems, setFilterItems] = useState("")
    const [message, setMessage] = useState("")

    const [errorMsg, setErrorMsg] = useState(false)


    useEffect(() => {
        setFilterItems([]);
        if (FilterData.data?.length > 1) {
            setFilterItems(FilterData.data[1]);
            //setErrorMsg("")
            // console.log("4k api")
        }
        else if (FilterData.statusCode === 400) {
            setErrorMsg("Something went wrong")
            // console.log("4k error....", errorMsg)
        }
    }, [FilterData.data[1]])


    // console.log("iam jeeva", errorMsg)

    /*  #filtering Statevalue */
    const [filtering, setFiltering] = useState({
        star: false,
        price: false,
    });

    /* #price filtering */

    const [minprice, setMinprice] = useState('')
    const [maxprice, setMaxprice] = useState('')
    const [selected, setSelected] = useState(0);


    /* # pricefilter */
    const [pricefilterData, setPricefilterData] = useState(FilterData.data[1])

    const Pricefilter = (val) => {

        switch (val) {
            case 2:
                setMinprice(0)
                setMaxprice(2000)
                break;
            case 4:
                setMinprice(2000)
                setMaxprice(4000)
                break;
            case 6:
                setMinprice(4000)
                setMaxprice(6000)
                break;
            case 8:
                setMinprice(6000)
                setMaxprice(8000)
                break;
            case 9:
                setMinprice(8000)
                setMaxprice(100000)
            default:
                setMinprice(0)
                setMaxprice(2000)
                break;
        }
        if (filtering.star)
            setFiltering({ price: true, star: true });
        else
            setFiltering({ price: true, star: false });

        filteringprocess();
    }



    const Selectrating = (selected) => {
        if (selected < 6) {
            if (filtering.price)
                setFiltering({ star: true, price: true });
            else
                setFiltering({ star: true, price: false });
        }
        else if (selected === 6) {
            console.log("dinesh", selected)
            setFiltering({ star: false, price: false });
            setFilterItems(FilterData.data[1]);
        }
        setSelected(selected);
        filteringprocess()
    }

    useEffect(() => {
        console.log("i am here", filteritems)

    }, [filteritems])

    useEffect(() => {
        filteringprocess()
    }, [selected, minprice, maxprice])

    const filteringprocess = () => {
        setFilterItems([]);
        if (filtering.price && filtering.star) {
            setErrorMsg(false);
           
            const priceDataFilter = FilterData.data[1].filter((e) => e.Price.OfferedPriceRoundedOff > minprice && e.Price.PublishedPriceRoundedOff < maxprice);
            const mfilter = priceDataFilter.filter((a) => a.StarRating === selected);
            console.log("jiiii both", mfilter)
            if (mfilter.length !== 0) {
                
                setFilterItems(mfilter);
            }
            else{
                setErrorMsg(true);
            }
        }
        else if (filtering.price) {
            setErrorMsg(false);
            const priceDataFilter = FilterData.data[1].filter((e) => e.Price.OfferedPriceRoundedOff > minprice && e.Price.PublishedPriceRoundedOff < maxprice);
            console.log("jiiii look me", priceDataFilter)
            if (priceDataFilter.length !== 0) {
                setFilterItems(priceDataFilter);
            }
            else{
                setErrorMsg(true);
            }
        }
        else if (filtering.star) {
            setErrorMsg(false);
            const mfilter = FilterData.data[1].filter((a) => a.StarRating === selected);
            console.log("jiiiii....", mfilter)
            if (mfilter.length !== 0) {
                setFilterItems(mfilter);
            }
            else{
                setErrorMsg(true);
            }
        }
        else {
            setErrorMsg(false);
            setFilterItems(FilterData.data[1]);
        }
    }

    console.log("SSSK", FilterData)
    console.log("Mkk", filteritems)

    return (
        <>
            <div className='hotellistcontent container mt-4'>
                <div className='hotellistWrapper'>
                    <div className='hotellistfilter'>
                        <HotelFilter onhandle={Selectrating} handlePrice={Pricefilter} />
                    </div>
                    <div className='hotellistresult  ms-5 '>
                        <HotelBookingList filter={filteritems} handleError={errorMsg} /* handleMessage={message} */ />
                    </div>
                </div>
            </div>
        </>
    )

}

const HotelList = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="hotelsearch mb-5">
                <CustomNavbar />
                <HotelModifySearch />
                <HotelListContent />
            </div>
            <Footer />
        </>
    );


};
export default HotelList;

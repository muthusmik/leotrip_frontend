import { HomeFooter } from 'components/common/Homepagrfooter';
import Navbar from 'components/common/Navbar';
import Carousel from 'components/common/slider';
import React from 'react';
import BusSearchComponent from './BusSearchComponent';
// import * as Yup from 'yup';

function BusModule() {

    // const validationSchema = Yup.object({
    //     from: Yup.string()
    //         // .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Invalid email address')
    //         .required('Email is required'),
    //     to: Yup.string()
    //         // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*?&])[A-Za-z\d@$!%^*?&]{8,}$/, "Invalid password")
    //         // .min(8, "Minimum 8 characters required")
    //         .required('Password is required')
    // })
    return (
        <div>
            <Navbar />
            <Carousel>
                <BusSearchComponent />
            </Carousel>
            <HomeFooter />
        </div>
    );
}

export default BusModule;

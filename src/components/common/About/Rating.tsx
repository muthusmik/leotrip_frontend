import React from 'react';
import rating from '../../../assets/images/rating.svg';

interface RatingProps {}

const Rating: React.FC<RatingProps> = () => {
    return (
        <div className="mt-11">
            <img src={rating} alt="" className="" />
            <div className='font-extrabold text-xl w-[100%] text-center mt-3'>24/7</div>
            <h3 className='text-lg text-center w-[100%]'>CUSTOMER&nbsp;CARE</h3>
        </div>
    );
}

export default Rating;

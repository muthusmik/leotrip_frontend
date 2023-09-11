import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface PriceRangeSliderProps {
    title: string
    priceRange: [number, number]
    setPriceRange: (value: [number, number]) => void
    onPriceRangeChange: (value: [number, number]) => void
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({ title, priceRange, setPriceRange, onPriceRangeChange }) => {

    return (
        <div className='py-1 px-4'>
            <h1 className='text-lg font-poppinsRegular mb-2'>{title}</h1>

            <Slider
                min={0}
                max={100}
                step={1}
                range
                value={priceRange}
                onChange={(value: [number, number]) => {
                    setPriceRange(value);
                    onPriceRangeChange(value);
                }}
            />
            <div className='flex justify-between font-poppinsRegular mt-2'>
                <label>Rs: {priceRange[0]}</label>
                <label>Rs: {priceRange[1]}</label>
            </div>
        </div>
    );
};

export default PriceRangeSlider;

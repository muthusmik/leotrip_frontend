import React, { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { isSameDay, startOfMonth, getDay, addDays } from 'date-fns';
import Holidays from 'date-holidays';
import useOutsideAlerter from 'hooks/useOutside';
import { ReactComponent as ChevronRight } from '../../assets/icons/chevron-double-right.svg';
import { ReactComponent as ChevronLeft } from '../../assets/icons/chevron-double-left.svg';


interface CustomDatePickerProps {
    onSelect: (date: Date) => void;
}

const CustomDatePicker = forwardRef<any, CustomDatePickerProps>(
    ({ onSelect }, ref) => {

        const hd = new Holidays();
        hd.init('US');
        const inputRef = useRef<HTMLInputElement | null>(null);
        useImperativeHandle(ref, () => ({
            focus: () => {
                inputRef.current?.focus();
            }
        }));
        const [selectedDate, setSelectedDate] = useState<Date | null>(null);
        const [currentDate, setCurrentDate] = useState<Date>(new Date());

        const [isDatePickerVisible, setDatePickerVisible] = useState<boolean>(false);




        const monthStart = startOfMonth(currentDate);
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


        const handlePrevMonth = () => {
            setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1));
        };

        const handleNextMonth = () => {
            setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1));
        };

        const renderDaysByWeek = () => {
            const daysByWeek: Array<JSX.Element[]> = [];

            let currentWeek: JSX.Element[] = [];
            const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
            const daysInPreviousMonth = getDay(firstDayOfMonth);
            const totalDays = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

            // Push empty cells for the days before the first day of the month
            for (let i = 0; i < daysInPreviousMonth; i++) {
                currentWeek.push(<td key={`empty-${i}`} className="empty-cell"></td>);
            }

            for (let day = 1; day <= totalDays; day++) {
                const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                const isToday = isSameDay(date, new Date());
                const isSelected = selectedDate && isSameDay(date, selectedDate);
                const isHighlighted = isHoliday(date);

                currentWeek.push(
                    <td
                        key={day}
                        className={`text-center py-2 pointer-cursor `}
                        onClick={() => handleDateClick(date)}
                    >
                        <div className={` text-sm pointer-cursor hover:bg-[#F5EBEB] hover:text-black hover:rounded-[150px] ${isToday ? 'rounded-[150px] bg-[#F5EBEB]' : ''} ${isSelected ? ' text-white rounded-[10px] bg-[#BD3319]' : ''} ${isHighlighted ? isSelected ? 'text-white' : 'text-[#f72111]' : ''
                            }`}>{day}<br />
                        </div>

                        {isHighlighted &&
                            <div className={`text-[10px] text-int-grey-30`}>
                                {isHighlighted.length > 0 ? (
                                    isHighlighted.length > 5 ? `${isHighlighted.substring(0, 5)}...` : isHighlighted
                                ) : ''}
                            </div>
                        }
                    </td>
                );

                if (getDay(date) === 6 || day === totalDays) {
                    daysByWeek.push(currentWeek);
                    currentWeek = [];
                }
            }

            return daysByWeek.map((week, index) => (
                <>
                    <tr key={index} className={`leading-10 ${index === daysByWeek.length - 1 ? '' : 'border-b-2 border-int-gray'} `} style={{ "padding": "10px" }}>{week}</tr>
                </>
            ));
        };

        const handleDateClick = (date: Date) => {
            setSelectedDate(date);
            onSelect(date);
            setDatePickerVisible(false);
        };

        const isHoliday = (date: Date) => {
            const holidays = hd.getHolidays(2023).map((item: any) => ({
                date: new Date(item.date).toDateString(), // Convert holiday date to the same format as 'date' parameter
                name: item.name
            }));

            const formattedDate = date.toDateString(); // Convert input date to the same format as holiday dates
            const foundHoliday = holidays.find(holiday => holiday.date === formattedDate);
            if (foundHoliday || date.getDay() === 6 || date.getDay() === 0) {
                return foundHoliday ? foundHoliday.name : true; // Return holiday name if found, otherwise true
            }
            return false;
        };



        const handleInputClick = () => {
            setDatePickerVisible(!isDatePickerVisible)
        };
        const wrapperRef = useRef(null);

        useOutsideAlerter({ ref: wrapperRef, callback: () => setDatePickerVisible(false) });
        return (

            <div className="custom-datepicker">
                <input
                    type="text"
                    placeholder='Date of journey'
                    className='font-poppinsRegular'
                    value={selectedDate ? selectedDate.toLocaleDateString('en-GB') : ''}
                    onClick={handleInputClick}
                    ref={inputRef}
                    readOnly // Make the input box read-only to prevent direct editing
                />
                {isDatePickerVisible && (
                    <div ref={wrapperRef} className='fixed mt-2 mx-5 bg-white rounded-2xl shadow-lg p-2'>
                        <div className="flex mx-5 mt-1 bg-white items-center text-center justify-between">
                            <ChevronLeft onClick={handlePrevMonth} className='w-5' />
                            {currentDate.toLocaleDateString('default', { month: 'short', year: 'numeric' })}
                            <ChevronRight onClick={handleNextMonth} className='w-5' />
                        </div>
                        <table className="days-table mx-5 ">
                            <thead>
                                <tr>
                                    {dayNames.map(dayName => (
                                        <th key={dayName} className="p-2 text-int-dark-blue">
                                            {dayName}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody >
                                {renderDaysByWeek()}
                            </tbody>
                        </table>
                    </div>)}
            </div>
        );
    });

export default CustomDatePicker;

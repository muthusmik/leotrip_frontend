import React, { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { isSameDay, startOfMonth, getDay, addDays, isAfter, isBefore } from 'date-fns';
import Holidays from 'date-holidays';
import useOutsideAlerter from 'hooks/useOutside';
import { ReactComponent as ChevronRight } from '../../assets/icons/chevron-double-right.svg';
import { ReactComponent as ChevronLeft } from '../../assets/icons/chevron-double-left.svg';
import moment from "moment";

interface CustomDatePickerProps {
    onSelect: (date: Date) => void;
    minDate: Date;
    maxDate: Date;
    placeholder: string;
    defaultDate: Date;
}

const CustomDatePicker = forwardRef<any, CustomDatePickerProps>(
    ({ onSelect, minDate, maxDate, placeholder, defaultDate }, ref) => {

        const hd = new Holidays();
        hd.init('US');
        const [selectedDate, setSelectedDate] = useState<Date | null>(null);
        const [currentDate, setCurrentDate] = useState<Date>(new Date());
        const [isHidePrevious, setIsHidePrevious] = useState(true);
        const [isHideNext, setIsHideNext] = useState(false);


        const [isDatePickerVisible, setDatePickerVisible] = useState<boolean>(false);




        const monthStart = startOfMonth(currentDate);
        const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

        const inputRef = useRef<HTMLInputElement | null>(null);
        useImperativeHandle(ref, () => ({
            focus: () => {
                inputRef.current?.focus();
                setDatePickerVisible(true)
            }
        }));

        const handlePrevMonth = () => {
            const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);

            if (!minDate || prevMonth.getFullYear() > minDate.getFullYear() ||
                (prevMonth.getFullYear() === minDate.getFullYear() && prevMonth.getMonth() >= minDate.getMonth())) {
                setCurrentDate(prevMonth);
                if (isHideNext) setIsHideNext(false)
            } else {
                setIsHidePrevious(true)
            }
        };

        const handleNextMonth = () => {
            const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);

            if (!maxDate || nextMonth.getFullYear() < maxDate.getFullYear() ||
                (nextMonth.getFullYear() === maxDate.getFullYear() && nextMonth.getMonth() <= maxDate.getMonth())) {
                setCurrentDate(nextMonth);
                if (isHidePrevious) setIsHidePrevious(false)
            } else {
                setIsHideNext(true);
            }
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
                const isNotInRange = isDisable(date);

                currentWeek.push(
                    <td
                        key={day}
                        className={`text-center py-2 pointer-cursor align-top `}
                        onClick={() => handleDateClick(date)}
                    >
                        <div className={`mb-0 py-3 text-[14px] pointer-cursor
                                    hover:bg-[#F5EBEB] hover:text-black hover:rounded-[300px]
                                    ${isToday ? 'rounded-[150px] bg-[#F5EBEB]' : ''}
                                    ${isSelected ? 'text-white rounded-[300px] bg-[#BD3319]' : ''}
                                    ${isHighlighted ? (isSelected ? 'text-white' : 'text-[#f72111]') : ''}
                                    ${isNotInRange ? 'opacity-50 pointer-events-none' : ''}`}
                        >{day}<br />
                        </div>

                        {isHighlighted &&
                            <div className={`mt-0 text-[10px] text-int-grey-30 text-top leading-0`}>
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
                <React.Fragment key={index}>
                    <tr key={index} className={`h-14 ${index === daysByWeek.length - 1 ? '' : 'border-b-2 border-int-gray'} `}>{week}</tr>
                </React.Fragment>
            ));
        };

        const handleDateClick = (date: Date) => {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() - 1);

            if ((!minDate || isAfter(date, currentDate)) && (!maxDate || isBefore(date, maxDate))) {
                setSelectedDate(date);
                onSelect(date);
                setDatePickerVisible(false);
            }
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

        const isDisable = (date: Date) => {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() - 1);
            return date < currentDate || date > maxDate;
        }


        const handleInputClick = () => {
            setDatePickerVisible(!isDatePickerVisible)
        };
        const wrapperRef = useRef(null);

        useOutsideAlerter({ ref: wrapperRef, callback: () => setDatePickerVisible(false) });
        return (

            <div className="custom-datepicker cursor-pointer">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={selectedDate ? selectedDate.toLocaleDateString('en-GB') : moment(defaultDate).format('DD/MM/YYYY ddd')}
                    onClick={handleInputClick}
                    ref={inputRef}
                    readOnly // Make the input box read-only to prevent direct editing
                    className='h-full rounded-[10px] font-poppinsRegular w-full text-lg bg-transparent'
                />
                {isDatePickerVisible && (
                    <div ref={wrapperRef} className='fixed mt-2 mx-5 bg-white rounded-2xl shadow-lg p-2 z-40'>
                        <div className="flex mx-5 mt-1 bg-white items-center text-center justify-between" style={{ userSelect: 'none' }}>
                            <div>{!isHidePrevious && <ChevronLeft onClick={handlePrevMonth} className='w-5' />}</div>
                            <div>{currentDate.toLocaleDateString('default', { month: 'short', year: 'numeric' })}</div>
                            <div> {!isHideNext && <ChevronRight onClick={handleNextMonth} className='w-5' />}</div>
                        </div>
                        <table className="days-table mx-5" style={{ userSelect: 'none' }}>
                            <thead className='user-select-none'>
                                <tr className='user-select-none'>
                                    {dayNames.map(dayName => (
                                        <th key={dayName} className="text-int-dark-blue w-[50px]">
                                            {dayName}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className='user-select-none' >
                                {renderDaysByWeek()}
                            </tbody>
                        </table>
                    </div>)}
            </div>
        );
    });

export default CustomDatePicker;

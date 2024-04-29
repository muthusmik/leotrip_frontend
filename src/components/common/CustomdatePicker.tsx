import React, {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import { isSameDay, startOfMonth, getDay, isAfter, isBefore } from "date-fns";
import Holidays from "date-holidays";
import useOutsideAlerter from "hooks/useOutside";
import { ReactComponent as ChevronRight } from "../../assets/icons/chevron-double-right.svg";
import { ReactComponent as ChevronLeft } from "../../assets/icons/chevron-double-left.svg";
import Rightarrow from "../../assets/icons/Arrowtick.svg";
import LeftArrow from "../../assets/icons/arrowtickleft.svg";
import { addMonths } from "date-fns";

interface CustomDatePickerProps {
  onSelect: (date: Date) => void;
  minDate: Date;
  maxDate: Date;
  placeholder: string;
}

const CustomDatePicker = forwardRef<any, CustomDatePickerProps>(
  ({ onSelect, minDate, maxDate, placeholder }, ref) => {
    const hd = new Holidays();
    hd.init("US");
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [isHidePrevious, setIsHidePrevious] = useState(true);
    const [isHideNext, setIsHideNext] = useState(false);
    const [isDatePickerVisible, setDatePickerVisible] =
      useState<boolean>(false);

    const monthStart1 = startOfMonth(currentDate);
    const monthStart2 = startOfMonth(addMonths(currentDate, 1));

    useEffect(() => {
      console.log("hi", selectedDate);
    }, [selectedDate]);

    const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    const inputRef = useRef<HTMLInputElement | null>(null);
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
        setDatePickerVisible(true);
      },
    }));

    const handlePrevMonth = () => {
      const prevMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1
      );

      if (
        !minDate ||
        prevMonth.getFullYear() > minDate.getFullYear() ||
        (prevMonth.getFullYear() === minDate.getFullYear() &&
          prevMonth.getMonth() >= minDate.getMonth())
      ) {
        setCurrentDate(prevMonth);
        if (isHideNext) setIsHideNext(false);
      } else {
        setIsHidePrevious(true);
      }
    };

    const handleNextMonth = () => {
      const nextMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1
      );

      if (
        !maxDate ||
        nextMonth.getFullYear() < maxDate.getFullYear() ||
        (nextMonth.getFullYear() === maxDate.getFullYear() &&
          nextMonth.getMonth() <= maxDate.getMonth())
      ) {
        setCurrentDate(nextMonth);
        if (isHidePrevious) setIsHidePrevious(false);
      } else {
        setIsHideNext(true);
      }
    };

    const renderDaysByWeek = (monthStart: Date) => {
      const daysByWeek: Array<JSX.Element[]> = [];

      let currentWeek: JSX.Element[] = [];
      const firstDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
      );
      const daysInPreviousMonth = getDay(firstDayOfMonth);
      const totalDays = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      ).getDate();

      // Push empty cells for the days before the first day of the month
      for (let i = 0; i < daysInPreviousMonth; i++) {
        currentWeek.push(<td key={`empty-${i}`} className="empty-cell"></td>);
      }

      for (let day = 1; day <= totalDays; day++) {
        const date = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          day
        );
        const isToday = isSameDay(date, new Date());
        const isSelected = selectedDate && isSameDay(date, selectedDate);
        const isHighlighted = isHoliday(date);
        const isNotInRange = isDisable(date);

        currentWeek.push(
          <td
            key={day}
            className={`text-center pointer-cursor align-middle `}
            onClick={() => handleDateClick(date)}
          >
            <div
              className={`mb-0 text-sm pointer-cursor
                                      hover:bg-int-primary-blue hover:text-black hover:rounded
                                      ${
                                        isToday
                                          ? "rounded bg-int-primary-blue"
                                          : ""
                                      }
                                      ${
                                        isSelected
                                          ? "text-white rounded bg-int-primary-blue"
                                          : ""
                                      }
                                      ${
                                        isHighlighted
                                          ? isSelected
                                            ? "text-white"
                                            : "text-[#f72111]"
                                          : ""
                                      }
                                      ${
                                        isNotInRange
                                          ? "opacity-50 pointer-events-none"
                                          : ""
                                      }`}
            >
              {day}
              <br />
            </div>

            {isHighlighted && (
              <div
                className={`mt-0 text-[10px] text-int-grey-30 text-top leading-0`}
              >
                {isHighlighted.length > 0
                  ? isHighlighted.length > 5
                    ? `${isHighlighted.substring(0, 5)}...`
                    : isHighlighted
                  : ""}
              </div>
            )}
          </td>
        );

        if (getDay(date) === 6 || day === totalDays) {
          daysByWeek.push(currentWeek);
          currentWeek = [];
        }
      }

      return daysByWeek.map((week, index) => (
        <React.Fragment key={index}>
          <tr
            key={index}
            className={`h-14 ${
              index === daysByWeek.length - 1 ? "" : " border-int-gray"
            } `}
          >
            {week}
          </tr>
        </React.Fragment>
      ));
    };

    const renderDaysByWeekNextMonth = (monthStart: Date) => {
      const daysByWeek: Array<JSX.Element[]> = [];

      let currentWeek: JSX.Element[] = [];
      const totalDays = new Date(
        monthStart.getFullYear(),
        monthStart.getMonth() + 1,
        0
      ).getDate();

      // Push empty cells for the days before the first day of the month
      for (let i = 0; i < getDay(monthStart); i++) {
        currentWeek.push(<td key={`empty-${i}`} className="empty-cell"></td>);
      }

      for (let day = 1; day <= totalDays; day++) {
        const date = new Date(
          monthStart.getFullYear(),
          monthStart.getMonth(),
          day
        );
        const isToday = isSameDay(date, new Date());
        const isSelected = selectedDate && isSameDay(date, selectedDate);
        const isHighlighted = isHoliday(date);
        const isNotInRange = isDisable(date);

        currentWeek.push(
          <td
            key={day}
            className={`text-center pointer-cursor align-middle `}
            onClick={() => handleDateClick(date)}
          >
            <div
              className={`mb-0 text-sm pointer-cursor
                hover:bg-int-primary-blue hover:text-black hover:rounded
                                      ${
                                        isToday
                                          ? "rounded bg-int-primary-blue"
                                          : ""
                                      }
                                      ${
                                        isSelected
                                          ? "text-white rounded bg-int-primary-blue"
                                          : ""
                                      }
                                      ${
                                        isHighlighted
                                          ? isSelected
                                            ? "text-white"
                                            : "text-[#f72111]"
                                          : ""
                                      }
                                      ${
                                        isNotInRange
                                          ? "opacity-50 pointer-events-none"
                                          : ""
                                      }`}
            >
              {day}
              <br />
            </div>

            {isHighlighted && (
              <div
                className={`mt-0 text-[10px] text-int-grey-30 text-top leading-0`}
              >
                {isHighlighted.length > 0
                  ? isHighlighted.length > 5
                    ? `${isHighlighted.substring(0, 5)}...`
                    : isHighlighted
                  : ""}
              </div>
            )}
          </td>
        );

        if (getDay(date) === 6 || day === totalDays) {
          daysByWeek.push(currentWeek);
          currentWeek = [];
        }
      }

      return daysByWeek.map((week, index) => (
        <React.Fragment key={index}>
          <tr
            key={index}
            className={`h-14 ${
              index === daysByWeek.length - 1 ? "" : " border-int-gray"
            } `}
          >
            {week}
          </tr>
        </React.Fragment>
      ));
    };

    const handleDateClick = (date: Date) => {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() - 1);
      currentDate.setMonth(currentDate.getMonth());

      if (
        (!minDate || isAfter(date, currentDate)) &&
        (!maxDate || isBefore(date, maxDate))
      ) {
        setSelectedDate(date);

        onSelect(date);
        setDatePickerVisible(false);
      }
    };

    const isHoliday = (date: Date) => {
      const holidays = hd.getHolidays(2023).map((item: any) => ({
        date: new Date(item.date).toDateString(), // Convert holiday date to the same format as 'date' parameter
        name: item.name,
      }));

      const formattedDate = date.toDateString(); // Convert input date to the same format as holiday dates
      const foundHoliday = holidays.find(
        (holiday) => holiday.date === formattedDate
      );
      if (foundHoliday || date.getDay() === 6 || date.getDay() === 0) {
        return foundHoliday ? foundHoliday.name : true; // Return holiday name if found, otherwise true
      }
      return false;
    };

    const isDisable = (date: Date) => {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() - 1);
      return date < currentDate || date > maxDate;
    };

    const handleInputClick = () => {
      setDatePickerVisible(!isDatePickerVisible);
    };
    const wrapperRef = useRef(null);

    useOutsideAlerter({
      ref: wrapperRef,
      callback: () => setDatePickerVisible(false),
    });
    return (
      <div className="custom-datepicker cursor-pointer font-poppinsRegular">
        <div className="flex flex-row items-center h-auto">
          <input
            type="text"
            placeholder={placeholder}
            value={
              selectedDate ? selectedDate.getDate() : currentDate.getDate()
            }
            onClick={handleInputClick}
            ref={inputRef}
            readOnly
            className="font-poppinsRegular text-xl md:text-2xl font-bold  mx-auto ps-3 bg-transparent border-0 h-6 w-10 me-1"
          />
          <div className=" flex flex-row items-center justify-around text-xs xl:text-sm">
            {selectedDate ? (
              <>
                <p>
                  {selectedDate.toLocaleDateString("default", {
                    month: "short",
                  })}
                  <span>-</span>
                  {selectedDate.toLocaleDateString("default", {
                    year: "numeric",
                  })}
                </p>
              </>
            ) : (
              <>
                {currentDate.toLocaleDateString("default", {
                  month: "short",
                  year: "numeric",
                })}
              </>
            )}
          </div>
        </div>
        {selectedDate ? (
          <p className="mx-3 text-center text-xs text-gray-600">
            {selectedDate.toLocaleDateString("default", { weekday: "long" })}
          </p>
        ) : (
          <p className="mx-3 text-xs text-gray-600">
            {currentDate.toLocaleDateString("default", { weekday: "long" })}
          </p>
        )}
        {isDatePickerVisible && (
          <div
            ref={wrapperRef}
            className="absolute right-0 lg:right-20 bg-white rounded shadow-2xl  z-40 w-auto md:w-fit pe-1 "
          >
            <div className="bg-white font-bold  border-2 border-white shadow-lg py-2 flex items-center justify-around">
              <p>
                {new Date().toLocaleDateString("default", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <span>-</span>
              <p className="text-center">Book trip for great savings</p>
            </div>
            <div
              className="flex mx-5 bg-white items-center text-center justify-between mt-5"
              style={{ userSelect: "none" }}
            >
              <div>
                {!isHidePrevious && (
                  <img
                    src={LeftArrow}
                    alt="Rightarrow"
                    className="w-7"
                    onClick={handlePrevMonth}
                  />
                )}
              </div>

              <div>
                {!isHideNext && (
                  <img
                    src={Rightarrow}
                    alt="Rightarrow"
                    className="w-7  "
                    onClick={handleNextMonth}
                  />
                )}
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <span className="flex justify-center mb-5 font-bold">
                  {currentDate.toLocaleDateString("default", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <table
                  className="days-table mx-5"
                  style={{ userSelect: "none" }}
                >
                  <thead className="user-select-none">
                    <tr className="user-select-none">
                      {dayNames.map((dayName) => (
                        <th
                          key={dayName}
                          className="text-light-black text-sm font-normal w-[50px]"
                        >
                          {dayName}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="user-select-none">
                    {renderDaysByWeek(monthStart1)}
                  </tbody>
                </table>
              </div>
              <div className="hidden sm:block">
                <span className="flex justify-center mb-5 font-bold">
                  {addMonths(currentDate, 1).toLocaleDateString("default", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <table
                  className="days-table mx-5"
                  style={{ userSelect: "none" }}
                >
                  <thead className="user-select-none">
                    <tr className="user-select-none">
                      {dayNames.map((dayName) => (
                        <th
                          key={dayName}
                          className="text-light-black text-sm font-normal w-[50px]"
                        >
                          {dayName}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="user-select-none">
                    {renderDaysByWeekNextMonth(monthStart2)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);

export default CustomDatePicker;

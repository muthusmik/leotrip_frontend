import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import useOutsideAlerter from "hooks/useOutside";
import flight from "../assets/icons/dropdown-flight.png";
import CountryFlag from "react-country-flag";
import { log } from "console";
import { useLocation } from "react-router-dom";

type AutoSuggestionProps = {
  data: any;
  label: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;

  img: any;
};

const AutoSuggestionList = forwardRef<any, AutoSuggestionProps>(
  ({ label, data, value, setValue, placeholder, img }, ref) => {
    const [query, setQuery] = useState(data.length > 0 ? data[0].city : "");
    const [info, setInfo] = useState(
      data.length > 0 ? data[0].airportCode && data[0].airportName : ""
    );

    const location = useLocation();
    const moduleLocation = location.pathname;

    useEffect(() => {
      console.log("moduleLocation=", location);
    });
    useEffect(() => {
      // Set default values for query and info based on the module
      switch (moduleLocation) {
        case "/flights":
          setQuery(data.length > 0 ? data[0].city : "");
          setInfo(
            data.length > 0
              ? `${data[0].airportCode}, ${data[0].airportName}`
              : ""
          );
          break;
        case "/hotel":
          setQuery(data.length > 0 ? data[0].city : "");
          setInfo(data.length > 0 ? `${data[0].country}` : "");
          break;

        case "/bus":
          console.log("busssdata=", data);
          setQuery(data.length > 0 ? data[0].cityState : "");
          setInfo(data.length > 0 ? `${data[0].country}` : "");
          break;
        case "/car":
          console.log("busssdata=", data);
          setQuery(data.length > 0 ? data[0].cityState : "");
          setInfo(data.length > 0 ? `${data[0].country}` : "");
          break;
        // Add cases for other modules as needed
        default:
          setQuery("");
          setInfo("");
      }
    }, [module, data]);
    const [suggestions, setSuggestions] = useState([]);
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const [suggestionsActive, setSuggestionsActive] = useState(false);

    const inputRef = useRef<HTMLInputElement | null>(null);

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
    }));
    useEffect(() => {
      console.log("hoteldata=", data);
    }, [data]);
    const wrapperRef = useRef(null);
    useOutsideAlerter({
      ref: wrapperRef,
      callback: () => setSuggestionsActive(false),
    });
    const handleChange = (e: { target: { value: any } }) => {
      const query = e.target.value.toLowerCase();

      // setValue(query);
      setQuery(query);

      if (query.length > 1) {
        const filterSuggestions = data.filter(
          (suggestion: any) =>
            suggestion.city.toLowerCase().indexOf(query.toLowerCase()) > -1
        );

        setSuggestions(filterSuggestions);
        setSuggestionsActive(true);
      } else {
        setSuggestionsActive(false);
      }
    };

    const handleSuggestion = () => {
      setSuggestionsActive(true);
    };
    const handleClick = (e: any) => {
      setSuggestions([]);
      const newValue = `${e.city}`;
      const newInfo = `${e.airportCode},${e.airportName}`;
      setValue(e.city);
      setQuery(newValue);
      setInfo(newInfo);

      setSuggestionsActive(false);
    };

    const handleKeyDown = (e: any) => {
      // UP ARROW
      if (e.keyCode === 38) {
        if (suggestionIndex === 0) {
          return;
        }
        setSuggestionIndex(suggestionIndex - 1);
      }
      // DOWN ARROW
      else if (e.keyCode === 40) {
        if (suggestionIndex - 1 === suggestions.length) {
          return;
        }
        setSuggestionIndex(suggestionIndex + 1);
      }
      // ENTER
      else if (e.keyCode === 13) {
        setValue(suggestions[suggestionIndex]);
        setSuggestionIndex(0);
        setSuggestionsActive(false);
      }
    };

    useEffect(() => {
      console.log("value", setValue);
    }, [setValue]);

    const Suggestions = () => {
      return (
        <ul className="suggestions z-50  absolute mt-20 g-black w-[250%] md:w-[150%] lg:w-[190%] sm:w-[200%] overflow-y-auto bg-white rounded-lg">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="flex items-center p-2 hover:bg-sky-200"
              onClick={() => handleClick(suggestion)}
            >
              <img src={flight} alt="fli" className="w-[10%] h-[10%] " />
              <div className="w-[70%] ml-[5%]">
                <h5 className="text-sm md:text-md lg:text-lg">
                  {suggestion["city"]},
                  <span className="text-sm md:text-md lg:text-lg">
                    ({suggestion["airportCode"]})
                  </span>
                </h5>
                <small className="text-gray-400">
                  {suggestion["airportName"]}
                </small>
              </div>
              <p className="ml-2 w-[13%] h-[13%] flex">
                {suggestion["countryCode"]}
              </p>
              <div className="">
                <CountryFlag
                  countryCode={suggestion["countryCode"]}
                  svg
                  style={{ width: "25px", height: "25px" }}
                />
              </div>
            </div>
          ))}
        </ul>
      );
    };

    return (
      <div className="flex flex-col  h-auto  border-0  hover:bg-int-secondary-blue font-poppinsRegular">
        <span className="text-sm">{label}</span>

        <div className="flex flex-col justify-start px-2 border-black z-40">
          <div className="flex flex-col">
            <input
              type="text"
              placeholder={placeholder}
              value={query}
              className="outline-none font-poppinsRegular sm:text-1xl text-base font-bold h-full ps-1 w-full bg-transparent whitespace-nowrap"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onClick={handleSuggestion}
              ref={inputRef}
            />
            <div>
              <p className="text-xxs sm:text-xs  text-start ms-1 whitespace-wraps">
                {info}
              </p>
            </div>
            {suggestionsActive && (
              <div className="absolute  top-28 w-[17%] ml-[-5%] overflow-y-scoll">
                <Suggestions />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default AutoSuggestionList;

import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import useOutsideAlerter from "hooks/useOutside";

type AutoSuggestionProps = {
  data: any;
  label: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  // img: any;
};

const AutoSuggestionList = forwardRef<any, AutoSuggestionProps>(
  ({ label, data, value, setValue, placeholder }, ref) => {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const [suggestionsActive, setSuggestionsActive] = useState(false);

    const inputRef = useRef<HTMLInputElement | null>(null);

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
    }));

    const wrapperRef = useRef(null);
    useOutsideAlerter({
      ref: wrapperRef,
      callback: () => setSuggestionsActive(false),
    });
    const handleChange = (e: { target: { value: string } }) => {
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

    const handleClick = (e: any) => {
      setSuggestions([]);
      setValue(e);
      setQuery(e);
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
    useEffect(() => {}, [suggestions]);
    const Suggestions = () => {
      return (
        <ul className="suggestions bg-slate-600 z-50">
          {suggestions.map((suggestion, index) => {
            return (
              <div
                key={index}
                className="flex items-center p-2 hover:bg-sky-200"
                onClick={() => handleClick(suggestion["city"])}
              >
                <div className="w-[70%] ml-[5%]">
                  <h5 className="text-sm md:text-md lg:text-lg">
                    {suggestion["city"]},{" "}
                    <span>({suggestion["iataCode"]})</span>
                  </h5>
                  <small className="text-gray-400">
                    {suggestion["airportName"]}
                  </small>
                </div>
                <p className="ml-2 w-[13%] h-[13%] flex">
                  {suggestion["countryFlag"]}
                </p>
              </div>
            );
          })}
        </ul>
      );
    };

    return (
      <div className="custom-datepicker cursor-pointer ">
        <div className="flex flex-col mx-5">
          <label className="text-white mt-0 pt-0">{label}</label>
          <div className="w-auto h-8 justify-center border-black ">
            <input
              type="text"
              placeholder={placeholder}
              value={query}
              className="outline-none font-poppinsRegular text-sm text-white  lg:text-md h-full ps-1 w-full bg-int-blue z-50 mb-2"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              ref={inputRef}
            />
            {suggestionsActive && (
              <div className="absolute top-28 w-[24%]">
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

import React, {
    useState,
    useRef,
    forwardRef,
    useImperativeHandle,
    useEffect,
} from "react";
import useOutsideAlerter from "hooks/useOutside";
import flight from '../assets/icons/dropdown-flight.png';
import CountryFlag from "react-country-flag";

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
        const [query, setQuery] = useState("");
        const [suggestions, setSuggestions] = useState([]);
        const [suggestionIndex, setSuggestionIndex] = useState(0);
        const [suggestionsActive, setSuggestionsActive] = useState(false);

        const inputRef = useRef<HTMLInputElement | null>(null);
        console.log("dfghjk", suggestions);
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
        const handleChange = (e: { target: { value: any } }) => {
            const query = e.target.value.toLowerCase();
            // setValue(query);
            setQuery(query);
            if (query.length > 1) {
                console.log("dataaaaaa", data)
                const filterSuggestions = data.filter(
                    (suggestion: any) => suggestion.city.toLowerCase().indexOf(query.toLowerCase()) > -1
                );
                console.log("asdfghjk", filterSuggestions);
                setSuggestions(filterSuggestions);
                setSuggestionsActive(true);
            } else {
                setSuggestionsActive(false);
            }

        };

        const handleClick = (e: any) => {
            console.log("dataeeeee", e)
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
        useEffect(() => {
            console.log("sugggggggggg", suggestions)
        }, [suggestions])
        const Suggestions = () => {
            return (
                <ul className="suggestions left-0 md:left-[50%] mdlg:left-auto bg-slate-600 z-50 absolute mt-1 w-[250%] md:w-[150%] lg:w-[150%] sm:w-[200%]  max-h-30 overflow-y-auto bg-white ">
                    {suggestions.map((suggestion, index) => (
                        <div key={index} className="flex items-center p-2 hover:bg-sky-200" onClick={() => handleClick(suggestion['city'])}>
                            <img src={flight} alt="fli" className="w-[10%] h-[10%] " />
                            <div className="w-[70%] ml-[5%]">
                                <h5 className="text-sm md:text-md lg:text-lg">{suggestion['city']}, <span>({suggestion['iataCode']})</span></h5>
                                <small className="text-gray-400">{suggestion['airportName']}</small>
                            </div>
                            <p className="ml-2 w-[13%] h-[13%] flex">{suggestion['countryCode']}</p>
                            <div className=""><CountryFlag countryCode={suggestion['countryCode']} svg style={{ width: '25px', height: '25px' }}/></div>
                        </div>
                    ))}
                </ul>




            );
        };

        return (
            <div className="flex flex-row rounded-[10px]  h-[70px] px-2 border-black bg-white border-2 hover:bg-slate-100 max-w-[80%] sm:max-w-[60%] md:max-w-[60%] lg:max-w-[70%]">
                <div className="w-[15%] h-full">
                    <p
                        className={`font-poppinsRegular relative bottom-3 bg-white text-center z-50 text-xs sm:text-sm md:text-lg ${label === "Location" ? "w-[80px]" : "w-[46px]"
                            } `}
                    >
                        {label}
                    </p>
                    <img
                        src={img}
                        alt="error"
                        className="w-[90px] h-[43px] relative bottom-3 bg-transparent"
                    />
                </div>
                <div className="w-[85%] flex flex-col justify-center px-2 border-l-2 border-black z-40">
                    <div className="flex items-center h-full w-full">
                        <input
                            type="text"
                            placeholder={placeholder}
                            value={query}
                            className="outline-none font-poppinsRegular text-sm lg:text-lg h-full ps-1 w-full bg-transparent"
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            ref={inputRef}
                        />
                    </div>
                    {suggestionsActive && (

                        <div className="absolute top-40 w-[24%] ml-[-5%] ">
                            <Suggestions />
                        </div>
                    )}
                </div>
            </div>
        );
    }
);

export default AutoSuggestionList;


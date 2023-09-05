
import React, { useState, useRef, forwardRef, useImperativeHandle } from "react";
import useOutsideAlerter from "hooks/useOutside";

type AutoSuggestionProps = {
    data: any,
    label: string,
    value: string,
    setValue: (value: string) => void,
    placeholder: string,
    img: any,
    usedIn: string
};

const AutoSuggestionList = forwardRef<any, AutoSuggestionProps>(
    ({ label, data, value, setValue, placeholder, img, usedIn }, ref) => {
        const [query, setQuery] = useState('')
        const [suggestions, setSuggestions] = useState([]);
        const [suggestionIndex, setSuggestionIndex] = useState(0);
        const [suggestionsActive, setSuggestionsActive] = useState(false);

        const inputRef = useRef<HTMLInputElement | null>(null);
        console.log("USed In..........", usedIn);

        useImperativeHandle(ref, () => ({
            focus: () => {
                inputRef.current?.focus();
            }
        }));

        const wrapperRef = useRef(null);
        useOutsideAlerter({ ref: wrapperRef, callback: () => setSuggestionsActive(false) });
        const handleChange = (e: { target: { value: string; }; }) => {
            const query = e.target.value.toLowerCase();
            // setValue(query);
            setQuery(query)
            if (query.length > 1) {
                const filterSuggestions = data.filter(
                    (suggestion: string) =>
                        suggestion.toLowerCase().indexOf(query) > -1
                );
                setSuggestions(filterSuggestions);
                setSuggestionsActive(true);
            } else {
                setSuggestionsActive(false);
            }
        };

        const handleClick = (e: any) => {
            setSuggestions([]);
            setValue(e.target.innerText);
            setQuery(e.target.innerText);
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

        const Suggestions = () => {
            return (
                <ul className="suggestions bg-slate-600 z-50">
                    {suggestions.map((suggestion, index) => {
                        return (
                            <li
                                // className={index === suggestionIndex ? "active" : ""}
                                className="cursor-pointer hover:bg-gray-500 text-white ps-2 py-1"
                                key={index}
                                onClick={handleClick}
                            >
                                {suggestion}
                            </li>
                        );
                    })}
                </ul>
            );
        };

        return (
            <div className="flex flex-row rounded-[10px] max-w-[50%] h-[70px] border-black bg-white border-2 hover:border-orange-600">
                <div className="w-[15%] h-full">
                    <p className={`font-poppinsRegular relative bottom-3 left-3 bg-white text-center z-50 ${label === "Location" ? "w-[80px]" : "w-[46px]"} `}>{label}</p>
                    <img src={img} alt="error" className="w-[90px] h-[43px] relative bottom-3 bg-transparent" />
                </div>
                <div className="w-[85%] flex flex-col justify-center px-2 border-l-2 border-black hover:border-orange-600 z-40">
                    <div className="flex items-center h-full w-full">
                        <input
                            type="text"
                            placeholder={placeholder}
                            value={query}
                            className="outline-none font-poppinsRegular text-lg h-full ps-1 w-full bg-transparent"
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            ref={inputRef}
                        />
                    </div>
                    {suggestionsActive && (
                        <div className={`absolute ${usedIn === "Car" || usedIn === "Flight" ? 'top-[10.6rem]' : 'top-[7.4rem]'} w-[24%]`}>
                            <Suggestions />
                        </div>)}
                </div>
            </div>
        );
    });

export default AutoSuggestionList;

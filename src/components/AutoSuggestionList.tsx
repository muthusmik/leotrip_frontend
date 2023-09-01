// import { data } from "autoprefixer";
// import React, { useState, useRef, forwardRef, useImperativeHandle } from "react";
// import { ref } from "yup";

// type AutoSuggestionProps = {
//     data: any,
//     label: string,
//     value: string,
//     setValue: (value: string) => void,
//     placeholder: string,
//     img: any
// }

// const AutoSuggestionList = forwardRef<HTMLInputElement, AutoSuggestionProps>(
//     ({ label, data, value, setValue, placeholder, img }, ref) => {

//     const [suggestions, setSuggestions] = useState([]);
//     const [suggestionIndex, setSuggestionIndex] = useState(0);
//     const [suggestionsActive, setSuggestionsActive] = useState(false);
//     const inputRef = useRef<HTMLInputElement | null>(null);

//     useImperativeHandle(ref, () => ({
//         focus: () => {
//             inputRef.current?.focus();
//         }
//     }));

//     const handleChange = (e: { target: { value: string; }; }) => {
//         const query = e.target.value.toLowerCase();
//         setValue(query);
//         if (query.length > 1) {
//             const filterSuggestions = data.filter(
//                 (suggestion: string) =>
//                     suggestion.toLowerCase().indexOf(query) > -1
//             );
//             setSuggestions(filterSuggestions);
//             setSuggestionsActive(true);
//         } else {
//             setSuggestionsActive(false);
//         }
//     };

//     const handleClick = (e: any) => {
//         setSuggestions([]);
//         setValue(e.target.innerText);
//         setSuggestionsActive(false);
//     };

//     const handleKeyDown = (e: any) => {
//         // UP ARROW
//         if (e.keyCode === 38) {
//             if (suggestionIndex === 0) {
//                 return;
//             }
//             setSuggestionIndex(suggestionIndex - 1);
//         }
//         // DOWN ARROW
//         else if (e.keyCode === 40) {
//             if (suggestionIndex - 1 === suggestions.length) {
//                 return;
//             }
//             setSuggestionIndex(suggestionIndex + 1);
//         }
//         // ENTER
//         else if (e.keyCode === 13) {
//             setValue(suggestions[suggestionIndex]);
//             setSuggestionIndex(0);
//             setSuggestionsActive(false);
//         }
//     };

//     const Suggestions = () => {
//         return (
//             <ul className="suggestions bg-slate-600">
//                 {suggestions.map((suggestion, index) => {
//                     return (
//                         <li
//                             // className={index === suggestionIndex ? "active" : ""}
//                             className="cursor-pointer hover:bg-gray-500 text-white ps-2 py-1"
//                             key={index}
//                             onClick={handleClick}
//                         >
//                             {suggestion}
//                         </li>
//                     );
//                 })}
//             </ul>
//         );
//     };

//     return (
//         <div className="flex flex-row rounded-[10px] w-[40%] h-[70px] px-2 border-black bg-white border-2">
//             <div className="w-[15%] h-full">
//                 {label === "Location" ? <h2 className="font-poppinsRegular font-semibold relative bottom-3 bg-white text-center w-[90px]">{label}</h2> : <h2 className="font-poppinsRegular font-semibold relative bottom-3 bg-white text-center">{label}</h2>}
//                 <img src={img} alt="error" className="w-[90px] h-[43px] relative bottom-3" />
//             </div>
//             <div className="w-[85%] flex flex-col justify-center px-4 border-l-2 border-black">
//                 <div className="flex items-center">
//                     <input
//                         type="text"
//                         placeholder={placeholder}
//                         value={value}
//                         className="outline-none font-poppinsRegular h-full ps-1 w-full border-2 border-white"
//                         onChange={handleChange}
//                         onKeyDown={handleKeyDown}
//                         ref={inputRef}
//                     />
//                 </div>
//                 {suggestionsActive && (
//                     <div className="absolute top-28 w-[24%]">
//                         <Suggestions />
//                     </div>)}
//             </div>
//         </div>
//     );

// };

// export default AutoSuggestionList;


import React, { useState, useRef, forwardRef, useImperativeHandle } from "react";

type AutoSuggestionProps = {
    data: any,
    label: string,
    value: string,
    setValue: (value: string) => void,
    placeholder: string,
    img: any
};

const AutoSuggestionList = forwardRef<any, AutoSuggestionProps>(
    ({ label, data, value, setValue, placeholder, img }, ref) => {
        const [query, setQuery] = useState('')
        const [suggestions, setSuggestions] = useState([]);
        const [suggestionIndex, setSuggestionIndex] = useState(0);
        const [suggestionsActive, setSuggestionsActive] = useState(false);

        const inputRef = useRef<HTMLInputElement | null>(null);

        useImperativeHandle(ref, () => ({
            focus: () => {
                inputRef.current?.focus();
            }
        }));

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
            <div className="flex flex-row rounded-[10px] w-[40%] h-[70px] px-2 border-black bg-white border-2">
                <div className="w-[15%] h-full">
                    {label === "Location" ? <h2 className="font-poppinsRegular font-semibold relative bottom-3 bg-white text-center w-[90px]">{label}</h2> : <h2 className="font-poppinsRegular font-semibold relative bottom-3 bg-white text-center">{label}</h2>}
                    <img src={img} alt="error" className="w-[90px] h-[43px] relative bottom-3" />
                </div>
                <div className="w-[85%] flex flex-col justify-center px-2 border-l-2 border-black z-50">
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder={placeholder}
                            value={query}
                            className="outline-none font-poppinsRegular h-full ps-1 w-full border-2 border-white"
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            ref={inputRef}
                        />
                    </div>
                    {suggestionsActive && (
                        <div className="absolute top-28 w-[24%]">
                            <Suggestions />
                        </div>)}
                </div>
            </div>
        );
    });

export default AutoSuggestionList;

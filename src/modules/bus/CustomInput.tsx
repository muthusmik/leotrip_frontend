import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import useOutsideAlerter from "hooks/useOutside";

type CustomInputProps = {
  label: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
};

const CustomInput = forwardRef<any, CustomInputProps>(
  ({ label, value, setValue, placeholder }, ref) => {
    const [query, setQuery] = useState(value);
    const [showError, setShowError] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputValue, setInputValue] = useState("");

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
    }));

    const wrapperRef = useRef(null);
    useOutsideAlerter({
      ref: wrapperRef,
      callback: () => console.log("Clicked outside"),
    });

    const handleChange = (e: { target: { value: any } }) => {
      const newValue = e.target.value;
      setQuery(newValue);
      setValue(newValue);
    };
    useEffect(() => {
      setShowError(query.trim() === "");
    }, [query]);

    return (
      <div className="flex flex-col ">
        <div className="flex flex-row rounded-[10px] h-[50px] px-2 border-light-black bg-white border-2 hover:bg-slate-100">
          <div className="w-full flex flex-col justify-center px-2 border-black z-40">
            <div className="flex items-center h-full w-full">
              <input
                type="text"
                placeholder={placeholder}
                value={query}
                className={`outline-none font-poppinsRegular text-sm lg:text-lg h-full ps-1 w-full bg-transparent ${
                  showError ? "border-red-500" : ""
                }`}
                onChange={handleChange}
                ref={inputRef}
              />
            </div>
          </div>
        </div>
        {showError && (
          <p className="text-red-500 text-xs mt-1">{`${placeholder} is required`}</p>
        )}
      </div>
    );
  }
);

export default CustomInput;

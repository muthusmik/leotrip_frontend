import { cloneElement, useRef, useEffect } from "react";

import useOutsideAlerter from "../hooks/useOutside";
import { useWindowSize } from "usehooks-ts";
import { spawn } from "child_process";
import { reviews } from "modules/bus/buslist/json";
import Checkbox from "components/common/CheckBox";

interface ModalProps {
  active: boolean;
  closeModal: () => void;
  children: JSX.Element;
  width?: string;
  zindex?: any;
  minHeight?: string;
  isSubModal?: boolean;
  transparent?: boolean;
}

export default function ModalFullHeight({
  active,
  closeModal,
  children,
  width = "w-3/4",
  zindex,
  minHeight,
  isSubModal = false,
  transparent = false,
}: ModalProps) {
  const container = useRef(null);
  useOutsideAlerter({ ref: container, callback: () => closeModal() });
  const { height: windowHeight } = useWindowSize();

  useEffect(() => {
    if (active && !minHeight) {
      document.body.classList.add("no-scroll");
    }
    return () => {
      if (!isSubModal) {
        document.body.classList.remove("no-scroll");
      }
    };
  }, [active]);

  const style = {
    minHeight: minHeight ? minHeight : windowHeight ? windowHeight : "100%",
    zIndex: zindex ? zindex : 1,
  };

  return (
    <>
      {active && (
        <div
          style={style}
          className={`flex ${
            minHeight
              ? "items-start pt-20 pb-20 absolute"
              : "items-center fixed"
          } ${
            transparent ? " " : " border-int-dark-blue border-5"
          } justify-center top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 backdrop-blur-xs`}
        >
          <div
            ref={container}
            className={` rounded-lg ${
              transparent ? "bg-transparent" : "bg-white"
            } ${width} ${
              transparent ? " " : " shadow shadow-int-mid-blue "
            } h1 `}
          >
            {cloneElement(children, { close: closeModal })}
          </div>
        </div>
      )}
    </>
  );
}

export const Modal = ({ isOpen, onClose, data }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-auto overflow-y-auto  bg-opacity-20 backdrop-blur-sm">
      <div className="relative w-[75%]  mx-auto my-auto">
        <div className="border-0 rounded-lg shadow-lg bg-white m-5">
          <div className="flex justify-end p-8 border-gray-300">
            <button
              className="text-blue-500 font-bold px-2 py-1 text-sm"
              onClick={onClose}
            >
              <span className="font-poppinsRegular">X Close</span>
            </button>
          </div>

          <div className="w-[40%]">
            <p className="text-sm font-poppinsRegular  text-center my-1">
              <span className="text-dark-green text-lg font-poppinsBold">
                3.7
              </span>
              <span className="font-poppinsRegular text-base">
                from 216 Rating | 54 Reviews
              </span>
            </p>
            {reviews.map((review, index) => (
              <div
                className="flex items-center justify-center mt-4"
                key={index}
              >
                <a href="#" className="text-base font-poppinsBold text-black">
                  {review.stars}
                </a>
                <div className="w-2/4 h-1 mx-4 bg-gray-50 rounded dark:bg-gray-50">
                  <div
                    className="h-1 bg-int-blue-rev rounded"
                    style={{ width: `${review.percentage}%` }}
                  ></div>
                </div>
                <span className="text-base font-poppinsBold text-black ">
                  {review.percentage}%
                </span>
              </div>
            ))}
          </div>
          <div className="w-[40%] flex justify-center mt-5">
            <div>
              <span className="font-poppinsRegular text-base">
                Filter Options
              </span>
              <div className="flex flex-row my-3">
                <Checkbox color={"indigo"} className="mx-2" />
                <label className="font-poppinsRegular text-sm">
                  Positive Reviews
                </label>
              </div>
              <div className="flex flex-row my-3">
                <Checkbox color={"indigo"} className="mx-2 " />
                <label className="font-poppinsRegular text-sm">
                  Critical Reviews
                </label>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="flex flex-col font-poppinsRegular">
              {data.map((item: any, index: number) => (
                <div key={index} className=" p-2">
                  <div className=" flex flex-row w-full rounded-full  ring-offset-2 justify-between mt-5">
                    <div className="flex flex-row">
                      <img
                        src={item.avatar}
                        alt="avatar"
                        className="rounded-full mx-3 w-12"
                      />
                      <span className="mx-3 font-PoppinsSemiBold drop-shadow-2xl flex  items-center">
                        {item.name}
                      </span>
                      <span className="mx-3 font-PoppinsBold drop-shadow-2xl flex  items-center">
                        |
                      </span>
                      <span className="mx-3 font-PoppinsSemiBold drop-shadow-2xl flex  items-center">
                        {item.date}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center bg-int-green-dark text-white font-poppinsRegular rounded-xl p-1 me-10">
                        <svg
                          className="w-4 h-4 text-white-300 me-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <span>{item.review}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-start ms-20">{item.status}</div>
                  <hr className="border mt-2"></hr>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

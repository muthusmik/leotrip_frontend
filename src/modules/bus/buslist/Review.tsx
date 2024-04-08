import { reviews, reviewButton, badReview, comment, data } from "./json";
import { ReviewButton } from "styles/Button";
import { Modal } from "styles/ModalFullHeight";
import { useState } from "react";
const Review = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>

      <div>
        <div className="border border-black max-w-[90%] flex flex-row my-4 mx-auto">
          <div className="w-[33.3%] border border-black p-4 ">
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

          <div className="w-[33.3%] border border-black p-4">
            <p className="font-poppinsRegular text-base">People Reviews</p>
            <div className="flex flex-wrap ">
              {reviewButton.map(({ label, count, color }) => (
                <div className="">
                  <ReviewButton
                    key={label}
                    color={color}
                    count={count}
                    spanClassName="border border-dark-green font-poppinsRegular inline-flex items-center align-end justify-center w-6 h-6 ms-2 text-xs align-end font-semibold bg-dark-green rounded-full text-white"
                  >
                    {label}
                  </ReviewButton>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[33.4%] border border-black p-4">
            <p className="font-poppinsRegular text-base">Could Be Better</p>
            <div className="flex flex-wrap">
              {badReview.map(({ label, count, color }) => (
                <ReviewButton
                  key={label}
                  color={color}
                  count={count}
                  spanClassName="inline-flex items-center align-end justify-center w-6 h-6 ms-2 text-xs align-end font-poppinsRegular bg-red-600 rounded-full"
                >
                  {label}
                </ReviewButton>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-row font-poppinsRegular">
          {comment.map((item, index) => (
            <div key={index} className=" flex flex-col w-[50%] ">
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
                  <div className="flex items-center bg-int-green-dark text-white rounded-lg p-1 me-10">
                    <svg
                      className="w-4 h-4 text-white-300 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <div className="text-xs font-poppinsRegular">
                      {item.rating}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">{item.status}</div>
            </div>
          ))}
        </div>
        <div className="my-2 ">
          <hr className="border "></hr>
          <div className="flex flex-row border-gray-700 text-center">
            <button
              className="text-center w-full my-2 text-blue-600 cursor-pointer btn-modal"
              onClick={toggleModal}
            >
              <span className="font-poppinsRegular font-semibold text-base">
                SEE ALL REVIEWS (count)
              </span>
            </button>
          </div>

          <Modal isOpen={isModalOpen} onClose={toggleModal} data={data} />
        </div>
      </div>
      
    </div>
  );
};
export default Review;

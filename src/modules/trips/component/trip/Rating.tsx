import React, { useState } from "react";
import { Textarea } from "@material-tailwind/react";
import { Generateotp } from "styles/Button";

const Rating = () => {
  const [review, setReview] = useState<string>("");
  const [rating, setRating] = useState<number>(0);

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const renderStars = () => {
    const maxRating = 5; // Adjust as needed for your rating system
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleRatingChange(i)}
          className={`cursor-pointer h-[100px] w-[100px] ${
            i <= rating ? "text-yellow-400" : "text-gray-300"
          } text-8xl mr-1 `}
        >
          ★
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="bg-white p-10 rounded-md">
      <h4 className="text-xl font-poppinsRegular mb-5">
        How would you rate the experience on this trip ?
      </h4>
      {/* Rating */}
      <div className="mb-5 ms-5">{renderStars()}</div>
      <p className="text-xl font-poppinsRegular my-5">
        Tell about your review here ...
      </p>
      <Textarea
        className="border-1 rounded-md w-[70%] h-[200px] px-5"
        placeholder="Write your review here..."
        value={review}
        onChange={handleReviewChange}
      />
      <div className="ml-[70%] mt-5">
        <Generateotp children={"Submit"} />
      </div>
    </div>
  );
};

export default Rating;

import React from "react";
import upcoming from "assets/images/icons8-tomorrow-100 1.svg";
import canceled from "assets/images/icons8-cancel-100 1.svg";
import completed from "assets/images/icons8-edit-calendar-100 1.svg";

export default function TripHead({ activeTab, onTabChange }: any) {
  return (
    <div className="h-full w-full flex gap-[20px]">
      <div
        className={`flex ms-4 ${
          activeTab === "upcoming" ? "border-int-sandal border-b-4" : ""
        }`}
        onClick={() => onTabChange("upcoming")}
      >
        <img src={upcoming} alt="404" />
        <h2 className={`mt-3 font-poppinsRegular `}>
          Upcoming
        </h2>
      </div>
      <div
        className={`flex ms-4 ${
          activeTab === "canceled" ? "border-int-sandal border-b-4" : ""
        }`}
        onClick={() => onTabChange("canceled")}
      >
        <img src={canceled} alt="404" />
        <h2 className={`mt-3 font-poppinsRegular `}>
          Canceled
        </h2>
      </div>
      <div
        className={`flex ms-4 ${
          activeTab === "completed" ? "border-int-sandal border-b-4" : ""
        }`}
        onClick={() => onTabChange("completed")}
      >
        <img src={completed} alt="404" />
        <h2 className={`mt-3 font-poppinsRegular `}>
          Completed
        </h2>
      </div>
    </div>
  );
}

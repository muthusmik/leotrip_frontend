import React, { useRef, useState } from "react";

import ProgresBar from "./ProgressBar";
import ProfileProgressBanar from "./profileprogressbanar";
import MyProfile from "./Myprofile";
import Logindetails from "./Logindetails";
import Travelers from "./Travelers";

export default function Profile() {
  const MyProfileKey = [
    {
      title: "NAME",
      placeholder: "E.g., John Doe",
    },
    {
      title: "BIRTHDAY",
      placeholder: "E.g., 01/01/1990",
    },
    {
      title: "GENDER",
      placeholder: "E.g., Male",
    },
    {
      title: "MARITAL STATUS",
      placeholder: "E.g., Single",
    },
    {
      title: "YOUR ADDRESS",
      placeholder: "E.g., 123 Main St, City, Country",
    },
    {
      title: "PINCODE",
      placeholder: "E.g., 12345",
    },
    {
      title: "STATE",
      placeholder: "E.g., Chennai",
    },
  ];
  const lastItem = MyProfileKey[MyProfileKey.length - 1];

  return (
    <>
      <div className="w-full h-full">
        <div className="w-full h-full flex">
          <div className="w-full h-full">
            <div className="h-fit w-[100%] bg-white border rounded-2xl py-4">
              <ProgresBar />
              <ProfileProgressBanar />
            </div>
            <div className="h-fit w-full bg-white border rounded-2xl py-4 mt-10">
              <MyProfile MyProfileKey={MyProfileKey} lastItem={lastItem} />
            </div>
            <div className="h-fit  bg-white border rounded-2xl py-5 mt-10 mx-2">
              <Logindetails />
            </div>
            <div
              className="h-fit w-full bg-white border rounded-2xl py-5 mt-10"
              id="Travellers"
            >
              <Travelers />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

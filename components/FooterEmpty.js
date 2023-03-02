import React from "react";
import userData from "@constants/data";

export default function FooterEmpty() {
  return (
    <div className="bg-[#F1F1F1] dark:bg-gray-900">
      <div className="max-w-6xl  mx-auto px-4 py-10 md:py-5">
        <div className="h-0.5 w-full bg-white dark:bg-gray-700"></div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
          <div>
            <div>
              Developed by
              <div className="inline-block">
                <a className=" px-2 py-1">
                &copy; {userData.name}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

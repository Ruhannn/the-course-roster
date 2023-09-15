import React from "react";
function TotalContainer({ remainingCredits, totalCreditHours, totalPrice, selectedCourses }) {
    return (
      <div className="bg-white rounded-lg p-6 h-[380px]">
        <h1 className="text-[#2F80ED] text-lg font-bold leading-8 mb-4 pb-3 border-b-2 border-[#1c1b1b] border-opacity-20">
          Credit Hour Remaining {remainingCredits} hr
        </h1>
        <h1 className="text-[#1C1B1B] text-xl font-bold leading-normal">
          Course Name
        </h1>
        <ul className="text-[#1C1B1B] leading-normal list-decimal">
          {selectedCourses.map((course, index) => (
            <li key={index} className="ml-5 leading-8">
              {course.name}
            </li>
          ))}
        </ul>
        <h1 className="text-[#1c1b1b] py-4 my-4 text-opacity-80 border-b-2 border-t-2 border-[#1c1b1b] border-opacity-20">
          Total Credit Hour : {totalCreditHours}
        </h1>
        <h1 className="text-[#141313] font-semibold mb-3">
          Total Price : {totalPrice} USD
        </h1>
      </div>
    );
  }
export default TotalContainer;

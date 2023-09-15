import React, { useState, useEffect } from "react";
import "./App.css";
import TotalContainer from "./TotalContainer";
function CourseList({ courses, selectCourse }) {
    return (
      <div className="grid grid-cols-3 gap-7 place-items-center">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-3 grid place-items-center w-80">
            <img
              src={course.image}
              className="mb-4"
              alt={`Course Image for ${course.name}`}
            />
            <h1 className="text-lg font-semibold mb-3 text-center">
              {course.name}
            </h1>
            <p className="text-gray-600 text-sm leading-6 text-center">
              {course.description}
            </p>
            <div className="grid gap-4 my-2 grid-cols-1 sm:grid-cols-2">
              <div className="flex items-center">
                <img src="src/assets/dollar.svg" alt="Price Icon" />
                <h1 className="text-sm">Price: {course.price}</h1>
              </div>
              <div className="flex items-center">
                <img src="src/assets/Frame.svg" alt="Credit Icon" />
                <h1 className="text-sm">Credit: {course.credit}hr</h1>
              </div>
            </div>
            <button
              onClick={() => selectCourse(course)}
              className="text-white text-lg bg-[#2F80ED] px-28 py-2 mt-2 rounded-md transition duration-300 ease-in-out transform hover:bg-[#4391fa] active:bg-[#4391fa] active:scale-105">
              Select
            </button>
          </div>
        ))}
      </div>
    );
  }
  
  function App() {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("/data.json");
          const data = await response.json();
          setCourses(data.courses);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
  
  
    return (
      <>
        <h1 className="text-center text-3xl font-bold my-8">
          Course Registration
        </h1>

      </>
    );
  }
export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import TotalContainer from "./TotalContainer";
import toast from "react-hot-toast";
import { FaDollarSign } from "react-icons/fa6";
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
              <FaDollarSign></FaDollarSign>
              <h1 className="text-sm">Price: {course.price}</h1>
            </div>
            <div className="flex items-center">
              <img width={22} src="https://i.ibb.co/njN03Wp/svgviewer-png-output.png" alt="" />
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
  const [courses, setCourses] = useState([]);
  const maxCredits = 20;
  const [remainingCredits, setRemainingCredits] = useState(maxCredits);
  const [selectedCourses, setSelectedCourses] = useState([]);

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

  const selectCourse = (course) => {
    const isAlreadySelected = selectedCourses.some(
      (selectedCourse) => selectedCourse.name === course.name
    );

    if (isAlreadySelected) {
      toast.error(`You've already selected ${course.name}.`);
      // alert(`You've already selected ${course.name}.`);
    } else if (remainingCredits - course.credit >= 0) {
      setRemainingCredits(remainingCredits - course.credit);
      setSelectedCourses([...selectedCourses, course]);
    } else {
      toast.error("Not enough credits remaining to select this course.");
    }
  };
  const totalCreditHours = selectedCourses.reduce(
    (total, course) => total + course.credit,
    0
  );
  const totalPrice = selectedCourses.reduce(
    (total, course) => total + course.price,
    0
  );

  return (
    <>
      <h1 className="text-center text-3xl font-bold my-8">
        Course Registration
      </h1>
      <section className="container mx-auto px-14 mt-12 flex gap-5">
        {/* Course */}
        <CourseList courses={courses} selectCourse={selectCourse} />
        {/* Total container */}
        <TotalContainer
          remainingCredits={remainingCredits}
          totalCreditHours={totalCreditHours}
          totalPrice={totalPrice}
          selectedCourses={selectedCourses}
        />
      </section>
    </>
  );
}
export default App;

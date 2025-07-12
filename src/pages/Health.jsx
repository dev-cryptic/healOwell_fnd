import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const HealthToolsPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  return (
    <section className="px-6 py-8">
      <div className="text-center mb-8">
        <h1 className="uppercase text-gray-800 font-semibold text-3xl md:text-6xl">Health Tools</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 justify-center items-center">
        <div className="bg-gray-300 p-4 rounded-lg text-center max-w-xs mx-auto">
          <img src={assets.BMI} className="w-20 h-20 mx-auto md:w-auto md:h-auto" alt="BMI Check" />
          <h3 className="font-semibold my-2 md:text-xl">BMI Check</h3>
          <p className="text-sm text-gray-500 md:text-base">
            Easily calculate your Body Mass Index (BMI) to assess whether you're in a healthy weight range and take control of your health.
          </p>
          <button
            className="mt-4 bg-[#216B7B] text-white px-8 py-2 rounded-full focus:outline-none"
            onClick={() => navigate('/bmi')}
          >
            Click Here
          </button>
        </div>

        <div className="bg-gray-300 p-4 rounded-lg text-center max-w-xs mx-auto">
          <img src={assets.calories} className="w-20 h-20 mx-auto md:w-auto md:h-auto" alt="Calories Checker" />
          <h4 className="font-semibold my-2 md:text-xl">Calories Checker</h4>
          <p className="text-sm text-gray-500 md:text-base">
            Track your daily calorie intake to maintain a balanced diet and achieve your fitness goals effectively.
          </p>
          <button
            className="mt-4 bg-[#216B7B] text-white px-8 py-2 rounded-full focus:outline-none"
            onClick={() => navigate('/calories')}
          >
            Click Here
          </button>
        </div>
      </div>
    </section>
  );
};

export default HealthToolsPage;

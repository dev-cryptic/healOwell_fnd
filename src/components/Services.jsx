import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Services = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  return (
    <section className="px-6 py-8">
      <div className="text-center">
        <h1 className="uppercase text-gray-800 font-semibold text-5xl">Our Services</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
        <div className="bg-gray-300 p-4 rounded-lg text-center">
          <img src={assets.Appointment} className="w-20 h-20 mx-auto md:w-auto md:h-auto" alt="Appointment" />
          <h3 className="font-semibold my-2 md:text-xl">Schedule Appointments </h3>
          <p className="text-sm text-gray-500 md:text-base">
          Book doctor appointments seamlessly and on your schedule. Stay on top of your health with easy reminders and updates!.
          </p>
          <button
            className="mt-4 bg-[#216B7B] text-white px-8 py-2 rounded-full focus:outline-none"
            onClick={() => navigate('/home')} // Use navigate instead of history.push
          >
            Let's Go
          </button>
        </div>

        <div className="bg-gray-300 p-4 rounded-lg text-center">
          <img src={assets.Trainer} className="w-20 h-20 mx-auto md:w-auto md:h-auto" alt="AI Trainer" />
          <h4 className="font-semibold my-2 md:text-xl">AI Yoga Trainer</h4>
          <p className="text-gray-500 text-sm md:text-base">
          Experience personalized yoga sessions anytime with an AI Yoga Trainer. Get real-time guidance and track your progress towards a healthier you!
          </p>
          <button
  className="mt-4 bg-[#216B7B] text-white px-8 py-2 rounded-full focus:outline-none"
  onClick={() => navigate('/YogaHome')}
>
  Let's Go
</button>


        </div>

        <div className="bg-gray-300 p-4 rounded-lg text-center">
        <img src={assets.Meditation} className="w-20 h-20 mx-auto md:w-auto md:h-auto" alt="Meditation" />
          <h4 className="font-semibold my-2 md:text-xl">Meditation</h4>
          <p className="text-gray-500 text-sm md:text-base">
          Embark on a journey of inner peace with guided meditation. Calm your mind, reduce stress, and find balance through daily mindfulness practices tailored just for you.
          </p>
          <button
            className="mt-4 bg-[#216B7B] text-white px-8 py-2 rounded-full focus:outline-none"
            onClick={() => navigate('/Player')} 
          >
            Let's Go
          </button>
        </div>

        <div className="bg-gray-300 p-4 rounded-lg text-center">
        <img src={assets.Health} className="w-20 h-20 mx-auto md:w-auto md:h-auto" alt="Physical Health" />
          <h4 className="font-semibold my-2 md:text-xl">Physical Health</h4>
          <p className="text-gray-500 text-sm md:text-base">
          Take charge of your physical health with easy tools like BMI calculation and fitness tracking. Set goals, monitor progress, and achieve a healthier lifestyle step by step!
          </p>
          <button
            className="mt-4 bg-[#216B7B] text-white px-8 py-2 rounded-full focus:outline-none"
            onClick={() => navigate('/health')}
          >
            Let's Go
          </button>
        </div>
      </div>

    </section>
  );
};

export default Services;

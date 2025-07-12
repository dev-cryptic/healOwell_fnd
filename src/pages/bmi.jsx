import React, { useState } from "react";

function BMICalculator() {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState(null);
  const [comment, setComment] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");

  const calculateBMI = () => {
    if (!age || !height || !weight || !gender) {
      setModalText("All fields are required!");
      setModalOpen(true);
    } else {
      const bmiValue = Number(weight) / ((Number(height) / 100) ** 2);
      setBmi(bmiValue.toFixed(2));
      setComment(getBMIComment(bmiValue));
    }
  };

  const getBMIComment = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi <= 24.9) return "Healthy";
    if (bmi >= 25 && bmi <= 29.9) return "Overweight";
    if (bmi >= 30 && bmi <= 34.9) return "Obese";
    return "Extremely obese";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-700 text-center mb-8">
          BMI Calculator
        </h1>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Age</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="flex justify-around mb-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="gender"
              className="form-radio"
              value="male"
              onChange={() => setGender("male")}
            />
            <span className="ml-2 text-gray-700">Male</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="gender"
              className="form-radio"
              value="female"
              onChange={() => setGender("female")}
            />
            <span className="ml-2 text-gray-700">Female</span>
          </label>
        </div>

        <div className="flex justify-between mb-4">
          <div className="w-1/2 pr-2">
            <label className="block text-gray-700 font-semibold">Height (cm)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="w-1/2 pl-2">
            <label className="block text-gray-700 font-semibold">Weight (kg)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
        </div>

        <button
          onClick={calculateBMI}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Calculate BMI
        </button>

        {bmi && (
          <div className="mt-6 text-center">
            <p className="text-xl font-semibold text-gray-700">Your BMI is</p>
            <div className="text-3xl font-bold text-blue-500">{bmi}</div>
            <p className="text-lg font-semibold text-gray-700">
              You are <span className="text-blue-500">{comment}</span>
            </p>
          </div>
        )}

        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg max-w-xs">
              <p>{modalText}</p>
              <button
                onClick={() => setModalOpen(false)}
                className="mt-4 bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BMICalculator;
